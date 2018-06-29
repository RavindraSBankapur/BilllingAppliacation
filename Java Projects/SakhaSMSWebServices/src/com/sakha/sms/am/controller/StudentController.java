package com.sakha.sms.am.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.sakha.sms.am.dao.*;
import com.sakha.sms.am.model.*;
import com.sakha.sms.am.service.*;
import com.sakha.sms.am.utils.*;

@RestController()
@RequestMapping("student")
public class StudentController {
	@Autowired
	private StudentService studentService;

	/*@RequestMapping(value = "findall", method = RequestMethod.GET, produces = MimeTypeUtils.APPLICATION_JSON_VALUE, headers = "Accept=application/json,application/xml")
	public List<Student> findAll() {
		System.out.println("------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+studentService.findAll());
		return studentService.findAll();
	}*/
	@RequestMapping(value = "findall", method = RequestMethod.GET, produces = MimeTypeUtils.APPLICATION_JSON_VALUE, headers = "Accept=application/json,application/xml")
	public @ResponseBody ResponseEntity<Map<String, Object>> findAll() {
		
		Map<String, Object> respObj = new LinkedHashMap<String, Object>();
		
		respObj.put("data", studentService.findAll());
		
		return new ResponseEntity<Map<String,Object>>(respObj, HttpStatus.OK);
	}
}
