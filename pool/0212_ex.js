

//关于new、return，对构造函数的研究。
function ex_02121(){
    /**
     * 关于new、return！
     */
    function Test1(str) {
        this.a = str;
        return {"aaa":"AAA", "bbb":123}  //返回 {"aaa":"AAA", "bbb":123}
        // return new Number(123);     //返回 Number对象（123）
        // return new String("123");    //返回 Number对象（"123"）
        // return new String(this.a);  //返回 String对象（"test1"）
        // return str;  //返回this，即Test1 {a: "test1"}
        //return 123    //返回this，即Test1 {a: "test1"}
        //无rerun   >> //返回this，即Test1 {a: "test1"}
    }
    var myTest = new Test1("test1");
    console.log(myTest); 
}