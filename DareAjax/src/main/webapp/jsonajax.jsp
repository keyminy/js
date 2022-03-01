<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"
	integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
	crossorigin="anonymous"></script>
</head>
<body>
	<button onclick="jsonajax()">클릭</button>
	<script>
		//js에서 객체 만드는법 var 변수 = {}
		var data = {
			username:"ssar",
			password:"1234"
		}   
		console.log("데이터 : ",data);
		var jsonData=JSON.stringify(data);
		console.log("스트링기피 : ",jsonData);
		var parsejs = JSON.parse(jsonData);
		console.log("parse() : " , parsejs);
		//console.log("스트링기피테스트",JSON.stringify(data).username); //undefined안되..
		
		function jsonajax(){
			$.ajax({
				type:"POST", //기본전략이 get임
				url:"http://localhost:8082/ajax2",
				data:JSON.stringify(data),
				contentType : "application/json", //나 json데이터 보낸다 알려줌
				dataType:"json" //목적 : 파싱해주는것
				//자바에서 json데이터로 응답해줄때,  .done(res에 받는다)
			})
			.done(res=>{
				console.log(res); 
				//{id: 1, username: 'love', password: '1234', phone: '01012345678'}
				console.log("유저네임",res.username); //love
			})
			.fail(error=>{
				
			});
		}

	</script>
</body>
</html>