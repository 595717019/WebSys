package com.tre.service.webuploader;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.tre.dao.DaoSupport;

/**
 * <p>
 * 上?文件 服务实现类
 * @since 2017-09-24
 */
@Service
public class UploadFileInfoServiceImpl {
    @Resource(name = "daoSupport")
    private DaoSupport dao;
	/**
	* @author 10097454
	* @date 2017/09/24 0:50:17
	* @Description: 初始化检索
	 */
	public void selectUploadFileInfo()
	{
		try
		{
		    dao.execProc(null, null);
		} catch (Exception e)
		{
		    e.printStackTrace();
		}

	}
	

}
