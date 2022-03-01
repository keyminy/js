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
	<button onclick="postajax()">클릭</button>
	<script>
		
		function postajax(){
			//POST로 key=value 데이터를 전송하고 json으로 응답받기.
			$.ajax({
				type:"post", //기본전략이 get임
				url:"http://localhost:8082/ajax1",
				data:"username=ssar&password=1234",
				//내가 전송할 데이터 설명 : contentType(생략가능,서버에서 브라우저한테 응답데이터 보내줄때만..!)
				contentType:"application/x-www-form-urlencoded",
				//dataType:"text" //목적 : 파싱해주는것
				//자바에서 json데이터로 응답해줄때,  .done(res에 받는다)
			})
			.done(res=>{
				console.log(res);
				console.log("이름 : ",res.username);
			})
			.fail(error=>{
				
			});
		}

	</script>
</body>
</html>