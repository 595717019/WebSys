package com.tre.controller.webuploader;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tre.controller.base.BaseController;

/**
* @Description: 文件上传的信息查询
* @author 10097454
* @date 2017/09/24 0:06:55
 */
@Controller
public class UploadFileInfoController extends BaseController
{
	@RequestMapping(value = "/uploadFileInfo", method = RequestMethod.POST, produces = "application/json; charset=utf-8")
	@ResponseBody
	public void Control()
	{
	    
	}


}
