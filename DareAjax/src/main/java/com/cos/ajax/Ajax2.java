package com.cos.ajax;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


@WebServlet("/ajax2")
public class Ajax2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public Ajax2() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//json데이터 받기위해 버퍼로 원형데이터를 받기
		BufferedReader br = request.getReader(); //http의 body데이터를 순수하게 읽기
		//request.getParameter는 데이터를 파싱해서 읽는것이다.
		String requestData = br.readLine();
		System.out.println(requestData);
		//{"username":"ssar","password":"1234"} json데이터 출력됨
		
		//이거를 dto로 받기 GSON라이브러리
		Gson gson = new Gson();
		//gson.fromJson() => json을 자바 오브젝트로
		//gson.toJson() => 자바 오브젝트를 json으로
		UserDto userDto = gson.fromJson(requestData, UserDto.class);
		//<UserDto> UserDto com.google.gson.Gson.fromJson(String json, Class<UserDto> classOfT) throws JsonSyntaxException
		
		System.out.println(userDto);
		//결과 : UserDto [username=ssar, password=1234]
		//짱신기한거당..

		//응답하기 부분
		User user = new User();
		user.setId(1);
		user.setUsername("love");
		user.setPassword("1234");
		user.setPhone("01012345678");
		
		String userJson = gson.toJson(user);
		System.out.println("userJson : " + userJson);
		//userJson : {"id":1,"username":"love","password":"1234","phone":"01012345678"}
		PrintWriter out = response.getWriter();
		//스프링 이였으면 gson.toJson(user)없이 out.print(user);이 부분만으로...
		//UserDto [username=ssar, password=1234]와같은 자바 객체를 json으로 응답해서 파싱함
		out.print(userJson);
		out.flush();
	}

}
