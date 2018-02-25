package com.tre.controller.information.files;

import java.io.File;
import java.io.FileFilter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.nio.channels.FileChannel;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.io.FileUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.tre.controller.base.BaseController;
import com.tre.entity.Page;
import com.tre.service.information.files.FilesService;
import com.tre.util.AppUtil;
import com.tre.util.Const;
import com.tre.util.DateUtil;
import com.tre.util.DelAllFile;
import com.tre.util.FileUpload;
import com.tre.util.Jurisdiction;
import com.tre.util.ObjectExcelView;
import com.tre.util.PageData;
import com.tre.util.PathUtil;
import com.tre.util.Watermark;

/**
* @Description: 文件管理
* @author 10097454
* @date 2017/11/30 7:43:22
 */
@Controller
@RequestMapping(value = "/files")
public class FilesController extends BaseController {
    String menuUrl = "files/list.do"; // 菜单地址(权限用)
    @Resource(name = "filesService")
    private FilesService filesService;

    /**
     * 新增
     */
    // @RequestMapping(value = "/add")
    // @ResponseBody
    // public Object save(HttpServletRequest request, HttpServletResponse
    // response) throws Exception {
    // logBefore(logger, "新增文件");
    // DiskFileItemFactory factory = new DiskFileItemFactory();
    // ServletFileUpload sfu = new ServletFileUpload(factory);
    // sfu.setHeaderEncoding("utf-8");
    // String fileMd5 = null;
    // String chunk = null;
    // Map<String, String> map = new HashMap<String, String>();
    // PageData pd = new PageData();
    // if (Jurisdiction.buttonJurisdiction(menuUrl, "add")) {
    // String filePath = PathUtil.getClasspath() + Const.FILEPATHFILE; // 文件上传路径
    // try {
    // List<FileItem> items = sfu.parseRequest(request);
    // for (FileItem item : items) {
    // if (item.isFormField()) {
    // String fieldName = item.getFieldName();
    // if (fieldName.equals("fileMd5")) {
    // fileMd5 = item.getString("utf-8");
    // }
    // if (fieldName.equals("chunk")) {
    // chunk = item.getString("utf-8");
    // }
    // } else {
    // File file = new File(filePath + "/" + fileMd5);
    // if (!file.exists()) {
    // file.mkdir();
    // }
    // File chunkFile = new File(filePath + "/" + fileMd5 + "/" + chunk);
    // FileUtils.copyInputStreamToFile(item.getInputStream(), chunkFile);// 执行上传
    // }
    // }
    //
    // } catch (FileUploadException e) {
    // e.printStackTrace();
    // }
    //
    // // pd.put("PICTURES_ID", this.get32UUID()); // 主键
    // // pd.put("TITLE", "图片"); // 标题
    // // pd.put("NAME", fileName); // 文件名
    // // pd.put("PATH", ffile + "/" + fileName); // 路径
    // // pd.put("CREATETIME", Tools.date2Str(new Date())); // 创建时间
    // // pd.put("MASTER_ID", "1"); // 附属与
    // // pd.put("BZ", "图片管理处上传"); // 备注
    // // // 加水印
    // // Watermark.setWatemark(PathUtil.getClasspath() +
    // // Const.FILEPATHFILE + ffile + "/" + fileName);
    // // filesService.save(pd);
    // }
    // map.put("result", "ok");
    // return AppUtil.returnObject(pd, map);
    // }

