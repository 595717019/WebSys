/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
//	CKEDITOR.config.autoGrow_maxHeight
//	示例：
//	CKEDITOR.config.autoGrow_maxHeight = 400;
//	默认值：0
//	CKEDITOR.config.autoGrow_minHeight
//	示例：
//	CKEDITOR.config.autoGrow_minHeight = 300;
//	默认值：200
//	CKEDITOR.config.autoUpdateElement
//	当提交包含有此编辑器的表单时，是否自动更新元素内的数据。
//	示例：
//	CKEDITOR.config.autoUpdateElement = true;
//	默认值：true
//	CKEDITOR.config.baseFloatZIndex
//	编辑器的z-index值。
//	示例：
//	CKEDITOR.config.baseFloatZIndex = 2000;
//	默认值：10000
//	CKEDITOR.config.baseHref
//	设置是使用绝对目录还是相对目录，空为相对目录。
//	示例：
//	CKEDITOR.config.baseHref = 'http://www.example.com/path/';
//	默认值：(空)
//	CKEDITOR.config.blockedKeystrokes
//	设置快捷键，可能与浏览器快捷键冲突。plugins/keystrokes/plugin.js
//	示例：
//	CKEDITOR.config.blockedKeystrokes = [
//	CKEDITOR.CTRL + 66 /*B*/,
//	CKEDITOR.CTRL + 73 /*I*/,
//	CKEDITOR.CTRL + 85 /*U*/
//	]
//	默认值：如示例
//	CKEDITOR.config.bodyClass
//	设置编辑器body的class。
//	示例：
//	CKEDITOR.config.bodyClass = 'contents';
//	默认值：(空)
//	CKEDITOR.config.bodyId
//	设置编辑器body的ID。
//	示例：
//	CKEDITOR.config.bodyId = 'contents_id';
//	默认值：(空)
//	CKEDITOR.config.BrowserContextMenuOnCtrl
//	示例：
//	CKEDITOR.config.BrowserContextMenuOnCtrl = false;
//	默认值：true
//	CKEDITOR.config.colorButton_backStyle
//	设置编辑内元素的背景色的取值。plugins/colorbutton/plugin.js
//	示例：
//	CKEDITOR.config.colorButton_backStyle = {
//	element : 'span',
//	styles : { 'background-color' : '#(color)' }
//	};
//	默认值：如示例
//	CKEDITOR.config.colorButton_colors
//	设置前景色的取值。plugins/colorbutton/plugin.js
//	示例：
//	CKEDITOR.config.colorButton_colors = '00923E,F8C100,28166F';
//	CKEDITOR.config.colorButton_colors = 'FontColor1/FF9900,FontColor2/0066CC,FontColor3/F00';
//	默认值：
//	'000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,B22222,A52A2A,DAA520,006400,40E0D0,
//	0000CD,800080,808080,F00,FF8C00,FFD700,008000,0FF,00F,EE82EE,A9A9A9,FFA07A,FFA500,FFFF00,
//	00FF00,AFEEEE,ADD8E6,DDA0DD,D3D3D3,FFF0F5,FAEBD7,FFFFE0,F0FFF0,F0FFFF,F0F8FF,E6E6FA,FFF'
//	CKEDITOR.config.colorButton_enableMore
//	是否在选择颜色时显示“其它颜色”选项。plugins/colorbutton/plugin.js
//	示例：
//	CKEDITOR.config.colorButton_enableMore = false;
//	默认值：false
//	CKEDITOR.config.colorButton_foreStyle
//	区块的前景色默认值设置。plugins/colorbutton/plugin.js
//	示例：
//	CKEDITOR.config.colorButton_foreStyle = {
//	element : 'span',
//	styles : { 'color' : '#(color)' }
//	};
//	默认值：如示例
//	CKEDITOR.config.contentsCss
//	所需要添加的CSS文件，在此添加，可使用相对路径和网站的绝对路径。
//	示例：
//	CKEDITOR.config.contentsCss = '../contents.css';
//	CKEDITOR.config.contentsCss = ['/css/mysitestyles.css', '/css/anotherfile.css'];
//	默认值：'/contents.css'
//	 CKEDITOR.config.contentsLangDirection
//	文字方向。可设置：
//	ui(根据系统设置)
//	ltr(从左到右)
//	rtl(从右到左)
//	示例：
//	CKEDITOR.config.contentsLangDirection = 'rtl';
//	默认值：'ui'
//	CKEDITOR.config.contentsLanguage
//	示例：
//	CKEDITOR.config.contentsLanguage = 'fr';
//	默认值：根据系统设置
//	CKEDITOR.config.corePlugins
//	CKEDITOR.config.coreStyles_bold
//	示例：
//	config.coreStyles_bold = { element : 'b', overrides : 'strong' };
//	config.coreStyles_bold = { element : 'span', attributes : {'class': 'Bold'} };
//	CKEDITOR.config.coreStyles_italic
//	示例：
//	config.coreStyles_italic = { element : 'i', overrides : 'em' };
//	CKEDITOR.config.coreStyles_italic = { element : 'span', attributes : {'class': 'Italic'} };
//	CKEDITOR.config.coreStyles_strike
//	示例：
//	CKEDITOR.config.coreStyles_strike = { element : 'span', attributes : {'class': 'StrikeThrough'}, overrides : 'strike' };
//	CKEDITOR.config.coreStyles_subscript
//	示例：
//	CKEDITOR.config.coreStyles_subscript = { element : 'span', attributes : {'class': 'Subscript'}, overrides : 'sub' };
//	CKEDITOR.config.coreStyles_superscript
//	示例：
//	CKEDITOR.config.coreStyles_superscript = { element : 'span', attributes : {'class': 'Superscript'}, overrides : 'sup' };
//	CKEDITOR.config.coreStyles_underline
//	示例：
//	CKEDITOR.config.coreStyles_underline = { element : 'span', attributes : {'class': 'Underline'}};
//	CKEDITOR.config.customConfig
//	CKeditor的配置文件，若不想配置，留空即可。
//	示例：
//	// 需要加载配置文件。
//	CKEDITOR.replace( 'myfiled', { customConfig : '/myconfig.js' } );
//	// 不需要加载任何配置文件。
//	CKEDITOR.replace( 'myfiled', { customConfig : '' } );
//	默认值：/config.js'
//	CKEDITOR.config.defaultlanguage
//	示例：
//	CKEDITOR.config.defaultlanguage = 'it';
//	默认值：'en'
//	CKEDITOR.config.dialog_backgroundCoverColor
//	界面编辑框的背景色。plugins/dialog/plugin.js
//	示例：
//	CKEDITOR.config.dialog_backgroundCoverColor = 'rgb(255, 254, 253)';
//	默认值：'white'
//	CKEDITOR.config.dialog_backgroundCoverOpacity
//	遮罩背景的不透明度，数值应该在：0.0～1.0 之间。plugins/dialog/plugin.js
//	示例：
//	CKEDITOR.config.dialog_backgroundCoverOpacity = 0.7
//	默认值：0.5
//	CKEDITOR.config.dialog_magnetDistance
//	移动或者改变元素时，边框的吸附距离，单位：像素。plugins/dialog/plugin.js
//	示例：
//	CKEDITOR.config.dialog_magnetDistance = 30;
//	默认值：20
//	CKEDITOR.config.dialog_startupFocusTab
//	示例：
//	CKEDITOR.config.dialog_startupFocusTab = true;
//	默认值：false
//	CKEDITOR.config.disableNativeSpellChecker
//	是否拒绝本地拼写检查和提示，目前仅firefox和safari支持。plugins/wysiwygarea/plugin.js
//	示例：
//	CKEDITOR.config.disableNativeSpellChecker = false;
//	默认值：ture
//	CKEDITOR.config.disableNativeTableHandles
//	进行表格编辑功能，如：添加行或列。目前仅firefox支持。plugins/wysiwygarea/plugin.js
//	示例：
//	CKEDITOR.config.disableNativeTableHandles = false;
//	默认值：true
//	CKEDITOR.config.disableObjectResizing
//	是否开启图片和表格的改变大小的功能。
//	示例：
//	CKEDITOR.config.disableObjectResizing = true;
//	默认值：false
//	CKEDITOR.config.docType
//	设置HTML文档类型。
//	示例：
//	CKEDITOR.config.docType = '';
//	默认值：''
//	CKEDITOR.config.editingBlock
//	是否对编辑区域进行渲染。plugins/editingblock/plugin.js
//	示例：
//	CKEDITOR.config.editingBlock = false;
//	默认值：ture
//	CKEDITOR.config.emailProtection
//	示例：
//	// href=”mailto:tester@ckeditor.com?subject=subject&body=body”
//	CKEDITOR.config.emailProtection = '';
//	// href=”e-mail”
//	CKEDITOR.config.emailProtection = 'encode'
//	// href=”JavaScript:mt('tester','ckeditor.com','subject','body')
//	CKEDITOR.config.emailProtection = 'mt(NAME,DOMAIN,SUBJECT,BODY)'
//	默认值：空(等于disabled)
//	CKEDITOR.config.enableTabKeyTools
//	示例：
//	config.enableTabKeyTools = false;
//	默认值：ture
//	CKEDITOR.config.enterMode
//	编辑器中回车产生的标签，可设置：
//	CKEDITOR.ENTER_P
//	CKEDITOR.ENTER_BR
//	CKEDITOR.ENTER_DIV
//	示例：
	CKEDITOR.config.enterMode = CKEDITOR.ENTER_DIV;
