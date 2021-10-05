package com.xogur1212.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j		//log찍는 annotation
public class ResponseViewController {

		@RequestMapping(value="View01.do" ,method=RequestMethod.GET)
		public ModelAndView responseView01() {
			//ModelAndView mav =new ModelAndView("response/view01");
			ModelAndView mav=new ModelAndView();
			mav.setViewName("response/view01");
			mav.addObject("sendData","view01 데이터 보냅니다.");
			return mav;
		}
		
		@RequestMapping("View02.do")
		public String responseView02(Model model) {
			log.info("log 기록함");
			model.addAttribute("sendData","view01");
			return "response/view01";
		}
		
		@GetMapping("View03.do")
		public String responseView03(Model model) {
			log.info("log 기록함");
			model.addAttribute("sendData","view01");
			return "response/view01";
		}
		
}
