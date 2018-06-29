package com.sakha.sms.am.dao;

import java.util.List;

import com.sakha.sms.am.model.Student;

public interface StudentDAO {
	
	public List<Student> findAll();

	public Student find(Integer id);

	public List<Student> search(String keyward);
}
