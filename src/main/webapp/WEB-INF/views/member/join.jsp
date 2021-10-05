<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<main>
	<div id="contents">
		<h2 class="contentsTitle">회원가입</h2>
		<form method="POST" action="MemberJoin.do" id="join" class="form"
			name="signUp">
			<table border="1" class="tdLeft">
				<cols>
					<col style="width: 200px">
					<col style="width: 600px">
				</cols>
				<tbody>
					<tr>
						<th>아이디 <span>*</span></th>
						<td><input type="text" name="userId" placeholder="아이디"></td>
					</tr>
					<tr>
						<th>비밀번호 <span>*</span></th>
						<td><input type="password" name="userPw" placeholder="패스워드"  id="userPw"></td>
					</tr>
				
					<tr>
						<th>이름*</th>
						<td><input type="text" name="userName"></td>
					</tr>
					<tr>
						<th>주소</th>
						<td>
							<div></div>
								<input type="text" name="address"> 
							</div>
						</td>
					</tr>
					<tr>
						<th>휴대전화</th>
						<td><input type="number" name="phone" class="short"></td>
					</tr>
					<tr>
						<th>이메일<span>*</span></th>
						<td><input type="text" name="userEmail"></td>
					</tr>
				</tbody>
			</table>
			<div class="btns center">
				<input type="submit" value="회원가입" onClick="return signCheck();">
			</div>
		</form>
	</div>
	
</main>
<%@ include file="../include/footer.jsp"%>





