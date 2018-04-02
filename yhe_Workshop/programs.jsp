<%@ page language="java" contentType="text/html; charset=utf-8"%> 
<%@page import="com.matrixone.json.JSONArray"%>
<%@page import="com.matrixone.servlet.Framework"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="matrix.db.Context"%>
<%@page import="matrix.db.JPO"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>

<% 
PrintWriter print = null;
	try {
 		Context cxt = Framework.getFrameContext(request);
 		List programList = new ArrayList();
 		String programs = JPO.invoke(cxt,"NioBSDService",null,"getBsdData",null,String.class);
 		System.out.println("*****************object:" + programs);
 		JSONArray json = new JSONArray(programs);
		print = response.getWriter();
		print.write(json.toString());
		print.flush();
	}catch (Exception e) {
		e.printStackTrace();
	}
	
%>