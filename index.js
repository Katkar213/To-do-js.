// page 1
let parent=document.getElementById("parent1");
let addpopup=document.getElementsByClassName("addpopup");
let addpopup2=document.getElementsByClassName("addpopup2");
let count=0;


function addnewtask(){
    parent.setAttribute("class","parent");
    console.log("hii");
    addpopup[0].classList.add("show");
    console.log("hii2");

    if(count>=1){
        parentcard.classList.add("parent");
    }
}

// page 2

let input=document.querySelector("#input");
let parentcard=document.createElement("div");
let body=document.querySelector("body");
body.appendChild(parentcard);


// adding child cards

function add(){
    // pop up box removed
let addpopup=document.getElementsByClassName("addpopup");
addpopup[0].setAttribute("class","addpopup hide");
count++;
parent.classList.remove("parent");

// // Initial heading removed
   let noItemHeading=document.getElementsByClassName("initial");
   noItemHeading[0].classList.add("hide"); 

// creating flex container
parentcard.classList.remove("parent");
parentcard.classList.add("parent2");
parentcard.setAttribute("id","show");


// Creating card and connecting classes
   let newCard= document.createElement("div");
   newCard.classList.add("newtask");

   let Title=document.createElement("h1");
   Title.innerText=input.value;
   Title.style.color="yellow";
   Title.style.marginLeft="30%";

   let heading=document.createElement("hr");
   let innerdiv=document.createElement("div");
   let addbtn2=document.createElement("button");
   let deletebutton=document.createElement("button");
   addbtn2.innerText="Add";
   addbtn2.classList.add("btnposition");
   deletebutton.innerText="Delete";
   deletebutton.classList.add("btnposition");
  
//newCard.appendChild("")

newCard.appendChild(Title);
newCard.appendChild(heading);
newCard.appendChild(innerdiv);
newCard.appendChild(addbtn2);
newCard.appendChild(deletebutton);
parentcard.appendChild(newCard);

let addpopup2=document.getElementsByClassName("addpopup2");


addbtn2.addEventListener(("click"),()=>{
    addpopup2[0].style.display="block";
    console.log("hii2");
    parent.setAttribute("class","parent");
    parentcard.classList.add("parent");
     
   

 })


// creating second popup box
let input2=document.getElementById("input2");
let Addbutton2=document.getElementsByClassName("Addbutton2")
let closebutton2=document.getElementsByClassName("closebutton2")


Addbutton2[0].addEventListener("click",()=>{
let title2=document.createElement("h3");
innerdiv.appendChild(title2);
title2.innerText=input2.value;
addpopup2[0].style.display="none";
parent.classList.remove("parent");
parentcard.classList.remove("parent");
newCard.style.height="auto";
})


closebutton2[0].addEventListener("click",()=>{
    addpopup2[0].style.display="none";
    parent.classList.remove("parent");
    parentcard.classList.remove("parent");
   

})


deletebutton.addEventListener(("click"),()=>{
    newCard.remove();
})








// adding subtitle and mark done button.




}



function remove(){
    let addpopup=document.getElementsByClassName("addpopup");
    addpopup[0].setAttribute("class","addpopup hide");
    parent.classList.remove("parent");
    parentcard.classList.remove("parent");
    

}
