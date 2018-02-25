<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
    String path = request.getContextPath();
			String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
					+ path + "/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>选点获取经纬度</title>
<base href="<%=basePath%>">
<!-- jsp文件头和头部 -->
<%@ include file="../admin/top.jsp"%>
<script type="text/javascript"
	src="http://api.map.baidu.com/api?v=2.0&ak=40GWXiduhOft266lK4N1dopL"></script>
<style type="text/css">
body, html, #allmap {
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin: 0;
}

#l-map {
	height: 100%;
	width: 78%;
	float: left;
	border-right: 2px solid #bcbcbc;
}

#r-result {
	height: 100%;
	width: 20%;
	float: left;
}
#searchbox {
    border-radius: 2px;
    width: 425px;
    position: relative;
    z-index: 5;
}

.clearfix {
    zoom: 1;
}
#sole-searchbox-content #sole-input {
	box-sizing: border-box;
	border: 0;
	padding: 9px 0;
	border-left: 10px solid transparent;
	border-right: 27px solid transparent;
	line-height: 20px;
	font-size: 16px;
	height: 38px;
	color: #333;
	position: relative;
	border-radius: 2px 0 0 2px;
}

.searchbox-content .searchbox-content-common {
	box-sizing: border-box;
	float: left;
	width: 329px;
	height: 38px;
}
.searchbox-content .searchbox-content-button.route-button {
    background: url(//webmap1.bdimg.com/wolfman/static/common/images/new/searchbox_f175577.png) no-repeat 0 0;
}

.searchbox-content .searchbox-content-button {
    box-sizing: border-box;
    float: left;
    height: 38px;
    width: 39px;
    cursor: pointer;
    position: relative;
}
#searchbox #search-button:hover {
    background-color: #2e77e5;
}
#searchbox #search-button {
    pointer-events: auto;
    background: url(//webmap1.bdimg.com/wolfman/static/common/images/new/searchbox_f175577.png) no-repeat 0 -76px #3385ff;
    width: 57px;
    height: 38px;
    float: left;
    border: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 0 2px 2px 0;
    box-shadow: 1px 2px 1px rgba(0,0,0,.15);
}

input, button, select, textarea {
    outline: 0;
    font-family: inherit;
}
input[type="button" i]:active, input[type="submit" i]:active, input[type="reset" i]:active, input[type="file" i]:active::-webkit-file-upload-button, button:active {
    border-style: inset;
}
input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
    padding: 1px 6px;
}
input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
    align-items: flex-start;
    text-align: center;
    cursor: default;
    color: buttontext;
    background-color: buttonface;
    box-sizing: border-box;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 13.3333px Arial;
}
input, textarea, select, button, meter, progress {
    -webkit-writing-mode: horizontal-tb;
}
button {
    -webkit-appearance: button;
}
</style>

<script type="text/javascript">
	websys.addScript("static/js/myjs/mapXY.js");
	websys.addScript("static/js/myjs/libs.js");
</script>
</head>
<body>
	<div>
		<table bgcolor="#E3E4D8" width="100%">
			<tr>
				<td>纬度：</td>
				<td><input id="ZUOBIAO_X" value="" type="text" /></td>
				<td>经度：</td>
				<td><input id="ZUOBIAO_Y" value="" type="text" /></td>
				<td><input type="button" value="确定" onclick="choose();" /></td>
				<td width="100"><input type="text" id="suggestId" size="20"
					value="这里输入搜索地址" style="width: 150px;" />
					<div id="searchResultPanel"
						style="border: 1px solid #C0C0C0; width: 150px; height: auto;">
					</div></td>
			</tr>
		</table>
		<div id="searchbox" class="clearfix">
			<div id="searchbox-container">
				<div id="sole-searchbox-content" class="searchbox-content">
					<input id="sole-input" class="searchbox-content-common" type="text"
						name="word" autocomplete="off" maxlength="256"
						placeholder="搜地点、查公交、找路线" value="">
					<div class="input-clear" title="清空" style="display: none;"></div>
					<div
						class="searchbox-content-button right-button loading-button route-button"
						data-title="路线" data-tooltip="1"></div>
				</div>
			</div>
			<button id="search-button" data-title="搜索" data-tooltip="2"></button>
		</div>
	</div>
	<div id="allmap"></div>
</body>
</html>