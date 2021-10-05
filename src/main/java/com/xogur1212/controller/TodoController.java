package com.xogur1212.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xogur1212.model.TodoDao;
import com.xogur1212.model.TodoDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class TodoController {
	@Autowired
	TodoDao todoDao;
	
	@Autowired
	TodoDto todoDto;
	
	@RequestMapping("/InsertTodo.do")
	public Map<String,Object> insertTodo(TodoDto todoDto){
		Map<String,Object> hashMap=new HashMap<String,Object>();
		
		return hashMap;
	}
	
}
