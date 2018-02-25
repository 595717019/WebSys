<%@ page contentType="text/html; charset=UTF-8"%>
<%-- <%@ taglib prefix="c" uri="/WEB-INF/lib/tld/c.tld" %> --%>
<%-- <%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%> --%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<%
    response.setHeader("Pragma", "no-cache");
    response.setHeader("Cache-Control", "no-cache,no-store,must-revalidate,post-check=0,ptr-check=0");
    response.setHeader("Expires", "-1");
%>

<html>
<head>
<base href="<%=basePath%>">
<!-- jsp文件头和头部 -->
<%@ include file="../admin/top.jsp"%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport"
	content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control"
	CONTENT="no-cache,no-store,must-revalidate,post-check=0,ptr-check=0">
<META HTTP-EQUIV="Expires" CONTENT="-1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- IE10以下版本 -->
<!--[if lt IE 10]>
  <script type="text/javascript" src="plugins/html5/respond.min.js"></script>
  <script type="text/javascript" src="plugins/html5/html5shiv.js"></script>
  <script type="text/javascript" src="plugins/html5/json2.js"></script>
<![endif]-->

<script type="text/javascript" src="static/js/jquery-1.11.3.min.js"></script>
<link href="plugins/webuploader/webuploader.css" rel="stylesheet"
	type="text/css" />
<script type="text/javascript" src="plugins/webuploader/webuploader.js"></script>
<script type="text/javascript" src="plugins/webuploader/uploadFile.js"></script>
<!--提示框-->
<script type="text/javascript" src="static/js/jquery.tips.js"></script>
<!--引入属于此页面的js -->
<script type="text/javascript" src="static/js/myjs/fileUpload.js"></script>
<title>大文件上传下载，断点续传</title>
</head>
<body>
	<!-- 文件上传容器 begin -->
	<div id="uploader">
		<div class="queueList"></div>
		<a id="uploadBtn">上传文件</a>
		<div id="fileInfo"></div>
	</div>
	<!-- 文件上传容器 end -->
	<div id="fileInfoList" style="width: 100%; height: 400px;">
		<div
			style="width: 80%; height: 100%; margin: 0 auto; border: 1px solid blue;">
			<ul id="fileLidt">
				<!-- <li><a href="uploads/6123799b38f41365d98c4cc4460cf2f1.jpg">u=2298039214,2778615934&fm=21&gp=0.jpg</a></li>
				<li><a href="uploads/93717109861282d6ff9750a0fd9a85d2.jpg">IMG20170610082051.jpg</a></li> -->
			</ul>
		</div>
	</div>
</body>
</html>