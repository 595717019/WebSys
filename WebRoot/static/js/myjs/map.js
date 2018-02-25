var locat = (window.location + '').split('/');
$(function() {
      if ('tool' == locat[3]) {
        locat = locat[0] + '//' + locat[2];
      } else {
        locat = locat[0] + '//' + locat[2] + '/' + locat[3];
      };
    });

$(top.hangge());
function openMap() {
	debugger;
  var result = window.showModalDialog(locat + "/tool/mapXY.do", "",
      "dialogWidth=800px;dialogHeight=468px;");
      debugger;
  if (result == null || "" == result) {
    return;
  } else {
    var result = result.split("-");
    document.getElementById("ZUOBIAO_X").value = result[0];
    document.getElementById("ZUOBIAO_Y").value = result[1];
  }
}
function openMap2() {
  var result = window.showModalDialog(locat + "/tool/mapXY.do", "",
      "dialogWidth=800px;dialogHeight=468px;");
  if (result == null || "" == result) {
    return;
  } else {
    var result = result.split("-");
    document.getElementById("ZUOBIAO_X2").value = result[0];
    document.getElementById("ZUOBIAO_Y2").value = result[1];
  }
}
// 去后计算
function getDistance() {
  if ($("#ZUOBIAO_Y").val() == "") {
    $("#ZUOBIAO_Y").tips({
          side : 3,
          msg : '不能为空',
          bg : '#AE81FF',
          time : 2
        });
    $("#ZUOBIAO_Y").focus();
    return false;
  }
  if ($("#ZUOBIAO_X").val() == "") {
    $("#ZUOBIAO_X").tips({
          side : 3,
          msg : '不能为空',
          bg : '#AE81FF',
          time : 2
        });
    $("#ZUOBIAO_X").focus();
    return false;
  }
  if ($("#ZUOBIAO_Y2").val() == "") {
    $("#ZUOBIAO_Y2").tips({
          side : 3,
          msg : '不能为空',
          bg : '#AE81FF',
          time : 2
        });
    $("#ZUOBIAO_Y2").focus();
    return false;
  }
  if ($("#ZUOBIAO_X2").val() == "") {
    $("#ZUOBIAO_X2").tips({
          side : 3,
          msg : '不能为空',
          bg : '#AE81FF',
          time : 2
        });
    $("#ZUOBIAO_X2").focus();
    return false;
  }
  $.ajax({
        type : "POST",
        url : locat + '/tool/getDistance.do',
        data : {
          ZUOBIAO_X : $("#ZUOBIAO_X").val(),
          ZUOBIAO_Y : $("#ZUOBIAO_Y").val(),
          ZUOBIAO_X2 : $("#ZUOBIAO_X2").val(),
          ZUOBIAO_Y2 : $("#ZUOBIAO_Y2").val(),
          tm : new Date().getTime()
        },
        dataType : 'json',
        cache : false,
        success : function(data) {
          if ("success" == data.result) {
            if ('null' == data.distance || null == data.distance) {
              $("#distance").text("计算失败,参数有误");
            } else {
              $("#distance").tips({
                    side : 1,
                    msg : '计算结果',
                    bg : '#75C117',
                    time : 3
                  });
              $("#distance").val(data.distance);
            }
          } else {
            $("#distance").tips({
                  side : 3,
                  msg : '计算失败,参数有误',
                  bg : '#FF5080',
                  time : 10
                });
            return;
          }
        }
      });
}

(function() {
  window.spawn = window.spawn || function(gen) {
    function continuer(verb, arg) {
      var result;
      try {
        result = generator[verb](arg);
      } catch (err) {
        return Promise.reject(err);
      }
      if (result.done) {
        return result.value;
      } else {
        return Promise.resolve(result.value).then(onFulfilled, onRejected);
      }
    }
    var generator = gen();
    var onFulfilled = continuer.bind(continuer, 'next');
    var onRejected = continuer.bind(continuer, 'throw');
    return onFulfilled();
  };
  window.showModalDialog = window.showModalDialog || function(url, arg, opt) {
    url = url || ''; // URL of a dialog
    arg = arg || null; // arguments to a dialog
    opt = opt
        || 'box-shadow: inset 10px 3px 6px #ccc;dialogWidth:800px;dialogHeight:468px'; // options:
    // dialogTop;dialogLeft;dialogWidth;dialogHeight
    // or
    // CSS
    // styles
    var caller = showModalDialog.caller.toString();
    var dialog = document.body.appendChild(document.createElement('dialog'));
    dialog.setAttribute('style', opt.replace(/dialog/gi, ''));
    dialog.innerHTML = '<a href="#" id="dialog-close" style="position: absolute; top: 2px; right: 2px; font-size: 25px;font-weight:700; background:#c0c;color: red; text-decoration: none; outline: none;" title="关闭">&times;</a><iframe id="dialog-body" src="'
        + url
        + '" style="border: 0; width: 800px; height: 468px; border-radius: 5px;box-shadow: inset 10px 3px 6px #ccc;"></iframe>';
    document.getElementById('dialog-body').contentWindow.dialogArguments = arg;
    document.getElementById('dialog-close').addEventListener('click',
        function(e) {
          e.preventDefault();
          dialog.close();
        });
    dialog.showModal();
    // if using yield
    if (caller.indexOf('yield') >= 0) {
      return new Promise(function(resolve, reject) {
        dialog.addEventListener('close', function() {
          var returnValue = document.getElementById('dialog-body').contentWindow.returnValue;
          return false;
          document.body.removeChild(dialog);
          resolve(returnValue);
        });
      });
    }
    // if using eval
    var isNext = false;
    var nextStmts = caller.split('\n').filter(function(stmt) {
          // 从showModalDialog这一行开始截取
          if (isNext || stmt.indexOf('showModalDialog(') >= 0)
            return isNext = true;
          return false;
        });
    dialog.addEventListener('close', function() {
      var returnValue = document.getElementById('dialog-body').contentWindow.returnValue;
      document.body.removeChild(dialog);
      // 把showModalDialog那行替换成一个返回值
      nextStmts[0] = nextStmts[0].replace(/(window\.)?showModalDialog\(.*\)/g,
          JSON.stringify(returnValue));
      // 继续执行截断后的代码
      eval('{\n' + nextStmts.join('\n'));
    });
    throw 'Execution stopped until showModalDialog is closed';
  };
})();