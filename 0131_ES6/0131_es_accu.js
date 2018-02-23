

function C2_let_2 (){
    /**
     * 解释一下for-let模型：
     * i，子作用域沿用父作用域，每一轮都是一个重新生成的值！（var 那个每一轮是上一个值+1）
     * 子作用域中的i被a[i] = function记录到数组a的相应位置、以变量(参数)+函数形式保存。for循环完毕、跳出，i失效，但i作为参数
     * 存在于function中的这个事实没有改变，当这个a[i]()在外传了i参数进行调用时，仍然可用。
     * 
     * 然后，如果以下循环 var声明，则是这个情况：
     * 每一个i（0、1、2、....）作用的时候 a[0]、a[1]、a[2]、...被定死，而其后的i（由var声明）没有被定死（是个变量）
     * 当for循环结束，要开始调用a[6]时（其实a[6]（作为a[]数组的第7个元素）已经有这个函数，但是里面的i还没定）
     * 所以，一旦调用，i就需要赋值。i由var声明，至今没有失效、并可在代码块/for循环体外使用，当前i的值是：10
     * so，   10！
     */
    var a = [];
    for (var i = 0; i < 10; i++) {
        // console.log(i);
        a[i] = function () {
            console.log(i);
        };
        // a[i]();
        // console.log(a);
    }
    a[6](); // 10
    /**
     * for的“循环变量设置区”是父作用域、循环体是子作用域。
     * 就let而言：
     *   当子作用域（循环体）中没有新的let i声明，那体中的i就沿用父作用域的；
     *   若子作用域中有新的let i声明，那么：①在这个声明前运用i将报错 ②父作用域失效改由子作用域中声明的i来担当
     * 就var而言：
     *   没啥好说，父作用域中声明了var i，在全局都是可以调用的（即使  出了for范围/for循环结束  依然可用！）
     */
    // for (let i = 0; i < 3; i++) {
    //     let i = 'abc';
    //     console.log(i);
    // }

    //C2盾构中...
    function C2_let_1(){
        {
            let a = 1;
            var b = 2;
            console.log("HELLO WORLD, +"+a);
            console.log("HELLO WORLD B, +"+b);
        }
        // console.log("HELLO WORLD 2, +"+a);
        console.log("HELLO WORLD 2B, +"+b);
        
        for(var i=0;i<3;i++){
            console.log("Thermo KING, >>"+i);
        }
        console.log("Thermo KING, >>"+i); //3  变量i泄漏到循环体外，并+1
        
        for(let j=0;j<3;j++){
            console.log("Thermo KING, >>"+j);
        }
        console.log("Thermo KING, >>"+j);//变量j不会泄漏！...这里报错
    }
}


// LET 0 
function pre_C2(){
    // let 2
    // console.log(i);//把i提到for上面，也是一样报错（等同于提出语句块）
    for(let i=1;i<5;i++){
        console.log(i);
    }
    //let 1 log(a)放在let之上，就报错。
    {
        let a = 1;
        console.log(a);
    }
}
