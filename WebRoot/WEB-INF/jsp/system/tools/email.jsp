﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html lang="en">
<head>
<base href="<%=basePath%>">
<!-- jsp文件头和头部 -->
<%@ include file="../admin/top.jsp"%>


<style type="text/css">
#dialog-add, #dialog-message, #dialog-comment {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0px;
	z-index: 99999999;
	display: none;
}

.commitopacity {
	position: absolute;
	width: 100%;
	height: 700px;
	background: #7f7f7f;
	filter: alpha(opacity = 50);
	-moz-opacity: 0.5;
	-khtml-opacity: 0.5;
	opacity: 0.5;
	top: 0px;
	z-index: 99999;
}

.commitbox {
	width: 100%;
	margin: 0px auto;
	position: absolute;
	top: 120px;
	z-index: 99999;
}

.commitbox_inner {
	width: 96%;
	height: 255px;
	margin: 6px auto;
	background: #efefef;
	border-radius: 5px;
}

.commitbox_top {
	width: 100%;
	height: 250px;
	margin-bottom: 10px;
	padding-top: 10px;
	background: #FFF;
	border-radius: 5px;
	box-shadow: 1px 1px 3px #e8e8e8;
}

.commitbox_top textarea {
	width: 95%;
	height: 195px;
	display: block;
	margin: 0px auto;
	border: 0px;
}

.commitbox_cen {
	width: 95%;
	height: 40px;
	padding-top: 10px;
}

.commitbox_cen div.left {
	float: left;
	background-size: 15px;
	background-position: 0px 3px;
	padding-left: 18px;
	color: #f77500;
	font-size: 16px;
	line-height: 27px;
}

.commitbox_cen div.left img {
	width: 30px;
}

.commitbox_cen div.right {
	float: right;
	margin-top: 7px;
}

.commitbox_cen div.right span {
	cursor: pointer;
}

.commitbox_cen div.right span.save {
	border: solid 1px #c7c7c7;
	background: #6FB3E0;
	border-radius: 3px;
	color: #FFF;
	padding: 5px 10px;
}

.commitbox_cen div.right span.quxiao {
	border: solid 1px #f77400;
	background: #f77400;
	border-radius: 3px;
	color: #FFF;
	padding: 4px 9px;
}
</style>

</head>
<body>
	<!-- 编辑邮箱  -->
	<div id="dialog-add">
		<div class="commitopacity"></div>
		<div class="commitbox">
			<div class="commitbox_inner">
				<div class="commitbox_top">
					<textarea name="EMAILs" id="EMAILs"
						placeholder="请选输入对方邮箱,多个请用(;)分号隔开" title="请选输入对方邮箱,多个请用(;)分号隔开"></textarea>
					<div class="commitbox_cen">
						<div class="left" id="cityname"></div>
						<div class="right">
							<span class="save" onClick="saveEmail()">保存</span>&nbsp;&nbsp;<span
								class="quxiao" onClick="cancel_pl()">取消</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid" id="main-container">
		<div id="page-content" class="clearfix">
			<div class="row-fluid">
				<div class="span12">
					<div class="widget-box">
						<div
							class="widget-header widget-header-blue widget-header-flat wi1dget-header-large">
							<h4 class="lighter">发送邮件</h4>
						</div>
						<div class="widget-body">
							<div class="widget-main">
								<div class="step-content row-fluid position-relative">
									<div id="zhongxin">
										<textarea name="CONTENT" id="CONTENT" style="display: none"></textarea>
										<input type="hidden" name="TYPE" id="TYPE" value="1" /> <input
											type="hidden" name="isAll" id="isAll" value="no" />
										<table style="width: 100%;" id="xtable">
											<tr>
												<td style="margin-top: 0px;">
													<div style="float: left; width: 86%">
														<textarea name="EMAIL" id="EMAIL" rows="1" cols="50"
															style="width: 100%; height: 20px;"
															placeholder="请选输入对方邮箱,多个请用(;)分号隔开"
															title="请选输入对方邮箱,多个请用(;)分号隔开"></textarea>
													</div>
													<div style="float: right; width: 10%">
														<a class='btn btn-mini btn-info' title="编辑邮箱"
															onclick="dialog_open();"><i class='icon-edit'></i></a>
													</div>
												</td>
											</tr>
											<tr>
												<td><input type="text" name="TITLE" id="TITLE" value=""
													placeholder="请选输入邮件标题" style="width: 95%" /></td>
											</tr>
											<tr>
												<td id="nr"><script id="editor" type="text/plain"
														style="width: 96%; height: 259px;"></script></td>
											</tr>
											<tr>
												<td style="text-align: center;"><a
													class="btn btn-mini btn-primary" onclick="sendEm();">发送</a>
													<label style="float: left; padding-left: 32px;"><input
														name="form-field-radio" id="form-field-radio1"
														onclick="setType('1');" checked="checked" type="radio"
														value="icon-edit"><span class="lbl">纯文本</span></label> <label
													style="float: left; padding-left: 5px;"><input
														name="form-field-radio" id="form-field-radio2"
														onclick="setType('2');" type="radio" value="icon-edit"><span
														class="lbl">带标签</span></label> <label
													style="float: left; padding-left: 15px;"><input
														name="form-field-checkbox" class="ace-checkbox-2"
														type="checkbox" id="allusers" onclick="isAll();" /><span
														class="lbl">全体用户</span></label></td>
											</tr>
										</table>
									</div>

									<div id="zhongxin2" class="center" style="display: none">
										<br />
										<img src="static/images/jzx.gif" id='msg' /><br />
										<h4 class="lighter block green" id='msg'>正在发送...</h4>
									</div>

								</div>
							</div>
							<!--/widget-main-->
						</div>
						<!--/widget-body-->
					</div>
				</div>



				<!-- PAGE CONTENT ENDS HERE -->
			</div>
			<!--/row-->

		</div>
		<!--/#page-content-->
	</div>
	<!--/.fluid-container#main-container-->

	<!-- 返回顶部  -->
	<a href="#" id="btn-scroll-up" class="btn btn-small btn-inverse"> 
		<i class="icon-double-angle-up icon-only"></i>
	</a>

	<!-- 引入 -->
	<script type="text/javascript">window.jQuery || document.write("<script src='static/js/jquery-1.9.1.min.js'>\x3C/script>");</script>
	<script src="static/js/bootstrap.min.js"></script>
	<script src="static/js/ace-elements.min.js"></script>
	<script src="static/js/ace.min.js"></script>
	<!-- 引入 -->

	<!-- 编辑框-->
	<script type="text/javascript" charset="utf-8">window.UEDITOR_HOME_URL = "<%=path%>/plugins/ueditor/";
	</script>
	<script type="text/javascript" charset="utf-8"
		src="plugins/ueditor/ueditor.config.js"></script>
	<script type="text/javascript" charset="utf-8"
		src="plugins/ueditor/ueditor.all.js"></script>
	<!-- 编辑框-->

	<!--提示框-->
	<script type="text/javascript" src="static/js/jquery.tips.js"></script>
	<!--引入属于此页面的js -->
	<script type="text/javascript" src="static/js/myjs/toolEmail.js"></script>
</body>
</html>

