package com.tre.service.information.files;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.tre.dao.DaoSupport;
import com.tre.entity.Page;
import com.tre.util.PageData;

@Service("filesService")
public class FilesService
{
	@Resource(name = "daoSupport")
	private DaoSupport dao;

	/*
	 * 新增
	 */
	public void save(PageData pd) throws Exception
	{
		dao.save("FilesMapper.save", pd);
	}

	/*
	 * 删除
	 */
	public void delete(PageData pd) throws Exception
	{
		dao.delete("FilesMapper.delete", pd);
	}

	/*
	 * 修改
	 */
	public void edit(PageData pd) throws Exception
	{
		dao.update("FilesMapper.edit", pd);
	}

	/*
	 * 列表
	 */
	public List<PageData> list(Page page) throws Exception
	{
		return (List<PageData>) dao.findForList("FilesMapper.datalistPage", page);
	}

	/*
	 * 列表(全部)
	 */
	public List<PageData> listAll(PageData pd) throws Exception
	{
		return (List<PageData>) dao.findForList("FilesMapper.listAll", pd);
	}

	/*
	 * 通过id获取数据
	 */
	public PageData findById(PageData pd) throws Exception
	{
		return (PageData) dao.findForObject("FilesMapper.findById", pd);
	}

	/*
	 * 批量删除
	 */
	public void deleteAll(String[] ArrayDATA_IDS) throws Exception
	{
		dao.delete("FilesMapper.deleteAll", ArrayDATA_IDS);
	}

	/*
	 * 批量获取
	 */
	public List<PageData> getAllById(String[] ArrayDATA_IDS) throws Exception
	{
		return (List<PageData>) dao.findForList("FilesMapper.getAllById", ArrayDATA_IDS);
	}

	/*
	 * 删除图片
	 */
	public void delTp(PageData pd) throws Exception
	{
		dao.update("FilesMapper.delTp", pd);
	}

}
