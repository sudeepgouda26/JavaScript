let myArray = [10,20,"string",true,undefined,null,[],function name(params) {
    
}]

console.log(myArray);

//another way to create array 
let newArray = new Array(10,23,"hello")
console.log(newArray);

//type pf array is object

console.log(newArray , typeof newArray);

//fetching
console.log(myArray[3]);

//adding array element in last

console.log(myArray.push("hello"));
console.log(myArray);

//adding element in starting
console.log(myArray.unshift("hii"));
console.log(myArray);

//deleting
console.log(delete myArray[5]);
console.log(myArray);

//deleting from the last
console.log(myArray.pop());
console.log(myArray);

//deleting from start
console.log(myArray.shift());
console.log(myArray);
//finding length of an array
console.log(myArray.length);



//finding index of an element
console.log(myArray.indexOf(20));
console.log(myArray.indexOf("hello"));


//finding last index of an element
console.log(myArray.lastIndexOf(20));
console.log(myArray.lastIndexOf("hello"));

//mapping an array
let mapArray = myArray.map((element) => {
    return element + 1;
})

console.log(mapArray);

//filtering an array
let filterArray = myArray.filter((element) => {
    return element > 20;
})
console.log(filterArray);

//reducing an array
let reduceArray = myArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
console.log(reduceArray);

//flat

let arrayel =[10,20,[2000,[0,1,2],1000],89]
console.log(arrayel.flat(2))

//some and every

let sA = arrayel.some((x)=>{
    return x>20;
})
console.log(sA);


let SE = arrayel.every((a)=>{
    return a >30;
})
console.log(SE);


//find

let findEl = arrayel.find((x)=>{
    return x>28
})
console.log(findEl);


//find Index

let findIndex = arrayel.findIndex((x)=>{
    return x >35;
})
console.log(findIndex);



//destructuring array

let  [a,b,c,d]=arrayel;
console.log(`${a} , ${b}, ${c}, ${d}`)











