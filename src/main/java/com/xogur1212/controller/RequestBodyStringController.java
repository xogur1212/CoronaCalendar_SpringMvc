package com.xogur1212.controller;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.xogur1212.model.TodoDto;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Controller
public class RequestBodyStringController {

		@PostMapping("/RequestBodyString01.do")
		public void requestBodyString01(HttpServletRequest request,HttpServletResponse response) throws IOException {
			ServletInputStream inputStream =request.getInputStream();
			
			String messageBody =StreamUtils.copyToString(inputStream, StandardCharsets.UTF_8);
			log.info(messageBody);
		}
	 
	 
}
