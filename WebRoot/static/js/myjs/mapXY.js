var dg;
var lat; // 纬度
var lag; // 经度

$(document).ready(function() {
  dg = frameElement.lhgDG;
  $('#searchResultPanel').hide();
  var url = 'https://api.map.baidu.com/location/ip';
  var ip = '221.214.179.51';
  var ak = '40GWXiduhOft266lK4N1dopL';
  var coor = 'bd09ll';
  debugger;
  $.ajax({
        type : 'POST',
        url : url,
        contentType : 'application/json;charset=utf-8',
        dataType : 'JSONP',
        data : {
          ip : ip,
          ak : ak,
          coor : coor
        },
        success : function(data) {
          console.log(data);
          if (data.status == '0') {
            lag = data.content.point.x; // 经度
            lat = data.content.point.y; // 纬度
            console.log('ip纬度:' + lat + ',ip经度:' + lag);
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(lag, lat); // 创建点坐标
            map.centerAndZoom(point, 15); // 初始化地图,设置城市和地图级别。
            // 建立一个自动完成的对象
            var ac = new BMap.Autocomplete({
                  "input" : "sole-input",
                  "location" : map
                });
            iptTrigger = document.getElementById(suggestId);
            // 删除多余的元素，但百度地图自动生成的js报错 报错并不影响提示功能 暂设置为隐藏多余元素
            function hideRestAcBox() {
              var elm = Array.prototype.slice.call(document
                  .getElementsByClassName('tangram-suggestion-main'));
              if (elm.length) {
                elm.forEach(function(v, i) {
                      // v.parentNode.removeChild(v);
                      v.style.zIndex = -1;
                      v.style.visibility = 'hidden';
                    });
                elm[elm.length - 1].style.zIndex = 999;
                elm[elm.length - 1].style.visibility = 'visible';
              }
            }

            function hideAcBox() {
              var elm = Array.prototype.slice.call(document
                  .getElementsByClassName('tangram-suggestion-main'));
              elm.forEach(function(v, i) {
                    v.style.zIndex = -1;
                    v.style.visibility = 'hidden';
                  });
            }
            // 输入框的值控制 提示信息列表容器显示隐藏
            function boxHide() {
              console.log(this.value);
              if (this.value) {
                if (keywords) {// 发起某个关键字的提示请求，会引起onSearchComplete的回调
                  ac.search.apply(ac, keywords);
                }
                hideRestAcBox();
              } else {
                hideAcBox();
              }
            }

            iptTrigger.oninput = boxHide;// 非ie
            iptTrigger.onpropertychange = boxHide;// ie
            ac.addEventListener("onhighlight", function(e) { // 鼠标放在下拉列表上的事件
                  var str = "";
                  var _value = e.fromitem.value;
                  var value = "";
                  if (e.fromitem.index > -1) {
                    value = _value.province + _value.city + _value.district
                        + _value.street + _value.business;
                  }
                  str = "FromItem<br />index = " + e.fromitem.index
                      + "<br />value = " + value;
                  value = "";
                  if (e.toitem.index > -1) {
                    _value = e.toitem.value;
                    value = _value.province + _value.city + _value.district
                        + _value.street + _value.business;
                  }
                  str += "<br />ToItem<br />index = " + e.toitem.index
                      + "<br />value = " + value;
                });

            var myValue;
            ac.addEventListener("onconfirm", function(e) { // 鼠标点击下拉列表后的事件
                  var _value = e.item.value;
                  myValue = _value.province + _value.city + _value.district
                      + _value.street + _value.business;
                  setPlace();
                });

            map.addControl(new BMap.ScaleControl()); // 添加默认比例尺控件
            map.addControl(new BMap.ScaleControl({
                  anchor : BMAP_ANCHOR_TOP_LEFT
                })); // 左上
            map.addControl(new BMap.NavigationControl()); // 添加默认缩放平移控件
            map.addControl(new BMap.NavigationControl({
                  anchor : BMAP_ANCHOR_BOTTOM_RIGHT,
                  type : BMAP_NAVIGATION_CONTROL_ZOOM
                })); // 右下角，仅包含缩放按钮
            map.enableScrollWheelZoom(); // 启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom(); // 启用地图惯性拖拽，默认禁用
            map.addEventListener("click", showInfo);// 选中的经纬度在画面上面显示
          } else {
          }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
          console.log(XMLHttpRequest.status);
          console.log(XMLHttpRequest.readyState);
          console.log(textStatus);
        },
        beforeSend : function() {
        },
        complete : function(XMLHttpRequest, textStatus) {
          console.log('调用本次AJAX请求时传递的options参数');
        }
      });
    // getLocation();// h5获取位置
});

