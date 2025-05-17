// let prom  = new Promise((resolve,reject )=>{
//     isShashankSirisMarried =true;

//     if(isShashankSirisMarried){
//         resolve("yes")
//     }else{
//         reject("no")
//     }
// })

// console.log(prom);

// prom.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


let qoates = new Promise((resolve, reject) => {
    fetch("https://countries-api-abhishek.vercel.app/countries")
        .then(response => {
            if (!response.ok) {
                reject("Network response was not ok");
            } else {
                return response.json();
            }
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});
// console.log(qoates);

qoates.then((data) => {
    console.log(data.message);
}).catch((err) => {
    console.log(err);
});


// function login(un,pass) {

//     return new Promise((resolve,reject)=>{
//         if(un =="john" && pass ==123){
//             resolve("login succesfully")
//         }else{
//             reject("login failed")
//         }
//     })
    
// }
// let state =login("john",123);


// state.then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


fetch("https://countries-api-abhishek.vercel.app/countries").then((res)=>{
    return res.json().then((data)=>{
        console.log(data);
    })
})


async function getData() {
  let data = await fetch("https://countries-api-abhishek.vercel.app/countries");
  let res = await data.json();
  console.log(res.data[0].name);
  
}
getData();