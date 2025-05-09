// let num  =1;
// console.log(num , typeof(num));

// let num1  = 10.123;
// console.log(num1, typeof(num1));
// let num3 = 106783.7483;
// console.log(num3.toFixed(2));


// console.log(Number.MAX_SAFE_INTEGER); // to find the maximum value of integer
// console.log(Number.MIN_SAFE_INTEGER); // to find the minimum vale of the integer

// console.log(Number("hi"));

// console.log(Number('10'));


// console.log(Number(true));
// console.log(Number(false));

// console.log(Number(100n));



// let shoesprice = 1087325.7675;

// console.log(shoesprice.toFixed(2)); // to fixed method to round the decimal vale

// let a   = shoesprice.toString(); //to convert number to String
// console.log(a, typeof a);

// let b =102.123;
// console.log(Number.parseInt(b));  // to use only Integer

// console.log(Number.parseFloat(b)); // we will get only float value

// //isNaN 


// let c = Number("10a");
// console.log(Number.isNaN(c));

// let d = Number(10);
// console.log(Number.isNaN(d));

// //template String it is also called as interpolasion it only works with bacticks (``)

// let name = "uma";
// let age = 18;


// console.log(`hey ${name} you are now ${age} years old`); 



// //String Methods 

// let str = "Hello World";

// console.log(str.split("").reverse().join(""));

// console.log(str.length);


// // what is the difference between charAt and at 

// // charAt method wii not accept -value
//  // at method will accept and it willl print from the reverse
// console.log(str.charAt(1));

// console.log(str.at(1));

// console.log(str.charAt(-1));//nothing will exicuet

// console.log(str.at(-1));//d

// console.log(str.indexOf('o'));
// console.log(str.lastIndexOf('o'));

// console.log(str.startsWith('h'));
// console.log(str.endsWith('d'));
// console.log(str.concat(str));
// console.log(str.slice(3,9));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());


//boolean

let a1  = Boolean(-100);
console.log(1=="1");
console.log(100+"naveen" === "100"+ "naveen");
console.log("0" ===false);
console.log(0 ===false);

console.log(null + 10);

console.log(10>2<1);
console.log(null + 100 ==100);

console.log(null + null ===0);

let  z1 = false;
let z2 = 0;
let z3 = "0";

console.log(z1 ==z2);
console.log(z2 ==z3 == z1);
console.log(null + null ===0);


//bigInt
let bigNumbers = 100n;
console.log(bigNumbers, typeof bigNumbers);
let bigNumber = BigInt(false);

console.log(bigNumber, typeof bigNumber);
console.log(10>9 == 100>99);




//undefined
let myvar;
console.log(myvar,typeof myvar);

//null 
let a2 =[10,20,30,40];
console.log(a2);

a2 = null ;
console.log(a2);

let x =null ;
console.log(x, typeof x);

let  p =10;
let  q =null;
console.log(p);
console.log(q);
q =100;
console.log(q);
console.log(p);









































