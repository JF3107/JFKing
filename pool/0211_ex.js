






//JSOOP(廖雪峰)探索验证...
function ex_02112(){
    /**
     * 想构造一个“5节点原型链”： n（实例）--Nnn.prototype（第二层）-- Mmm.prototype（第一层）-- Object.prototype -- null
     */
    //构造函数 Mmm(第一层)
    function Mmm(){
        this.name = 'MMM';
        this.age = 18;
        this.do = function(){console.log("DO!!");}
    }

    var mmm = new Mmm();
    mmm.do(); //输出 DO!! [第一层，没问题] 

    //构造函数 Nnn(第二层) 它的原型对象是Mmm
    function Nnn(){
        this.nnname = 'NNN';//仅增添一个属性
    }

    //开始按照廖雪峰老师的思路（参见《廖雪峰javascript教程》面向对象编程-原型继承）
    /**
     * STEP1   先建立空函数F
     * STEP2   F.prototype指向第一层prototypa
     * STEP3   再把第二层prototype指向new F() 
     * STEP4   最后“修复”第二层原型对象的构造函数属性为第二层构造函数本身
     * （虽然我到现在没搞懂 最后为什么要“修正”。。。）
     */
    function F(){}

    F.prototype = Mmm.prototype;
    Nnn.prototype = new F();
    Nnn.prototype.constructor = Nnn;

    //然鹅，并没有什么X用。
    var nnn = new Nnn();
    nnn.do();//报错！！。。。do方法没有继承过来...
}

//廖雪峰 JSOOP 探索/验证
function ex_02111(){
    console.log("START >>");

    var student = {
        name: "robot",
        height: 1.2,
        run: function(){
            console.log("RUNING...");
        }
    }

    var xiaoming = {
        name: "xiaoming"
    }

    xiaoming.__proto__ = student;

    xiaoming.run();
}