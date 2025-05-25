//window function


//location
//history
//navigator
//screen
//document

console.log(location);
console.log(history);
console.log(navigator);
console.log(screen);
console.log(document);








let a =10;
console.log(a);//10

console.log(window.a);//undefined

const b=10;
console.log(b);//10

console.log(window.b);//10

var c =10;
console.log(c);//10
console.log(window.c);//10

//scope


//script scope
let x =10
;
let z =20;


//function scope



function test() {
    var x = 20;
    console.log(x); // 20
    let y = 30;
    console.log(y); // 30
    const z = 40;
    console.log(z); // 40
}

test();


//block scope
{
    let x = 30;
    console.log(x); // 30
    const y = 40;
    console.log(y); // 40
    var f = 50;

}
//global scope
let y = 10;
{
    let y = 20;
    console.log(y); // 20
}






