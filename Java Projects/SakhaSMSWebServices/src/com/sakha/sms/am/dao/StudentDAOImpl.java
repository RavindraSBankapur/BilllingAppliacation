package com.sakha.sms.am.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.sakha.sms.am.model.Student;

@Repository("studentDAO")
@Transactional
public class StudentDAOImpl implements StudentDAO {
	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Student> findAll() {
		return sessionFactory.openSession().createCriteria(Student.class).list();
	}

	@Override
	public Student find(Integer id) {
		return (Student) sessionFactory.getCurrentSession().createQuery("from Student " + "where studentID=:id")
				.setInteger("studentID", id).uniqueResult();
	}

	@SuppressWarnings("unchecked") 
	@Override
	public List<Student> search(String keyword) {
		return sessionFactory.getCurrentSession().createQuery("from Student " + "where branch like : branch")
				.setString("branch", keyword).list();
	}

}
