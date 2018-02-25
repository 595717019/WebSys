package com.tre.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.ExecutorType;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.SqlSessionUtils;
import org.springframework.stereotype.Repository;

@Repository("daoSupport")
public class DaoSupport implements BaseDao {

    @Resource(name = "sqlSessionTemplate")
    private SqlSessionTemplate sqlSessionTemplate;

    /**
     * 保存对象
     * @param str
     * @param obj
     * @return
     * @throws Exception
     */
    public Object save(String str, Object obj) throws Exception {
        return sqlSessionTemplate.insert(str, obj);
    }

    /**
     * 批量更新
     * @param str
     * @param obj
     */
    @SuppressWarnings("rawtypes")
    public Object batchSave(String str, List objs) throws Exception {
        return sqlSessionTemplate.insert(str, objs);
    }

    /**
     * 修改对象
     * @param str
     * @param obj
     * @return
     * @throws Exception
     */
    public Object update(String str, Object obj) throws Exception {
        return sqlSessionTemplate.update(str, obj);
    }

    /**
     * 批量更新
     * @param str
     * @param obj
     */
    public void batchUpdate(String str, List objs) throws Exception {
        SqlSessionFactory sqlSessionFactory = sqlSessionTemplate.getSqlSessionFactory();
        // 批量执行器
        SqlSession sqlSession = sqlSessionFactory.openSession(ExecutorType.BATCH, false);
        try {
            if (objs != null) {
                for (int i = 0, size = objs.size(); i < size; i++) {
                    sqlSession.update(str, objs.get(i));
                }
                sqlSession.flushStatements();
                sqlSession.commit();
                sqlSession.clearCache();
            }
        } finally {
            sqlSession.close();
        }
    }

    /**
     * 批量更新
     * @param str
     * @param obj
     * @return
     * @throws Exception
     */
    public Object batchDelete(String str, List objs) throws Exception {
        return sqlSessionTemplate.delete(str, objs);
    }

    /**
     * 删除对象 
     * @param str
     * @param obj
     * @return
     * @throws Exception
     */
    public Object delete(String str, Object obj) throws Exception {
        return sqlSessionTemplate.delete(str, obj);
    }

    /**
     * 查找对象
     * @param str
     * @param obj
     * @return
     * @throws Exception
     */
    public Object findForObject(String str, Object obj) throws Exception {
        return sqlSessionTemplate.selectOne(str, obj);
    }

    /**
     * 查找对象
     * @param str
     * @param obj
     * @return
     * @throws Exception
     */
    public Object findForList(String str, Object obj) throws Exception {
        return sqlSessionTemplate.selectList(str, obj);
    }

    public Object findForMap(String str, Object obj, String key, String value) throws Exception {
        return sqlSessionTemplate.selectMap(str, obj, key);
    }

    /**
    * @author 10097454
    * @date 2018/01/18 12:06:47
    * @Description: 执行存储过程
    * @param procName 存储过程名
    * @param objs 存储过程参数
    * @return
     */
    public int execProc(String procName, List<Object> objs) throws Exception {
        procName = "{call PROC_TEST(?)}";
        SqlSessionFactory sqlSessionFactory = null;
        SqlSession sqlSession = null;
        Connection conn = null;
        CallableStatement cs = null;
        ResultSet rs = null;
        int j = 0;
        try {
            sqlSessionFactory = sqlSessionTemplate.getSqlSessionFactory();
            // 批量执行器
            sqlSession = sqlSessionFactory.openSession(ExecutorType.BATCH, false);
            sqlSessionTemplate = (SqlSessionTemplate) sqlSession;
            conn = SqlSessionUtils.getSqlSession(sqlSessionTemplate.getSqlSessionFactory(), sqlSessionTemplate.getExecutorType(),
                    sqlSessionTemplate.getPersistenceExceptionTranslator()).getConnection();
            cs = conn.prepareCall(procName);
            if (objs != null) {
                for (int i = 0, size = objs.size(); i < size; i++) {
                    cs.setString(i + 1, "99");
                }
            }

            rs = cs.executeQuery();
            while (rs.next()) {
                j = rs.getInt(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            sqlSession.close();
        }
        return j;
    }
}