//	CKEDITOR.config.entities
//	是否使用HTML实体进行输出。plugins/entities/plugin.js
//	示例：
//	CKEDITOR.config.entities = false;
//	默认值：ture
//	CKEDITOR.config.entities_additiona
//	定义更多的实体。plugins/entities/plugin.js
//	默认值：'#39'(单引号)
//	CKEDITOR.config.entities_greek
//	是否转换一些难以显示的字符为相应的HTML字符。plugins/entities/plugin.js
//	示例：
//	CKEDITOR.config.entities_greek = false;
//	默认值：true
//	CKEDITOR.config.entities_latin
//	是否转换一些拉丁字符为HTML。plugins/entities/plugin.js
//	示例：
//	CKEDITOR.config.entities_latin = false;
//	默认值：true
//	CKEDITOR.config.extraPlugins
//	添加新组件。
//	示例：
//	CKEDITOR.config.extraPlugins = 'myplugin,anotherplugin';
//	CKEDITOR.config.filebrowserBrowseUrl
//	示例：
//	CKEDITOR.config.filebrowserBrowseUrl = '/browser/browser.php';
//	默认值：空(等于disabled)
//	CKEDITOR.config.filebrowserFlashBrowseUrl
//	示例：
//	config.filebrowserFlashBrowseUrl = '/browser/browse.php?type=Flash';
//	默认值：空(等于disabled)
//	CKEDITOR.config.filebrowserFlashUploadUrl
//	示例：
//	CKEDITOR.config.filebrowserFlashUploadUrl = '/uploader/upload.php?type=Flash';
//	默认值：空(等于disabled)
//	CKEDITOR.config.filebrowserImageBrowseLinkUrl
//	示例：
//	CKEDITOR.config.filebrowserImageBrowseLinkUrl = '/browser/browser.php';
//	默认值：空(等于disabled)
//	CKEDITOR.config.filebrowserImageBrowseUrl
//	示例：
//	CKEDITOR.config.filebrowserImageBrowseUrl = '/browser/browser.php?type=Image';
//	默认值：空(等于disabled)
//	CKEDITOR.config.filebrowserImageUploadUrl
//	示例：
//	CKEDITOR.config.filebrowserImageUploadUrl = '/uploader/upload.php?type=Image';
//	默认值：空(等于disabled)
//	CKEDITOR.config.filebrowserUploadUrl
//	示例：
//	CKEDITOR.config.filebrowserUploadUrl = '/uploader/upload.php';
//	默认值：空(等于disabled)
//	CKEDITOR.config.filebrowserWindowFeatures
//	示例：
//	config.filebrowserWindowFeatures = 'resizable=yes,scrollbars=no';
//	默认值：
//	'location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes'
//	CKEDITOR.config.find_highlight
//	使用搜索时的高亮色。plugins/find/plugin.js
//	示例：
//	CKEDITOR.config.find_highlight = {
//	element : 'span',
//	styles : { 'background-color' : '#ff0', 'color' : '#00f' }
//	};
//	CKEDITOR.config.font_defaultLabel
//	默认的字体名。plugins/font/plugin.js
//	示例：
//	CKEDITOR.config.font_defaultLabel = 'Arial';
//	CKEDITOR.config.font_names
//	字体编辑时的字符集，可以添加常用的中文字符：宋体、楷体、黑体等。plugins/font/plugin.js
//	示例：
//	CKEDITOR.config.font_names =
//	'Arial/Arial, Helvetica; sans-serif;'+
//	'Times New Roman/ Times New Roman, Times, serif;'+
//	'Verdana';
//	CKEDITOR.config.font_names = 'Arial;Times New Roman;Verdana';
//	CKEDITOR.config.font_style
//	文字的默认式样。plugins/font/plugin.js
//	示例：
//	CKEDITOR.config.font_style = {
//	element   : 'span',
//	styles   : { 'font-family' : '#(family)' },
//	overrides : [ { element : 'font', attributes : { 'face' : null } } ]
//	};
//	CKEDITOR.config.fontSize_defaultLabel
//	字体默认大小。plugins/font/plugin.js
//	示例：
//	CKEDITOR.config.fontSize_defaultLabel = '12px';
//	CKEDITOR.config.fontSize_sizes
//	字体编辑时可选的字体大小。plugins/font/plugin.js
//	示例：
//	CKEDITOR.config.fontSize_sizes ='16/16px;24/24px;48/48px;';
//	CKEDITOR.config.fontSize_sizes ='12px;2.3em;130%;larger;x-small'
//	CKEDITOR.config.fontSize_sizes ='12 Pixels/12px;Big/2.3em;30 Percent More/130%;Bigger/larger;Very Small/x-small';
//	默认值：
//	'8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px'
//	CKEDITOR.config.fontSize_style
//	设置字体大小时使用的式样。plugins/font/plugin.js
//	示例：
//	CKEDITOR.config.fontSize_style = {
//	element   : 'span',
//	styles   : { 'font-size' : '#(size)' },
//	overrides : [ { element : 'font', attributes : { 'size' : null } } ]
//	};
//	默认值：如示例
//	CKEDITOR.config.forcePasteAsPlainText
//	是否强制复制来的内容去除格式。plugins/pastetext/plugin.js
//	示例：
//	CKEDITOR.config.forcePasteAsPlainText =true;
//	默认值：false
//	CKEDITOR.config.format_address
//	对address标签进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_address = { element : 'address', attributes : { class : 'styledAddress' } };
//	CKEDITOR.config.format_div
//	对DIV标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_div = { element : 'div', attributes : { class : 'normalDiv' } };
//	CKEDITOR.config.format_h1
//	对H1标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_h1 = { element : 'h1', attributes : { class : 'contentTitle1' } };
//	CKEDITOR.config.format_h2
//	对H2标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_h2 = { element : 'h2', attributes : { class : 'contentTitle2' } };
//	CKEDITOR.config.format_h3
//	对H3标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_h3 = { element : 'h3', attributes : { class : 'contentTitle3' } };
//	CKEDITOR.config.format_h4
//	对H4标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_h4 = { element : 'h4', attributes : { class : 'contentTitle4' } };
//	CKEDITOR.config.format_h5
//	对H5标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_h5 = { element : 'h5', attributes : { class : 'contentTitle5' } };
//	CKEDITOR.config.format_h6
//	对H6标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_h6 = { element : 'h6', attributes : { class : 'contentTitle6' } };
//	CKEDITOR.config.format_p
//	对P标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_p = { element : 'p', attributes : { class : 'normalPara' } };
//	CKEDITOR.config.format_pre
//	对PRE标签自动进行格式化。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_pre = { element : 'pre', attributes : { class : 'code' } };
//	CKEDITOR.config.format_tags
//	用分号分隔的标签名字，在工具栏上显示。plugins/format/plugin.js
//	示例：
//	CKEDITOR.config.format_tags = 'p;h2;h3;pre';
//	默认值：p;h1;h2;h3;h4;h5;h6;pre;address;div
//	CKEDITOR.config.fullPage
//	是否使用完整的html编辑模式，如使用，其源码将包含：html等标签。
//	示例：
//	CKEDITOR.config.fullPage = true;
//	默认值：false
//	CKEDITOR.config.height
//	设置高度。
//	示例：
//	CKEDITOR.config.height = 500;
//	CKEDITOR.config.height = 25em;
//	CKEDITOR.config.height = 300px;
//	默认值：'200'
//	CKEDITOR.config.htmlEncodeOutput
//	示例：
//	CKEDITOR.config.htmlEncodeOutput = true;
//	默认值：false
//	CKEDITOR.config.ignoreEmptyParagraph
//	是否忽略段落中的空字符，若不忽略，则字符将以""表示。plugins/wysiwygarea/plugin.js
//	示例：
//	CKEDITOR.config.ignoreEmptyParagraph = false;
//	默认值：true
//	CKEDITOR.config.image_previewText
//	插入图片中预览图片框的文字。
//	示例：
//	CKEDITOR.config.image_previewText = CKEDITOR.tools.repeat('__',100)
//	默认值：
//	CKEDITOR.config.image_removeLinkByEmptyURL
//	在清除图片属性框中的链接属性时，是否同时清除两边的标签。plugins/image/plugin.js
//	示例：
//	CKEDITOR.config.image_removeLinkByEmptyURL = false;
//	默认值：true
//	CKEDITOR.config.keystrokes
//	设置快捷键。
//	示例：
//	CKEDITOR.config.keystrokes = [
//	[ CKEDITOR.ALT + 121 /*F10*/, 'toolbarFocus' ], //获取焦点
//	[ CKEDITOR.ALT + 122 /*F11*/, 'elementsPathFocus' ], //元素焦点
//	[ CKEDITOR.SHIFT + 121 /*F10*/, 'contextMenu' ], //文本菜单
//	[ CKEDITOR.CTRL + 90 /*Z*/, 'undo' ], //撤销
//	[ CKEDITOR.CTRL + 89 /*Y*/, 'redo' ], //重做
//	[ CKEDITOR.CTRL + CKEDITOR.SHIFT + 90 /*Z*/, 'redo' ], //
//	[ CKEDITOR.CTRL + 76 /*L*/, 'link' ], //链接
//	[ CKEDITOR.CTRL + 66 /*B*/, 'bold' ], //粗体
//	[ CKEDITOR.CTRL + 73 /*I*/, 'italic' ], //斜体
//	[ CKEDITOR.CTRL + 85 /*U*/, 'underline' ], //下划线
//	[ CKEDITOR.ALT + 109 /*-*/, 'toolbarCollapse' ]
//	]
//	CKEDITOR.config.language
//	界面语言。
//	示例：
//	CKEDITOR.config.language = 'zh-cn';
//	默认值：空
//	CKEDITOR.config.linkShowTargetTab 
//	是否显示插入链接对话框中的“目标”标签。
//	示例：
//	CKEDITOR.config.linkShowTargetTab = false;;
//	默认值：true
//	CKEDITOR.config.linkShowAdvancedTab
//	是否显示插入链接对话框中的“高级”标签。 。。。个
//	示例：
//	CKEDITOR.config.linkShowAdvancedTab = false; 
//	默认值：true
//	CKEDITOR.config.menu_groups
//	一组用逗号分隔的标签名称，显示在左下角的层次嵌套中。plugins/menu/plugin.js
//	示例：
//	CKEDITOR.config.menu_groups =' clipboard,table,anchor,link,image';
//	默认值：'clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,
//	link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea'
//	CKEDITOR.config.menu_subMenuDelay
//	显示子菜单时的延迟，单位：ms。plugins/menu/plugin.js
//	示例：
//	CKEDITOR.config.menu_subMenuDelay = 0;
//	默认值：400
//	CKEDITOR.config.newpage_html
//	当执行“新建”命令时，编辑器中的内容。plugins/newpage/plugin.js
//	示例：
//	CKEDITOR.config.newpage_html = '
//	Type you text here.
//	';
//	 
//	默认值：空
//	CKEDITOR.config.pasteFromWordCleanupFile
//	示例：
//	CKEDITOR.config.pasteFromWordCleanupFile = 'custom';
//	默认值：default
//	CKEDITOR.config.pasteFromWordNumberedHeadingToList
//	示例：
//	CKEDITOR.config.pasteFromWordNumberedHeadingToList = true;
//	默认值：false
//	CKEDITOR.config.pasteFromWordPromptCleanup
//	示例：
//	CKEDITOR.config.pasteFromWordPromptCleanup = true
//	默认值：undefined
//	CKEDITOR.config.pasteFromWordRemoveFontStyles
//	示例：
//	CKEDITOR.config.pasteFromWordRemoveFontStyles = false
//	默认值：true
//	CKEDITOR.config.pasteFromWordRemoveStyle
//	从word中粘贴内容时是否移除格式。plugins/pastefromword/plugin.js
//	示例：
//	CKEDITOR.config.pasteFromWordRemoveStyle = false;
//	CKEDITOR.config.pasteFromWordIgnoreFontFace
//	当从word里复制文字进来时，是否进行文字的格式化去除。plugins/pastefromword/plugin.js
//	示例：
//	CKEDITOR.config.pasteFromWordIgnoreFontFace = true; //默认为忽略格式
//	CKEDITOR.config.pasteFromWordKeepsStructure
//	是否使用等标签修饰或者代替从word文档中粘贴过来的内容。plugins/pastefromword/plugin.js
//	示例：
//	CKEDITOR.config.pasteFromWordKeepsStructure = false;
//	CKEDITOR.config.plugins
//	CKEDITOR.config.protectedSource
//	对应后台语言的类型来对输出的HTML内容进行格式化
//	示例：
//	CKEDITOR.config.protectedSource.push( /<\?[\s\S]*?\?>/g );   PHP Code
//	CKEDITOR.config.protectedSource.push( //g );   ASP Code
//	CKEDITOR.config.protectedSource.push( /(]+>[\s|\S]*?<\/asp:[^\>]+>)|(]+\/>)/gi );   ASP.Net Code
//	默认值：空
//	CKEDITOR.config.removeFormatAttributes
//	CKEDITOR.config.removePlugins
//	示例：
//	CKEDITOR.config.removePlugins = 'elementspath,save,font';
//	KEDITOR.config.resize_enabled
//	取消“拖拽以改变尺寸”功能。plugins/resize/plugin.js
//	示例：
//	CKEDITOR.config.resize_enabled = false;
//	默认值：true
//	CKEDITOR.config.resize_maxHeight
//	“拖拽以改变尺寸”的最大高度。
//	示例：
//	CKEDITOR.config.resize_maxHeight = 600;
//	默认值：3000
//	CKEDITOR.config.resize_maxWidth
//	“拖拽以改变尺寸”的最大宽度。
//	示例：
//	CKEDITOR.config.resize_maxWidth = 750;
//	默认值：3000
//	CKEDITOR.config.resize_minHeight
//	“拖拽以改变尺寸” 的最小高度。
//	示例：
//	CKEDITOR.config.resize_minHeight = 600;
//	默认值：250
//	CKEDITOR.config.resize_minWidth
//	“拖拽以改变尺寸”的最小宽度。
//	示例：
//	CKEDITOR.config.resize_minWidth = 500;
//	默认值：750
//	CKEDITOR.config.shiftEnterMode
//	当输入：shift+Enter时插入的标签，可设置：
//	CKEDITOR.ENTER_P
//	CKEDITOR.ENTER_BR
//	CKEDITOR.ENTER_DIV
//	示例：
//	CKEDITOR.config.shiftEnterMode = CKEDITOR.ENTER_P;
//	CKEDITOR.config.skin
//	编辑器样式，有三种：'kama'（默认）、'office2003'、'v2'
//	示例：
//	CKEDITOR.config.skin = 'v2';
//	CKEDITOR.config.skin = 'myskin,/customstuff/myskin/';
//	默认值：'kama'
//	CKEDITOR.config.smiley_descriptions
//	可选的表情替代字符。plugins/smiley/plugin.js
//	示例：
//	// 默认设置
//	config.smiley_descriptions = [
//	'smiley', 'sad', 'wink', 'laugh', 'frown', 'cheeky', 'blush', 'surprise',
//	'indecision', 'angry', 'angel', 'cool', 'devil', 'crying', 'enlightened', 'no',
//	'yes', 'heart', 'broken heart', 'kiss', 'mail'
//	];
//	 
//	// 使用符号标签
//	config.smiley_descriptions = [
//	':)', ':(', ';)', ':D', ':/', ':P', ':*)', ':-o',
//	':|', '>:(', 'o:)', '8-)', '>:-)', ';(', '', '', '',
//	'', '', ':-*', ''
//	]; 
//	 
//	默认值：如示例
//	CKEDITOR.config.smiley_images
//	对应的表情图片。plugins/smiley/plugin.js
//	示例：
//	config.smiley_images = [
//	'regular_smile.gif','sad_smile.gif','wink_smile.gif','teeth_smile.gif','confused_smile.gif','tounge_smile.gif',
//	'embaressed_smile.gif','omg_smile.gif','whatchutalkingabout_smile.gif','angry_smile.gif','angel_smile.gif','shades_smile.gif',
//	'devil_smile.gif','cry_smile.gif','lightbulb.gif','thumbs_down.gif','thumbs_up.gif','heart.gif',
//	'broken_heart.gif','kiss.gif','envelope.gif']; 
//	默认值：如示例
//	CKEDITOR.config.smiley_path
//	表情的地址 plugins/smiley/plugin.js
//	示例：
//	CKEDITOR.config.smiley_path = 'http://www.example.com/images/smileys/';
//	CKEDITOR.config.smiley_path = '/images/smileys/';
//	默认值：plugins/smileys/images/
//	CKEDITOR.config.startupFocus
//	页面载入时，编辑框是否立即获得焦点 plugins/editingblock/plugin.js
//	示例：
//	CKEDITOR.config.startupFocus = true;
//	默认值：false
//	CKEDITOR.config.startupMode
//	载入时，以何种方式编辑 源码和所见即所得 "source"和"wysiwyg" plugins/editingblock/plugin.js
//	示例：
//	CKEDITOR.config.startupMode ='source';
//	默认值：'wysiwyg'
//	CKEDITOR.config.startupOutlineBlocks
//	载入时，是否显示框体的边框 plugins/showblocks/plugin.js
//	示例：
//	CKEDITOR.config.startupOutlineBlocks = true;
//	默认值：false
//	CKEDITOR.config.stylesSet
//	是否载入样式文件。
//	示例：
//	// 本地文件(mystyles.js)
//	CKEDITOR.config.stylesSet = 'mystyles';
//	CKEDITOR.config.stylesCombo_stylesSet = 'mystyles';
//	 
//	// 相对路径
//	CKEDITOR.config.stylesSet = 'mystyles:/editorstyles/styles.js';
//	CKEDITOR.config.stylesCombo_stylesSet = 'mystyles:/editorstyles/styles.js';
//	 
//	// 绝对路径
//	CKEDITOR.config.stylesSet = 'mystyles:http://www.example.com/editorstyles/styles.js';
//	CKEDITOR.config.stylesCombo_stylesSet = 'mystyles:http://www.example.com/editorstyles/styles.js';
//	 
//	// 自定义列表
//	config.stylesSet = [
//	{ name : 'Strong Emphasis', element : 'strong' },
//	{ name : 'Emphasis', element : 'em' }, ...
//	];
//	默认值：'default'
//	CKEDITOR.config.tabIndex
//	起始的索引值。
//	示例：
//	CKEDITOR.config.tabIndex = 1;
//	默认值：0
//	CKEDITOR.config.tabSpaces
//	当用户键入TAB时，编辑器走过的空格数，( )当值为0时，焦点将移出编辑框 plugins/tab/plugin
//	示例：
//	CKEDITOR.config.tabSpaces = 4;
//	默认值：0
//	CKEDITOR.config.templates
//	默认使用的模板 plugins/templates/plugin.js
//	示例：
//	CKEDITOR.config.templates = 'my_templates';
//	默认值：'default'
//	CKEDITOR.config.templates_files
//	用逗号分隔的模板文件plugins/templates/plugin.js
//	示例：
//	CKEDITOR.config.templates_files =
//	[
//	/editor_templates/side_default.js'
//	'http://www.example.com/user_templates.js'
//	]
//	默认值：['plugins/templates/templates/default.js'] 
//	CKEDITOR.config.templates_replaceContent
//	当使用模板时，“编辑内容将被替换”框是否选中 plugins/templates/plugin.js
//	示例：
//	CKEDITOR.config.templates_replaceContent = false;
//	默认值：true
//	CKEDITOR.config.theme
//	主题。
//	示例：
//	CKEDITOR.config.theme = 'default';
//	默认值：'default'
//	CKEDITOR.config.toolbar_Basic
//	CKEDITOR.config.toolbar_Full
//	CKEDITOR.config.toolbar_自定义名称
//	工具栏（基础'Basic'、全能'Full'、自定义）plugins/toolbar/plugin.js
//	示例：
//	CKEDITOR.config.toolbar = 'Basic';
//	CKEDITOR.config.toolbar = 'Full';
//	Full对应：
//	CKEDITOR.config.toolbar_Full = [
//	['Source','-','Save','NewPage','Preview','-','Templates'],
//	['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
//	['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
//	['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
//	'/',
//	['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
//	['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
//	['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
//	['Link','Unlink','Anchor'],
//	['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
//	'/',
//	['Styles','Format','Font','FontSize'],
//	['TextColor','BGColor']
//	];
//	默认值：'Full'
//	CKEDITOR.config.toolbarCanCollapse
//	工具栏是否可以被收缩。
//	示例：
//	CKEDITOR.config.toolbarCanCollapse = false;
//	默认值：true
//	CKEDITOR.config.toolbarLocation
//	工具栏的位置。
//	示例：
//	CKEDITOR.config.toolbarLocation = 'bottom';
//	默认值：'top'
//	CKEDITOR.config.toolbarStartupExpanded
//	工具栏默认是否展开。
//	示例：
//	CKEDITOR.config.toolbarStartupExpanded = false;
//	默认值：true
//	CKEDITOR.config.uiColor
//	背景颜色
//	CKEDITOR.config.uiColor = '#FFF';
//	CKEDITOR.config.undoStackSize
//	撤销的记录步数 plugins/undo/plugin.js
//	示例：
//	CKEDITOR.config.undoStackSize = 50;
//	默认值：20
//	CKEDITOR.config.width
//	设置宽度。
//	示例：
//	CKEDITOR.config.width = 850;
//	CKEDITOR.config.width = '75%';
};
