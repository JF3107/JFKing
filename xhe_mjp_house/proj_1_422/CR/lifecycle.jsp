<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> NIO-lifecycle </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="../src/dist/css/ystep.css">
    <link rel="stylesheet" href="../src/dist/css/lifecycle.css">
    <link href="../src/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <script src="https://cdn.bootcss.com/jquery/2.2.3/jquery.min.js"></script>
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<header>
    <div class="logoImg"><img src="../src/dist/img/logo-black.jpg" alt=""></div>
    <div class="headerMiddle">
        <p class="headerTitle">
            ENGINEERING CHANGE NOTIFICATION
            <br>
            <span>DOCUMENT AUTHORISES SUPPLIER KICK-OFF</span>
        </p>
    </div>
    <div class="headerInfo">
        CA No.122839
    </div>
</header>
<div class="cycleTitle">
    流程 LIFECYCLE
</div>
<div class="content">
    <div class="cycleContent">
        <div class="ystep"></div>
    </div>
    <!--表格-->
    <table class="table table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Order</th>
            <th>Revision</th>
            <th>State</th>
            <th>Assignee</th>
            <th>Action</th>
            <th>Approval Status</th>
            <th>Due Date</th>
            <th>Comment</th>
            <th>Completed Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>IT-00998852</td>
            <td>PLM</td>
            <td>1</td>
            <td>1</td>
            <td>complete</td>
            <td>Calvin</td>
            <td>Approve</td>
            <td>Approve</td>
            <td>11/08/2017</td>
            <td>意见意见意见意见意见意见意见</td>
            <td>11/08/2017</td>
        </tr>
        <tr>
            <td>IT-00998852</td>
            <td>PLM</td>
            <td>1</td>
            <td>1</td>
            <td>complete</td>
            <td>Calvin</td>
            <td>Approve</td>
            <td>Approve</td>
            <td>11/08/2017</td>
            <td>意见意见意见意见意见意见意见</td>
            <td>11/08/2017</td>
        </tr>
        <tr>
            <td>IT-00998852</td>
            <td>PLM</td>
            <td>1</td>
            <td>1</td>
            <td>complete</td>
            <td>Calvin</td>
            <td>Approve</td>
            <td>Approve</td>
            <td>11/08/2017</td>
            <td>意见意见意见意见意见意见意见</td>
            <td>11/08/2017</td>
        </tr>
        </tbody>
    </table>
</div>




<script src="../src/dist/js/ystep.js"></script>
<script>
  $(".ystep").loadStep({
    steps:["Create","Evaluate","In<br>Review","In<br>Process",'Release'],
    step: 3
  });
  $(".ystep").setStep(3);

</script>
</body>
</html>