CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups =  [
	    { name: 'document',	 groups: [ "Source",'mode'] },
	    { name: 'basicstyles', groups: [ 'basicstyles'] },
	    { name: 'insert' },
		{ name: 'paragraph',   groups: [ 'indent', 'align' ] },
		{ name: 'links' },
		{ name: 'styles'},
		{ name: 'colors' },
		{ name: 'others' },
		{ name: 'tools' },
		{ name: 'UploadPic'},
		{ name: 'UploadMovie'},
		{ name: 'clipboard',   groups: [ 'clipboard' ] },
		{ name: 'UploadFile'}
	];
	config.font_names='宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;'+ config.font_names;
	//Source
	config.removeButtons = 'Indent,Outdent,Unlink,Styles,Format,Label,Image,Find,Anchor,Underline,Strike,Subscript,Superscript,Bidiltr,About,Form,Specialchar';//Source,
	config.removeDialogTabs = 'link:advanced';
	config.uiColor = "#e5e5e5";
	config.allowedContent=true;
	config.baseFloatZIndex = 10; 
	//键入“Enter”是<p>标签，而“Shift + Enter”是<br />标签，如果想要修改这个设定可以在
	////编辑器中回车产生的标签 
	//config.enterMode = CKEDITOR.ENTER_P; //可选：CKEDITOR.ENTER_BR或CKEDITOR.ENTER_DIV 
	config.enterMode = CKEDITOR.ENTER_BR;
	config.shiftEnterMode = CKEDITOR.ENTER_P;
	//工具栏是否可以被收缩 
	//config.toolbarCanCollapse = true; 
	//工具栏的位置 
	//config.toolbarLocation = 'top';//可选：bottom 
	//工具栏默认是否展开 
	//config.toolbarStartupExpanded = true; 
	// 取消 “拖拽以改变尺寸”功能 plugins/resize/plugin.js 
	config.resize_enabled = false; 
	//所需要添加的CSS文件 在此添加 可使用相对路径和网站的绝对路径 
	//config.contentsCss = './contents.css'; 
	//是否开启 图片和表格 的改变大小的功能 config.disableObjectResizing = true; 
	config.disableObjectResizing = false; //默认为开启 
};

//CKEDITOR.on( 'instanceReady', function( ev ) { with (ev.editor.dataProcessor.writer) {
//setRules("p", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("h1", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("h2", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("h3", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("h4", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("h5", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("div", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("table", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("tr", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("td", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("iframe", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("li", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("ul", {indent : false, breakAfterOpen : false, breakBeforeClose : false} );
//setRules("ol", {indent : false, breakAfterOpen : false, breakBeforeClose : false} ); }
//});
