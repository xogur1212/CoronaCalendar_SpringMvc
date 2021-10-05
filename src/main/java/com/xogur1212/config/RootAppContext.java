package com.xogur1212.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

//프로젝트에 사용할 bean 정의
@Configuration
@ComponentScan("com.xogur1212.model")
public class RootAppContext {

}
