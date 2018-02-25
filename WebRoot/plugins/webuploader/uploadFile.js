$(function() {
  var fileMd5;// 文件的MD5值
  var maxSize = 10;// 单个文件最大值10M
  var custFileName = '';// 客户端文件名
  var ext = '';// 后缀名

  // 检测是否已经安装flash以及flash的版本

  // 获取服务器路径
  var locat = (window.location + '').split('/');
  if ('files' == locat[3]) {
    locat = locat[0] + '//' + locat[2];
  } else {
    locat = locat[0] + '//' + locat[2] + '/' + locat[3];
  };

  // WebUploader实例
  var uploader = WebUploader.create({
    // swf文件路径
    swf : './uploader.swf',
    // runtimeOrder: 'flash',//强制使用flash
    // sendAsBinary:true, //指明使用二进制的方式上传文件
    // fileVal:"upload", //指明参数名称，后台也用这个参数接收文件
    // 文件接收服务端。
    server : locat + '/files/add.do',
    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick : {
      id : '#uploadBtn',
      // 默认为true可以多选,false不可以多选
      multiple : false
    },
    // 不压缩image, 默认如果是jpeg，文件上传前会先压缩然后再上传！
    resize : true,
    // 选完文件后，是否自动上传
    auto : true,
    // 开启分片上传
    chunked : true,
    // true为可重复 ，false为不可重复 默认为undifind 也是不可重复
    duplicate : true,
    // 如果要分片，分多大一片？ 默认大小为5M
    chunkSize : 10 * 1024 * 1024
      // 限制大小10M，超出提示
      // fileSizeLimit: maxSize*1024*1024,

      /*
       * accept : { //限制上传文件为MP4 extensions : 'mp4', mimeTypes : 'video/mp4', }
       */
    });
  // 注册组件
  // 监听分块上传过程中的三个时间点
  WebUploader.Uploader.register({
        "before-send-file" : "beforeSendFile",
        "before-send" : "beforeSend",
        "after-send-file" : "afterSendFile"
      }, {
        // 时间点1：所有分块进行上传之前调用此函数
        beforeSendFile : function(file) {
          // 秒传验证
          var deferred = WebUploader.Deferred();
          // 1、计算文件的唯一标记，用于断点续传
          // 如果.md5File(file)方法里只写一个file参数则计算MD5值会很慢 所以加了后面的参数：10*1024*1024
          (new WebUploader.Uploader()).md5File(file, 0, 10 * 1024 * 1024)
              // 及时显示进度
              .progress(function(percentage) {
                    $('#fileInfo').find("p.state").text("正在读取文件信息...");
                    console.log('正在读取文件信息...');
                  })
              // 如果读取出错了，则通过reject告诉webuploader文件上传出错。
              .fail(function() {
                    deferred.reject();
                    console.log("读取出错了");
                  })
              // md5值计算完成
              .then(function(val) {
                    fileMd5 = val;
                    this.owner.options.formData.fileMd5 = val;
                    console.log('===============' + fileMd5);
                    $('#fileInfo').find("p.state").text("成功获取文件信息...");
                    // 获取文件信息后进入下一步
                    deferred.resolve();
                  });
          custFileName = file.name;
          var index1 = custFileName.lastIndexOf(".");
          var index2 = custFileName.length;
          ext = custFileName.substring(index1, index2);// 后缀名
          // 发送文件md5字符串到后台
          /*
           * 默认参数 id: file.id, name: file.name, type: file.type,
           * lastModifiedDate: file.lastModifiedDate, size: file.size
           */

          return deferred.promise();
        },
        // 时间点2：如果有分块上传，则每个分块上传之前调用此函数
        beforeSend : function(block) {
          var deferred = WebUploader.Deferred();
          $.ajax({
                type : "POST",
                url : locat + '/files/checkChunk.do',
                data : {
                  fileMd5 : fileMd5,// 文件唯一标记
                  chunk : block.chunk,// 当前分块下标
                  chunkSize : block.end - block.start// 当前分块大小
                },
                dataType : "json",
                success : function(response) {
                  if (response.ifExist) {
                    deferred.reject();// 分块存在，跳过
                  } else {
                    // 分块不存在或不完整，重新发送该分块内容
                    deferred.resolve();
                  }
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                  console.error("验证分块失败");
                  console.log(XMLHttpRequest.status);
                  console.log(XMLHttpRequest.readyState);
                  console.log(textStatus);// parsererror 文件格式不正确
                },
                complete : function(XMLHttpRequest, textStatus) {
                  this; // 调用本次AJAX请求时传递的options参数
                }
              });
          // 发送文件md5字符串到后台
          this.owner.options.formData.fileMd5 = fileMd5;
          deferred.resolve();
          return deferred.promise();
        },
        // 时间点3：所有分块上传成功后调用此函数
        afterSendFile : function(file) {
          $("#fileInfo").attr("dataset-path", custFileName);
          // 如果分块上传成功，则通知后台合并分块
          $.ajax({
                type : "POST",
                url : locat + '/files/mergeChunks.do',
                data : {
                  fileMd5 : fileMd5,
                  ext : file.ext
                },
                success : function(response) {
                  console.log('文件合并成功');
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                  console.error("文件合并失败");
                  console.log(XMLHttpRequest.status);
                  console.log(XMLHttpRequest.readyState);
                  console.log(textStatus);// parsererror 文件格式不正确
                },
                complete : function(XMLHttpRequest, textStatus) {
                  this; // 调用本次AJAX请求时传递的options参数
                }
              });
        }
      });

  // 当文件被加入队列之前触发
  uploader.on('beforeFileQueued', function(file) {
        // 如果是单文件上传，把旧的文件地址传过去
        /*
         * if (!p.multiple) { if (p.sendurl.indexOf("action=itemcode") > 0) { if
         * ($("#txtItemCode").val() == '') { layui.use([ 'layer' ], function() {
         * var layer = layui.layer; layer.msg('请先填写商品编码再上传图片！'); }); return
         * false; } data.formData = { "name" : name, "desc" : desc }; } }
         */
      });

  // 当有文件被添加进队列的时候
  uploader.on('fileQueued', function(file) {
        $('#fileInfo').empty();
        $('#fileInfo').html('<div id="' + file.id + '" class="item">'
            + '<a class="upbtn" id="btn" onclick="stop()">[取消上传]</a>'
            + '<p class="info">' + file.name + '</p>'
            + '<p class="state">等待上传...</p></div>');
      });

  uploader.on('uploadProgress', function(file, percentage) {
        var li = $('#' + file.id), percent = li.find('.progress .progress-bar');
        // 避免重复创建
        if (!percent.length) {
          percent = $('<div class="progress progress-striped active">'
              + '<div class="progress-bar" role="progressbar" style="width: 0%">'
              + '</div>' + '</div>').appendTo(li).find('.progress-bar');
        }
        li.find('p.state').text('上传中');
        percent.css('width', percentage * 100 + '%');
      });

  // 文件上传过程中创建进度条实时显示。
  uploader.on('uploadProgress', function(file, percentage) {
        $('#fileInfo').find('p.state').text('上传中 '
            + Math.round(percentage * 100) + '%');
      });
  // 上传成功
  uploader.on('uploadSuccess', function(file, response) {
        $('#' + file.id).find('p.state').text('已上传');
      });
  // 上传出错
  uploader.on('uploadError', function(file) {
        $('#' + file.id).find('p.state').text('上传出错');
      });
  // 不管成功或者失败，文件上传完成时触发
  uploader.on('uploadComplete', function(file) {
        $('#' + file.id).find('.progress').fadeOut();
      });
  // 验证单个文件大小
  uploader.on("error", function(type) {
        if (type == "F_DUPLICATE") {
          $('#' + file.id).find('p.state').text('请不要重复选择文件！');
        } else if (type == "Q_EXCEED_SIZE_LIMIT") {
          $('#' + file.id).find('p.state').text("所选附件总大小不可超过 " + maxSize + "M");
        } else {
          $('#' + file.id).find('p.state').text("上传出错！请检查后重新上传！错误代码" + type);
        }
      });

  // 取消上传
  function start() {
    uploader.upload();
    $('#btn').attr("onclick", "stop()");
    $('#btn').text("取消上传");
  }
  // 继续上传
  function stop() {
    uploader.stop(true);
    $('#btn').attr("onclick", "start()");
    $('#btn').text("继续上传");
  }
});
