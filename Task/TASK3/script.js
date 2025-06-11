let text = document.getElementById("text");
let play = document.getElementById("play");

play.addEventListener('click', ()=>{
    max(text.value)
})

function max(lio){

    let data = new SpeechSynthesisUtterance(lio);

    speechSynthesis.speak(data)


}

let obj1 = {
    name : "sudeep"
}

let obj2= {
 place : "bengaluru"
}


obj1.__proto__ =obj2;