// anonymous function it will not exicute in order to exicute is this we should use named expression functiob

// function (){
//     console.log();
    
// }

//NAMED FUNCTION
function add(x,y) {
    console.log(x+y);
    
    
}
add(4,5)


//FUNCTION WITH EXPRESSION

let a =function () {
    console.log("hiii");
    
}
a()


let b = function hey() {
    console.log("where are you");
    
    
}
b();

//ARROW FUNCTION

let func = ()=>{
 console.log("hello world");
 
}
func(); 

//Rules of arrow function

let z1 =()=>{
    return "hi"
}
console.log(z1());


let z2 = ()=>{
    console.log("hello");
    
}

z2();

let z3 =()=>
    console.log("hi");
z3()

let z4 =()=>{
    let a = 10;
    console.log(a);
    
}
z4();
    

// Immediatly invoking function exprression

(function (){
    console.log("IIFE");
    

})();

// -----------------------------------------------------------------------------------------------
(function(){
    console.log("first function");
    
})(),//if we want to exicute multiple function we should use , ;
(function () {
    console.log("second function");
    
})();

//calback function    

function a1(a2,a3) {
    a2();
    console.log("first function");
   this.a3();
    
}
function a2() {
    console.log("second Functuion")
    

}
function a3() {
    console.log("third function");
    
}
a1(a2,a3)


function fetchData(x) {

    console.log("fetching data ....");

    setTimeout(()=>{
  let data = {name:"sudeep", age:"21"}
  x(data)
    },2000)
    
    
    
}

function handelData(msg) {
    console.log("handling data",msg);
    
    
}
fetchData(handelData)


//clousure  is afunction which holds the reference variable of  previos function eventhoug the parent function is exicuted

//lexical scope 

// lixical scope is a scope which searchen a variable in the current scope if not it searches in the outer function   