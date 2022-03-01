package com.cos.blog.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/test")
public class ApiServerTest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ApiServerTest() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String mime = request.getContentType();
		System.out.println(mime); //application/json 출력됨
		request.setCharacterEncoding("UTF-8");
		
		if(mime.equals("application/json")) {
			//request에 있는걸 getReader()할때 UTF-8로 읽게해야함
			BufferedReader br = request.getReader();
			String input;
			StringBuffer buffer = new StringBuffer();
			while((input=br.readLine())!=null) {
				buffer.append(input);
			}
			System.out.println("버퍼 : " + buffer.toString());
		}else {
			String food = request.getParameter("food");
			String method = request.getParameter("method");
			System.out.println("food : " + food);
			System.out.println("method : " + method);
		}
		
		//받고 DB에 insert하면 됨
		int result=1; //정상
		PrintWriter out = response.getWriter();
		out.println(1);
		out.flush();
	}

}
