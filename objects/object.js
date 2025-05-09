let obj = {
    favTeam :"MI",
    favPlayer : "Rohith Sharma",
    stadium : "Wankade"

}
//read or fetch
console.log(obj.favPlayer);

//addd properties
console.log(obj.noOfPlayers =11);
// Document.write(obj.noOfPlayers =11);
//delete

console.log(delete obj.noOfPlayers);

//update

console.log(obj.favTeam="mumbai indians");

//nested object

let mobile={
    Android :{
        Brand :"Samsung",
        ram:"4gb",
        cost:6000
    },
    iphone:{
        version :16,
        cost:60000,
        emi:false
    }
}
console.log(mobile.iphone.cost);

//empty object

let emptyObj= {
    
}
console.log(emptyObj);





//constructor new Keyword

let objestUsingNew =new Object()

console.log(objestUsingNew.branch ="rajajinagar");

//converting array
let keys = Object.keys(obj)
console.log(keys);

let values = Object.values(obj);
console.log(values);

console.log(values[2]);

let arrayObj =Object.entries(obj)
console.log(arrayObj);


let myCart = {
    productName :"Shoes",
    productId :123,
    pruductColour:"black"

}

console.log(myCart);
// let freeze  = Object.freeze(myCart)

// console.log(myCart.productPrice =1222);
// console.log(myCart);
// console.log(myCart.productId=1234);
// delete myCart.productId
// console.log(myCart);
console.log(Object.isFrozen(myCart))

Object.seal(myCart)
console.log(myCart.productPrice =1222);
console.log(myCart);
console.log(myCart.productId=1234);
console.log(myCart);
delete myCart.productId
console.log(myCart);

console.log(Object.isSealed(myCart));

//function inside the object is called as method


let obj3 ={
  
     what :"welcome",
  name :function () {
    console.log(`${obj3.what} sudeep`);
    console.log(`${this.what} sudeep`);
    
    
  }
}

obj3.name();


//math Object

let math = Math;
console.log(math,typeof math);

console.log(math.ceil(100.1));//101
console.log(math.ceil(100.8));//101
console.log(math.floor(100.9));//100
console.log(math.floor(100.2));//100
console.log(math.max(100,200));//200
console.log(math.min(30,12,19));//12
console.log(math.random());// genearate random number between o to 9
console.log(math.random() *100);//0 to 100;
console.log(math.floor(math.random()*199));
console.log(10000+math.floor(math.random()*99999).toString(26));
console.log((10000+math.floor(math.random()*99999)).toString(30));


//date Object 

let date = new Date();
console.log(date,typeof date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth);
console.log(date.getTime());
console.log(date.getSeconds());


//set the date
let newDate= new Date(2025,4,1,3,10,3)
console.log(newDate);



//time object 

setTimeout(()=>{
    console.log("hiiii ");
    
},2000);

// setInterval(()=>{
//     console.log("helloo");
    
// },2000)


//object Distructuring 

let person = {
    name :" sudeep",
    rollNo:123,
    person2 : {
        name1:"sandeep",
        rollNo1:23
    }
}

let {name, rollNo,person2:{name1,rollNo1} }= person;


// let {name, rollNo }= person;
console.log(name);
console.log(name1);


//passing object as an argument

// function name({name ,rollNo, person2:{name1,rollNo1}}) {
//     console.log(`hi ${name} my rollNo is ${rollNo} my another name is ${name1} my rollNo is ${rollNo1}`)
    
// }


// name(person)





















