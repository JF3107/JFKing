










// LET 0 
function accu1(){
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