    @RequestMapping(value = "/add")
    @ResponseBody
    public Object save(@RequestParam(required = false) MultipartFile file, HttpServletRequest request,
            HttpServletResponse response) throws Exception {
        logBefore(logger, "新增文件");
        String fileMd5 = null;
        int chunk = 0;// 文件分块下标
        int chunks = 0;
        String filePath = "";
        String extName = "";
        Map<String, String> map = new HashMap<String, String>();
        PageData pd = new PageData();
        if (Jurisdiction.buttonJurisdiction(menuUrl, "add")) {
            if (null != file && !file.isEmpty()) {
                filePath = PathUtil.getClasspath() + Const.FILEPATHFILE; // 文件上传路径
                // MultipartFile转换file
                CommonsMultipartFile cf = (CommonsMultipartFile) file;
                DiskFileItem fileItem = (DiskFileItem) cf.getFileItem();
                // File file = fileItem.getStoreLocation();
                chunk = request.getParameter("chunk") == null ? 0 : Integer.parseInt(request.getParameter("chunk"));
                fileMd5 = request.getParameter("fileMd5");
                if (fileItem.isFormField()) {
                    String fieldName = fileItem.getFieldName();
                    if (fieldName.equals("fileMd5")) {
                        fileMd5 = fileItem.getString("utf-8");
                    }
                    if (fieldName.equals("chunk") && fieldName != null) {
                        chunk = Integer.parseInt(fileItem.getString("utf-8"));
                    }
                    if (fieldName.equals("chunks") && fieldName != null) {
                        chunks = Integer.parseInt(fileItem.getString("utf-8"));
                    }
                } else {
                    File file2 = new File(filePath + "/" + fileMd5);
                    if (!file2.exists()) {
                        file2.mkdir();
                    }
                    if (file.getOriginalFilename().lastIndexOf(".") >= 0) {
                        extName = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
                    }
                    File chunkFile = new File(filePath + "/" + fileMd5 + extName);
                    if (chunks > 0) {
                        chunkFile = new File(filePath + "/" + fileMd5 + "/" + chunk + extName);
                    }
                    FileUtils.copyInputStreamToFile(fileItem.getInputStream(), chunkFile);// 执行上传
                }

            }

        }
        map.put("result", "ok");
        return AppUtil.returnObject(pd, map);
    }

    /**
     * 检查文件分块
     */
    @RequestMapping(value = "/checkChunk")
    @ResponseBody
    public Object checkChunk(HttpServletRequest request, HttpServletResponse response) throws Exception {
        logBefore(logger, "检查文件分块");
        Map<String, String> map = new HashMap<String, String>();
        String ffile = DateUtil.getDays();
        PageData pd = new PageData();

        // 检查当前分块是否上传成功
        String fileMd5 = request.getParameter("fileMd5");
        String chunk = request.getParameter("chunk");
        String chunkSize = request.getParameter("chunkSize");
        response.setContentType("text/html;charset=utf-8");

        if (Jurisdiction.buttonJurisdiction(menuUrl, "add")) {
            String filePath = PathUtil.getClasspath() + Const.FILEPATHFILE + ffile; // 文件上传路径
            File checkFile = new File(filePath + "/" + fileMd5 + "/" + chunk);
            // 检查文件是否存在，且大小是否一致
            if (checkFile.exists() && checkFile.length() == Integer.parseInt(chunkSize)) // 上传过
            {
                response.getWriter().write("{\"ifExist\":1}");
            } else// 没有上传过
            {
                response.getWriter().write("{\"ifExist\":0}");
            }
        }
        map.put("checkChunk", "ok");
        return AppUtil.returnObject(pd, map);
    }

    /**
     * 合并文件分块
     */
    @RequestMapping(value = "/mergeChunks")
    @ResponseBody
    public Object mergeChunks(HttpServletRequest request, HttpServletResponse response) throws Exception {
        logBefore(logger, "合并文件分块");
        String ext = request.getParameter("ext");// 文件的后缀
        Map<String, String> map = new HashMap<String, String>();
        String ffile = DateUtil.getDays();
        PageData pd = new PageData();

        if (Jurisdiction.buttonJurisdiction(menuUrl, "add")) {
            String filePath = PathUtil.getClasspath() + Const.FILEPATHFILE + ffile; // 文件上传路径
            // 需要合并的文件的目录标记
            String fileMd5 = request.getParameter("fileMd5");

            // 读取目录里的所有文件
            File f = new File(filePath + "/" + fileMd5);
            File[] fileArray = f.listFiles(new FileFilter() {
                // 排除目录只要文件
                @Override
                public boolean accept(File pathname) {
                    if (pathname.isDirectory()) {
                        return false;
                    }
                    return true;
                }
            });

            // 转成集合，便于排序
            List<File> fileList = new ArrayList<File>(Arrays.asList(fileArray));
            Collections.sort(fileList, new Comparator<File>() {
                @Override
                public int compare(File o1, File o2) {
                    if (Integer.parseInt(o1.getName()) < Integer.parseInt(o2.getName())) {
                        return -1;
                    }
                    return 1;
                }
            });
            // MD5文件名
            File outputFile = new File(filePath + "/" + fileMd5 + ext);
            // 创建文件
            outputFile.createNewFile();
            // 输出流
            FileChannel outChnnel = new FileOutputStream(outputFile).getChannel();
            // 合并
            FileChannel inChannel;
            for (File file : fileList) {
                inChannel = new FileInputStream(file).getChannel();
                inChannel.transferTo(0, inChannel.size(), outChnnel);
                inChannel.close();
                // 删除分片
                file.delete();
            }
            outChnnel.close();
            // 清除文件夹
            File tempFile = new File(filePath + "/" + fileMd5);
            if (tempFile.isDirectory() && tempFile.exists()) {
                tempFile.delete();
            }
            // 文件路径
            // String rspJson = "{\"fileMd5\":\"" + fileMd5 +
            // "\",\"filePath\":\"" + folad + "\"}";
            // response.getWriter().write(rspJson);
        }
        map.put("mergeChunks", "ok");
        return AppUtil.returnObject(pd, map);
    }

