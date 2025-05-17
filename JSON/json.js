let a = 
{
    id: 1,
    name:"abc"
}
console.log(a);


let b = JSON.stringify(a)//client to server side
console.log(b);
console.log(typeof b);


let c = JSON.parse(b)// serever side to client side
console.log(c);
console.log(typeof c);

