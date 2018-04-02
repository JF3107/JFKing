<%@ page language="java" contentType="text/html; charset=utf-8"%> 
<%@ page import = "matrix.db.*, matrix.util.* ,com.matrixone.servlet.*, java.util.*,java.io.*,com.matrixone.apps.domain.util.*" %>
<%
	String sSelectIds = com.matrixone.apps.domain.util.Request.getParameter(request, "emxTableRowId");
	System.out.println("--------------emxTableRowId:" + sSelectIds);
%>
<script src="/3dspace/common/scripts/jquery-1.9.1.js"></script>
<html>
<head>
<script src="/3dspace/common/scripts/emxUICore.js"></script>
<script>
    getTopWindow().close();
</script>
<script>
	$(function () {
		$.ajax({
            type: "GET",
            dataType: "json",
            url: "programs.jsp" ,//url
            success: function (result) {
                console.log(result);
                alert("SUCCESS");
            },
            error : function(e,r,a) {
                alert("异常！");
            }
        });
		$.ajax({
            type: "GET",
            dataType: "json",
            url: "parts.jsp" ,//url
            success: function (result) {
                console.log(result);
                alert("SUCCESS");
            },
            error : function(e,r,a) {
                alert("异常！");
            }
        });
	})
</script>
</head>
	
<!-- //XSSOK -->
<body >
<h1>TEST</h1>
<jsp:include page="inlayingJsp.jsp" flush="true"/>
<a href="/3dspace/common/emxFullSearch.jsp?field=TYPES%3Dtype_Part&table=ENCGeneralSearchResult&excludeOIDprogram=enoECMChangeRequest%3AnioBSDExcludeConnecAffectedItem&selection=multiple&submitAction=refreshCaller&hideHeader=true&HelpMarker=emxhelpfullsearch&submitURL=/3dspace/NIO/BSD/Test.jsp%3FrelName%3Drelationship_NioBSDAffectedItem&from=true&suiteKey=ProductLine&StringResourceFileId=emxProductLineStringResource&SuiteDirectory=productline&objectId=51456.32231.37120.50942&parentOID=51456.32231.37120.50942&widgetId=null" onclick="window.open(this.href,    '_blank',    'scrollbars=0,resizable=0,height=800,width=1200');return    false">Search Part</a>
</body>
</html>