package com.tre.service.base;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.tre.service.webuploader.UploadFileInfoServiceImpl;

/**
* @author 作者 : 10097454
* @version 创建时间：2018/01/18 15:57:16
* @Description: JUnit4Test
*/
@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring/ApplicationContext.xml")
public class JUnit4Test extends AbstractJUnit4SpringContextTests{
    @Autowired
    private UploadFileInfoServiceImpl userService =new UploadFileInfoServiceImpl();

    
    @Test
    public void addUser(){
        userService.selectUploadFileInfo();
    }
}
