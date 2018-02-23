




//验证变量自动转全局、变量全局污染..
function ex02172(){
    var a;
    var b = 1;
    // var c;
    function veri_abc(){
        a = 2;
        b = 2;
        c = 2;
    }
    veri_abc();//首先，必须跑一下函数作用域！
    console.log(a);//2   >> 证明“污染全局变量”-A
    console.log(b);//2   >> 证明“污染全局变量”-B
    console.log(c);//2   >> 证明“自动转全局变量”
}

//立即执行函数（IIFE），可以return、可以赋值给变量。
//X  暂未观察到：return使用IIFE内变量的函数，SO，用完即销毁。
//K  存在：return使用IIFE内变量的函数。最基本JS模块写法。SO，用完私有的（没return出去的）变量函数即销毁
function ex02171(){
    var a = (function a (){
        console.log("aaaa");
        return "dsd";
    })();
    console.log(a);
}