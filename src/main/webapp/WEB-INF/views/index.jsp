<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<script src="js/jquery-3.6.0.min.js"></script>
	<script src="js/gsap/gsap.min.js"></script>

	<!--달력관련 -->
	<script src="https://jsuites.net/v4/jsuites.js"></script>
	<link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />

	<!--icon-->
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

	<script src="js/calander.js" defer></script>
	<script src="js/corona.js" defer></script>
	<link href="css/calendar.css" rel="stylesheet">
	<link href="css/layout.css" rel="stylesheet">
	</link>




</head>

<body>
	<h1>corona</h1>
	<main>
		<ul id="coronaList">

		</ul>

	</main>

	<div class="calendarWrap">

		<div class="dataBox">
			<input type="text" readonly>

		</div>
		<div id='calendar'>

			<div class="todo">

			</div>
			<div class="calendarBox">
				<div class="header">
					<button class="btnPrevMonth"><span class="material-icons">chevron_left</span></button>
					<div class="monthTitle">
						<span class="year">2021</span>
						<span class="month">06</span>
					</div>
					<button class="btnNextMonth"><span class="material-icons">chevron_right</span></button>
				</div>
				<div class="days">
					<ul class="itemList">
						<li class="sun"><span>SUN</span></li>
						<li><span>MON</span></li>
						<li><span>TUE</span></li>
						<li><span>WED</span></li>
						<li><span>THU</span></li>
						<li><span>FRI</span></li>
						<li class="sat"><span>SAT</span></li>
					</ul>
				</div>
				<div class="dates">
					<ul class="itemList">
						<li><span>01</span></li>
						<li><span>02</span></li>
						<li><span>03</span></li>
						<li><span>04</span></li>
						<li><span>05</span></li>
						<li><span>06</span></li>
						<li><span>07</span></li>
						<li><span>08</span></li>
						<li><span>09</span></li>
						<li><span>10</span></li>
					</ul>
				</div>
			</div>

		</div>

	</div>







</body>

</html>