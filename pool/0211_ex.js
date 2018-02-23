

//JSOOP(廖雪峰)探索验证...
function ex_02112(){
    /**
     * 【正解区】
     * 首先，do方法不是原型链上的。
     * 
     * 【解决一：将do绑定到Mmm.prototype（Mmm构造函数原型对象）上，对..就是Object，上！】
     * 【解决二：将Mmm构造函数在Nnn构造函数里面重新跑一遍】
     */
    /**
     * 想构造一个“5节点原型链”： n（实例）--Nnn.prototype（第二层）-- Mmm.prototype（第一层）-- Object.prototype -- null
     */
    //构造函数 Mmm(第一层)
    //【正解区】：do确实是在Mmm(构造函数)上，但它没有在原型链上（也就是Mmm.prototype 原型对象上)
    function Mmm(){
        this.name = 'MMM';
        this.age = 18;
        this.do = function(){console.log("DO!!");}
    }

    var mmm = new Mmm();
    mmm.do(); //输出 DO!! [第一层，没问题] 

    //【1】将do绑定到Mmm.prototype（Mmm构造函数原型对象）上
    // Mmm.prototype.do = function(){console.log("DO!!");}

    //构造函数 Nnn(第二层) 它的原型对象是Mmm
    function Nnn(){
        //【2】将Mmm构造函数在Nnn构造函数里面重新跑一遍
        Mmm.call(this);
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
    //以下 所谓的“修正”，没有必要！
    //也就是说  >>>>  F空函数的加入/操作，没有对Nnn.prototype.constructor指向产生影响
    Nnn.prototype.constructor = Nnn;

    //然鹅，并没有什么X用。【。。。好了好了..】
    var nnn = new Nnn();
    nnn.do();//报错！！。。。do方法没有继承过来...【按照新方法，不会报错了！】
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