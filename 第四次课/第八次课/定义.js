//类的定义
//rest 参数
/* function point(x,y){
    console.log(x);
    console.log(y);
}
point(1,2) */
//如果带默认值
/* function point2(x,y=99){
    console.log(x);
    console.log(y);
}
point2(1)
point2(1,2)
 */

//rest参数
/* function point3(...x){
    console.log(x)
}

point3(2,3,45) */

/* function point4(a,b,c,...d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
point4(1,2,3,4,5,6,7,8) */

//补充：数组里的方法
//shift 方法
/* let arr=[1,2,3,4,5,6,7,8];
let result = arr.shift();
console.log(result)
console.log(arr) */

//unshift方法 类似push 方法 push pop
/* let arr2=[1,2,3,4,5,6,7,8,9];
let result2 = arr2.unshift(9);
console.log(result2);
console.log(arr2) */

/* let obj2={
    name:"zhangsan",
    age:20,
    address:function address(){
        console.log("this is address")
    },
    score(){
        console.log("this is score")
    }
} */

//类的定义
/* function Point(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}
Point.prototype.print = function () {
    console.log(this.x);
    console.log(this.y);
    console.log(this.z);
}

//用es6 class 类的关键字重写
class Point5 {
    //构造函数
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    print() {
        console.log(this.x);
        console.log(this.y);
        console.log(this.z);
    }
}

let obj5 = new Point5(20, 30, 50)
obj5.print();

function Point6(x, y, ...rest) {
    this.x = x;
    this.y = y;
    this.z = rest;
}
Point6.prototype.print = function () {
    console.log(this.x)
}
Point6.prototype.printY = function () {
    console.log(this.y)
}
Point.prototype.print = function () {
    console.log(this.z)
}

class Point7 {
    constructor(a,b,...c) {
        this.a = a;
        this.b = b;
        this.c = rest;
    }
    printA() {
        console.log("this is print a")
    }
    printB() {
        console.log("this is print b")
    }
    printC() {
        console.log("this is print c")
    }
} */

//==和=== 和Object.is()
/* console.log(1==1)
console.log('1'==1)
console.log(1===1)
console.log('1'===1)
console.log(+0 == -0)
console.log(+0 ===-0) */
/* console.log(null == undefined)
console.log(null === undefined)

console.log(Object.prototype.__proto__)

//NaN not a number 不是一个数字 数值
console.log(2/"a") */

var a = 12;
var b ='a';
function sum(a,b){
    if(isNaN(b)||(typeof b =="boolean")){
        console.log("wrong")
        return
    }
    return a+b
}
console.log(sum(12,23))
console.log(sum(12,'a')) 
console.log(sum(12,true))
console.log(sum(12,false))