function success() {
  if (dg.curWin.document.forms[0]) {
    dg.curWin.document.forms[0].action = dg.curWin.location + "";
    dg.curWin.document.forms[0].submit();
  } else {
    dg.curWin.location.reload();
  }
  dg.cancel();
}

// 确定
function choose() {
  debugger;
  var ZUOBIAO_X = document.getElementById("ZUOBIAO_X").value;
  var ZUOBIAO_Y = document.getElementById("ZUOBIAO_Y").value;
  var ary = "";
  if (ZUOBIAO_X == "" || ZUOBIAO_Y == "") {
    alert("请先输入经纬度");
  } else {
    ary = ZUOBIAO_X + "-" + ZUOBIAO_Y;
    window.returnValue = ary;
    // window.close();
    document.body($('dialog')).close();
  }
}

// 百度地图API功能

// h5获取用户地理位置,如果有vpn获取的是vpn的 位置
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("浏览器不支持地理定位。");
  }
}

// 获取纬度和经度
function showPosition(position) {
  lag = position.coords.longitude; // 经度
  lat = position.coords.latitude; // 纬度
  console.log('纬度:' + lat + ',经度:' + lag);
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(lag, lat); // 创建点坐标
  map.centerAndZoom(point, 12); // 初始化地图,设置城市和地图级别。
  // 建立一个自动完成的对象
  var ac = new BMap.Autocomplete({
        "input" : "suggestId",
        "location" : map
      });
  ac.addEventListener("onhighlight", function(e) { // 鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
          value = _value.province + _value.city + _value.district
              + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = "
            + value;
        value = "";
        if (e.toitem.index > -1) {
          _value = e.toitem.value;
          value = _value.province + _value.city + _value.district
              + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = "
            + value;
      });

  var myValue;
  ac.addEventListener("onconfirm", function(e) { // 鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district
            + _value.street + _value.business;
        setPlace();
      });

  map.addControl(new BMap.ScaleControl()); // 添加默认比例尺控件
  map.addControl(new BMap.ScaleControl({
        anchor : BMAP_ANCHOR_TOP_LEFT
      })); // 左上
  map.addControl(new BMap.ScaleControl({
        anchor : BMAP_ANCHOR_TOP_RIGHT
      })); // 右上
  map.addControl(new BMap.ScaleControl({
        anchor : BMAP_ANCHOR_BOTTOM_LEFT
      })); // 左下
  map.addControl(new BMap.ScaleControl({
        anchor : BMAP_ANCHOR_BOTTOM_RIGHT
      })); // 右下
  map.addControl(new BMap.NavigationControl()); // 添加默认缩放平移控件
  map.addControl(new BMap.NavigationControl({
        anchor : BMAP_ANCHOR_TOP_RIGHT,
        type : BMAP_NAVIGATION_CONTROL_SMALL
      })); // 右上角，仅包含平移和缩放按钮
  map.addControl(new BMap.NavigationControl({
        anchor : BMAP_ANCHOR_BOTTOM_LEFT,
        type : BMAP_NAVIGATION_CONTROL_PAN
      })); // 左下角，仅包含平移按钮
  map.addControl(new BMap.NavigationControl({
        anchor : BMAP_ANCHOR_BOTTOM_RIGHT,
        type : BMAP_NAVIGATION_CONTROL_ZOOM
      })); // 右下角，仅包含缩放按钮
  map.enableScrollWheelZoom(); // 启用滚轮放大缩小，默认禁用
  map.enableContinuousZoom(); // 启用地图惯性拖拽，默认禁用
  map.addEventListener("click", showInfo);// 选中的经纬度在画面上面显示
}

// 定位失败
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED :
      alert("定位失败,用户拒绝请求地理定位");
      break;
    case error.POSITION_UNAVAILABLE :
      alert("定位失败,位置信息是不可用");
      break;
    case error.TIMEOUT :
      alert("定位失败,请求获取用户位置超时");
      break;
    case error.UNKNOWN_ERROR :
      alert("定位失败,定位系统失效");
      break;
  }
}

function setPlace() {
  map.clearOverlays(); // 清除地图上所有覆盖物
  function myFun() {
    var pp = local.getResults().getPoi(0).point; // 获取第一个智能搜索的结果
    map.centerAndZoom(pp, 18);
    map.addOverlay(new BMap.Marker(pp)); // 添加标注
  }
  var local = new BMap.LocalSearch(map, { // 智能搜索
    onSearchComplete : myFun
  });
  local.search(myValue);
}

// 选中的坐标在主画面显示
function showInfo(e) {
  document.getElementById("ZUOBIAO_X").value = e.point.lat;
  document.getElementById("ZUOBIAO_Y").value = e.point.lng;
}