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


let tags = document.getElementsByTagName("div");
let subBtn = document.getElementById("submit");

subBtn.addEventListener('click', () => {
  let un = document.getElementById("un").value;
  let pwd = document.getElementById('pwd').value;
  console.log(un, pwd.value);
  tags[0].innerHTML = ` username = ${un} && password = ${pwd}`;
});
