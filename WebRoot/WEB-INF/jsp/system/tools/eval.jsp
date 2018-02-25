<%@ page contentType="text/html; charset=UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>">
<!-- jsp文件头和共通css和js文件 -->
<%@ include file="../admin/top.jsp"%>
<style type="text/css">
textarea {
	width: 99%;
	height: 160px;
	margin: 4px;
}

label {
	cursor: pointer;
}
</style>
<script type="text/javascript">
	$(top.hangge());
</script>
</head>

<body>
	<textarea id="tm-source">
	&lt;label&gt;&lt;input type="radio" name="types" value="1"&gt;双引号转单引号1&lt;/label&gt;
	&lt;label&gt;&lt;input type="radio" name="types" value="2"&gt;双引号转单引号2&lt;/label&gt;
	&lt;label&gt;&lt;input type="radio" name="types" value="3"&gt;双引号转单引号3&lt;/label&gt;
	&lt;label&gt;&lt;input type="radio" name="types" value="4"&gt;双引号转单引号4&lt;/label&gt;
	test
    </textarea>
	<label style="float: left; padding-left: 5px;"> <input
		type="radio" name="types" value="1" checked="checked"> <span
		class="lbl">转换成双引号</span>
	</label>
	<label style="float: left; padding-left: 5px;"> <input
		type="radio" name="types" value="2"> <span class="lbl">转换成单引号</span>
	</label>
	<label style="float: left; padding-left: 5px;"> <input
		type="button" onclick="tm_transfter()" value="开始转换">
	</label>

	<textarea id="tm-target"></textarea>
	<textarea id="tm-result"></textarea>
	<script type="text/javascript">
		function tm_transfter() {
			var source = $.trim($("#tm-source").val().replace(/(\n)*$/, ""));
			var checkVal = $("input[type='radio']:checked").val();
			var result = "$('#xxxx').append(";
			if (checkVal == 2) {
				$("#tm-target").val(source.replace(/"/g, "'"));
				var arr = $("#tm-target").val().match(/^(.*\n*)$/igm);
				for (var i = 0; i < arr.length; i++) {
					result += '"' + arr[i] + '"+\n';
				}
				$("#tm-result").val(
						result.substring(0, result.length - 2) + ");");
			}
			if (checkVal == 1) {
				$("#tm-target").val(source.replace(/'/g, '\"'));
				$("#tm-target").val(source.replace(/"/g, "\\\""));
				var arr = $("#tm-target").val().match(/^(.*\n*)$/igm);
				for (var i = 0; i < arr.length; i++) {
					result += '"' + arr[i].replace(/\s*/, '') + '"' + "+"
							+ '\n';
				}
				$("#tm-result").val(result.substring(0, result.length - 2) + ");");
			}
		}
	</script>
</body>
</html>