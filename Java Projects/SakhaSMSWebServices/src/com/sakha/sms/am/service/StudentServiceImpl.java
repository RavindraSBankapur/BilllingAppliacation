package com.sakha.sms.am.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sakha.sms.am.dao.StudentDAO;
import com.sakha.sms.am.model.Student;

@Service("studentService")
@Transactional
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentDAO studentDAO;
	
	@Override
	public List<Student> findAll() {
		return studentDAO.findAll();
	}
	
	@Override
	public Student find(Integer id) {
		return studentDAO.find(id);
	}

	@Override
	public List<Student> search(String keyward) {
		return studentDAO.search(keyward);
	}

}