    /**
     * 删除
     */
    @RequestMapping(value = "/delete")
    public void delete(PrintWriter out) {
        logBefore(logger, "删除文件");
        PageData pd = new PageData();
        try {
            if (Jurisdiction.buttonJurisdiction(menuUrl, "del")) {
                pd = this.getPageData();
                DelAllFile.delFolder(PathUtil.getClasspath() + Const.FILEPATHFILE + pd.getString("PATH")); // 删除图片
                filesService.delete(pd);
            }
            out.write("success");
            out.close();
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }

    }

    /**
     * 修改
     */
    @RequestMapping(value = "/edit")
    public ModelAndView edit(HttpServletRequest request,
            @RequestParam(value = "tp", required = false) MultipartFile file,
            @RequestParam(value = "tpz", required = false) String tpz,
            @RequestParam(value = "PICTURES_ID", required = false) String PICTURES_ID,
            @RequestParam(value = "TITLE", required = false) String TITLE,
            @RequestParam(value = "MASTER_ID", required = false) String MASTER_ID,
            @RequestParam(value = "BZ", required = false) String BZ) throws Exception {
        logBefore(logger, "修改文件");
        ModelAndView mv = this.getModelAndView();
        PageData pd = new PageData();
        pd = this.getPageData();
        if (Jurisdiction.buttonJurisdiction(menuUrl, "edit")) {
            pd.put("PICTURES_ID", PICTURES_ID); // 图片ID
            pd.put("TITLE", TITLE); // 标题
            pd.put("MASTER_ID", MASTER_ID); // 属于ID
            pd.put("BZ", BZ); // 备注

            if (null == tpz) {
                tpz = "";
            }
            String ffile = DateUtil.getDays(), fileName = "";
            if (null != file && !file.isEmpty()) {
                String filePath = PathUtil.getClasspath() + Const.FILEPATHFILE + ffile; // 文件上传路径
                fileName = FileUpload.fileUp(file, filePath, this.get32UUID()); // 执行上传
                pd.put("PATH", ffile + "/" + fileName); // 路径
                pd.put("NAME", fileName);
            } else {
                pd.put("PATH", tpz);
            }
            Watermark.setWatemark(PathUtil.getClasspath() + Const.FILEPATHFILE + ffile + "/" + fileName);// 加水印
            filesService.edit(pd); // 执行修改数据库
        }
        mv.addObject("msg", "success");
        mv.setViewName("save_result");
        return mv;
    }

    /**
     * 列表
     */
    @RequestMapping(value = "/list")
    public ModelAndView list(Page page) {
        logBefore(logger, "文件列表");
        ModelAndView mv = this.getModelAndView();
        PageData pd = new PageData();
        try {
            pd = this.getPageData();

            String KEYW = pd.getString("keyword");
            if (null != KEYW && !"".equals(KEYW)) {
                KEYW = KEYW.trim();
                pd.put("KEYW", KEYW);
            }

            page.setPd(pd);
            List<PageData> varList = filesService.list(page); // 列出Pictures列表
            mv.setViewName("information/pictures/pictures_list");
            mv.addObject("varList", varList);
            mv.addObject("pd", pd);
            mv.addObject(Const.SESSION_QX, this.getHC()); // 按钮权限
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }
        return mv;
    }

    /**
     * 去新增页面
     */
    @RequestMapping(value = "/goAdd")
    public ModelAndView goAdd() {
        logBefore(logger, "去新增文件页面");
        ModelAndView mv = this.getModelAndView();
        PageData pd = new PageData();
        pd = this.getPageData();
        try {
            mv.setViewName("information/pictures/pictures_add");
            mv.addObject("pd", pd);
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }
        return mv;
    }

