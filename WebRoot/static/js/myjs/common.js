(function($) {
  websys = {
    timestamp : Date.parse(new Date()),
    /* 添加link标签 */
    addLink : function(url) {
      var doc = document;
      var link = doc.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", url + '?v=' + this.timestamp);

      var heads = doc.getElementsByTagName("head");
      if (heads.length) {
        heads[0].appendChild(link);
      } else {
        doc.documentElement.appendChild(link);
      }
    },
    /* 添加Script标签 */
    addScript : function(url) {
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", url + '?v=' + this.timestamp);
      var heads = document.getElementsByTagName("head");
      if (heads.length) {
        heads[0].appendChild(script);
      } else {
        document.documentElement.appendChild(script);
      }
    }
    

  }
})(jQuery);


// 利用百度地图和接口获取用户地址
// function showPosition(position) {
// var latlon = position.coords.latitude + ',' + position.coords.longitude;
// debugger;
// // 百度地图API定位
// var
// url="http://api.map.baidu.com/geocoder/v2/?address=北京市海淀区上地十街10号&output=json&ak=40GWXiduhOft266lK4N1dopL&callback=showLocation";
// $.ajax({
// type : "GET",
// dataType : "jsonp",
// url : url,
// beforeSend : function() {
// console.log('正在定位...')
// },
// success : function(json) {
// if (json.status == 0) {
// console.log(json.result.formatted_address)
// }
// },
// error : function(XMLHttpRequest, textStatus, errorThrown) {
// console.log(latlon + "地址位置获取失败")
// }
// });
// }
