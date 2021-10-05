package com.xogur1212.model;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Repository
public class TodoDto {
	private int no;
	private String todo;
	private String done;
	private String pickedDate;
}
