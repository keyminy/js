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
	<button onclick="getajax()">클릭</button>
	<script>
		
		function getajax(){
			$.ajax({
				type:"GET", //기본전략이 get임
				url:"http://localhost:8082/DareAjax/ajax1?username=ssar&password=1234",
				dataType:"text" //목적 : 파싱해주는것
				//자바에서 json데이터로 응답해줄때,  .done(res에 받는다)
			})
			.done(res=>{
				alert(res);
			})
			.fail(error=>{
				
			});
		}

	</script>
</body>
</html>