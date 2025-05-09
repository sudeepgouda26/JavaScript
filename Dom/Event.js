// function demo() {
//     document.body.style.backgroundColor= "blue"
    
// };

// let btn = document.getElementById('btn');
// btn.onclick =()=>{
//  alert("button in clicked")
// } 

// let AllBtn = document.querySelectorAll('button');
// AllBtn[3].addEventListener('click', ()=>{
//     alert("hey hello hii")
// })

let un =document.getElementById("un");
let pwd =document.getElementById('pwd');

console.log(un ,pwd);
let tags =  document.getElementsByTagName("div");
let subBtn = document.getElementById("submit");

subBtn.addEventListener('click',()=>{

 
  tags[0].innerHTML=` username = ${un.value} && password = ${pwd.value}`
})
