package com.cos.ajax;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/ajax1")
public class Ajax1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public Ajax1() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username=request.getParameter("username");
		String password = request.getParameter("password");
		
		System.out.println("username : " + username);
		System.out.println("password : " + password);
		
		//응답을하면 .done내용이 실행된다.
		PrintWriter out = response.getWriter();
		out.print("ok");
		out.flush();
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username=request.getParameter("username");
		String password = request.getParameter("password");
		
		System.out.println("username : " + username);
		System.out.println("password : " + password);
		
		String jsonData = "{\"username\":\"ssar\",\"password\":\"1234\"}";
		//브라우저가 응답을 받으니 어떤 데이터인지 알려줘야함
		//서버에서 데이터를 보낼때 어떤 데이터인지 알려주는거야!!.. dataType : "json"안해줘도됨
		response.setContentType("application/json"); 
		PrintWriter out = response.getWriter();
		out.print(jsonData);
		out.flush();
			
	}

}
