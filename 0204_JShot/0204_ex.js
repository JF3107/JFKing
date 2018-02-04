

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() { alert(this.name) } 
}
var person1 = new Person('Zaxlct', 28, 'Software Engineer');
var person2 = new Person('Mick', 23, 'Doctor');







//闭包 example2
function ex02042(){
    function a(){
        var n = 0;
        function cnt(){
            n++;
            console.log(n);
        }
        return cnt;
    }
    var cc = a();
    cc();
    cc();
}
//闭包 example2
function ex02043(){
    function a(){
        var n = 0;
        this.cnt = function(){
            n++;
            console.log(n);
        };
    }
    
    var aa = new a();
    aa.cnt();
    aa.cnt();
}
//IIFE
function ex02041(){
    //函数声明(表达式)
    function a() {
        console.log("UNI 必胜！");
    }
    // a();

    //函数定义(表达式)
    (function () {
        console.log("UNI 必胜！3b");
    }())
}