    /**
     * 去修改页面
     */
    @RequestMapping(value = "/goEdit")
    public ModelAndView goEdit() {
        logBefore(logger, "去修改文件页面");
        ModelAndView mv = this.getModelAndView();
        PageData pd = new PageData();
        pd = this.getPageData();
        try {
            pd = filesService.findById(pd); // 根据ID读取
            mv.setViewName("information/pictures/pictures_edit");
            mv.addObject("msg", "edit");
            mv.addObject("pd", pd);
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }
        return mv;
    }

    /**
     * 批量删除
     */
    @RequestMapping(value = "/deleteAll")
    @ResponseBody
    public Object deleteAll() {
        logBefore(logger, "批量删除文件");
        PageData pd = new PageData();
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            pd = this.getPageData();
            if (Jurisdiction.buttonJurisdiction(menuUrl, "del")) {
                List<PageData> pdList = new ArrayList<PageData>();
                List<PageData> pathList = new ArrayList<PageData>();
                String DATA_IDS = pd.getString("DATA_IDS");
                if (null != DATA_IDS && !"".equals(DATA_IDS)) {
                    String ArrayDATA_IDS[] = DATA_IDS.split(",");
                    pathList = filesService.getAllById(ArrayDATA_IDS);
                    // 删除文件
                    for (int i = 0; i < pathList.size(); i++) {
                        DelAllFile.delFolder(
                                PathUtil.getClasspath() + Const.FILEPATHFILE + pathList.get(i).getString("PATH"));
                    }
                    filesService.deleteAll(ArrayDATA_IDS);
                    pd.put("msg", "ok");
                } else {
                    pd.put("msg", "no");
                }
                pdList.add(pd);
                map.put("list", pdList);
            }
        } catch (Exception e) {
            logger.error(e.toString(), e);
        } finally {
            logAfter(logger);
        }
        return AppUtil.returnObject(pd, map);
    }

    /*
     * 导出文件信息到excel
     * 
     * @return
     */
    @RequestMapping(value = "/excel")
    public ModelAndView exportExcel() {
        logBefore(logger, "导出文件到excel");
        ModelAndView mv = new ModelAndView();
        PageData pd = new PageData();
        pd = this.getPageData();
        try {
            Map<String, Object> dataMap = new HashMap<String, Object>();
            List<String> titles = new ArrayList<String>();
            titles.add("标题"); // 1
            titles.add("文件名"); // 2
            titles.add("路径"); // 3
            titles.add("创建时间"); // 4
            titles.add("属于"); // 5
            titles.add("备注"); // 6
            dataMap.put("titles", titles);
            List<PageData> varOList = filesService.listAll(pd);
            List<PageData> varList = new ArrayList<PageData>();
            for (int i = 0; i < varOList.size(); i++) {
                PageData vpd = new PageData();
                vpd.put("var1", varOList.get(i).getString("TITLE")); // 1
                vpd.put("var2", varOList.get(i).getString("NAME")); // 2
                vpd.put("var3", varOList.get(i).getString("PATH")); // 3
                vpd.put("var4", varOList.get(i).getString("CREATETIME")); // 4
                vpd.put("var5", varOList.get(i).getString("MASTER_ID")); // 5
                vpd.put("var6", varOList.get(i).getString("BZ")); // 6
                varList.add(vpd);
            }
            dataMap.put("varList", varList);
            ObjectExcelView erv = new ObjectExcelView();
            mv = new ModelAndView(erv, dataMap);
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }
        return mv;
    }

    // 删除文件
    @RequestMapping(value = "/deltp")
    public void deltp(PrintWriter out) {
        logBefore(logger, "删除文件");
        try {
            PageData pd = new PageData();
            pd = this.getPageData();
            String PATH = pd.getString("PATH"); // 文件路径
            DelAllFile.delFolder(PathUtil.getClasspath() + Const.FILEPATHFILE + pd.getString("PATH")); // 删除文件
            if (PATH != null) {
                filesService.delTp(pd); // 删除数据中图片数据
            }
            out.write("success");
            out.close();
        } catch (Exception e) {
            logger.error(e.toString(), e);
        }
    }

    /* ===============================权限================================== */
    @SuppressWarnings("unchecked")
    public Map<String, String> getHC() {
        Subject currentUser = SecurityUtils.getSubject(); // shiro管理的session
        Session session = currentUser.getSession();
        return (Map<String, String>) session.getAttribute(Const.SESSION_QX);
    }
    /* ===============================权限================================== */

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(format, true));
    }
}
