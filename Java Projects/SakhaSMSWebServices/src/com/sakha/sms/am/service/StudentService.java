package com.sakha.sms.am.service;

import java.util.List;

import com.sakha.sms.am.model.Student;

public interface StudentService {
	
	public List<Student> findAll();

	public Student find(Integer id);

	public List<Student> search(String keyward);
}
