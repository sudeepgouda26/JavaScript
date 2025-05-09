
//USING THE ID IF WE HAVE SAME NAME  WE CAN ONLY TARGET ONLY FIRST ID 
let id = document.getElementById("demo");
console.log(id);

id.style.color="Red";
id.style.backgroundColor="Black"
id.style.fontSize="2vw"

id.innerHTML="Statting with Dom";
id.innerText="Dom Functionality";
id.textContent="HEllo World"

//// THEY ARE IN THE FORM OF HTMLCOLLECTION TO TARGET INDIVIDUL ELEMNT WITH THE SAME cLASSNAME WESHOULD USE INDEX
let cls =document.getElementsByClassName("test")
console.log(cls);

cls[3].innerHTML= "<b> helllo guys<b>"
cls[3].style.fontSize="3vw"


//// THEY ARE IN THE FORM OF HTMLCOLLECTION TO TARGET INDIVIDUL ELEMNT WITH THE SAME TAGNAME WESHOULD USE INDEX
let tags = document.getElementsByTagName("article");
console.log(tags);

tags[2].innerHTML=" article you write here"
tags[2].style.fontSize="3VW"



//IT IS NOT ARRAY

console.log(Array.isArray(tags));



//QUERY SELECTOR
//// THEY ARE IN THE FORM OF NODELIST TO TARGET INDIVIDUL ELEMNT WITH THE SAME cLASSNAME WESHOULD USE INDEX

//QUERY SELECTOR WILL TARGET FIRST ELEMENT IN THE DOCUMENT AND ONLY ONE ELEM
let btn = document.querySelector('button')
console.log(btn);


let AllBtn = document.querySelectorAll('button')
console.log(AllBtn);
AllBtn[1].innerHTML='Login'


let sectionel = document.createElement('section');
sectionel.className='demo1';
sectionel.id='test2'
console.log(sectionel);


sectionel.innerHTML= "Section elements"
let headings = document.createElement("h2");
console.log(headings);


headings.innerHTML="heading"

sectionel.append(headings)
console.log(sectionel);

document.body.append(sectionel)



