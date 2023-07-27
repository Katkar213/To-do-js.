
let parent=document.getElementById("parent1");
let addpopup=document.getElementsByClassName("addpopup");

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
let parentCard2=document.getElementById("parentCard2");
let header2=document.getElementsByClassName("header2");
let blank=document.getElementById("blank");
const back1=document.getElementById("back");
let header1=document.querySelector("header");


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
    console.log("hii2");
    parent.setAttribute("class","parent");
    parentcard.classList.add("parent");
    createItempopup(innerdiv);
    newCard.style.height="auto";


 })


 function createItempopup(innerdiv){
    let title2=document.createElement("h3");
    innerdiv.appendChild(title2);
  
    
        let body = document.querySelector("body");
        let addpopup2 = document.createElement("div");
        addpopup2.classList.add("addpopup2");
        addpopup2.style.display = "block";
        let tittle3 = document.createElement("h2");
    
        tittle3.innerText = "Add the  List";
        let input3 = document.createElement("input");
        title2.innerText=input3.value;
        input3.setAttribute("id", "input2");
        title2.innerText = input3.value;
        let Add2 = document.createElement("button");
        Add2.classList.add("Addbutton2");
        Add2.classList.add("btn2");
        Add2.innerText = "Add";
        let close2 = document.createElement("button");
        close2.classList.add("closebutton2");
        close2.classList.add("btn2");
        close2.innerText = "close";
    
        body.appendChild(addpopup2);
        addpopup2.appendChild(tittle3);
        addpopup2.appendChild(input3);
        addpopup2.appendChild(Add2);
        addpopup2.appendChild(close2);
    
        Add2.addEventListener("click", () => {
          title2.innerText = input3.value;
          addpopup2.style.display = "none";
          parentcard.classList.remove("parent");
          parent.classList.remove("parent");
          var markdone = document.createElement("button");
        //   newCard.append(markdone);
        //   markdone.innerText = "x";
        //   markdone.style.marginLeft = "10px";
        //   markdone.classList.add("inline");
        });
        close2.addEventListener("click", () => {
            addpopup2.remove();
          parentcard.classList.remove("parent");
          parent.classList.remove("parent");


        });
      }
      deletebutton.addEventListener(("click"),()=>{
        newCard.remove();
    })

    Title.addEventListener("click",()=>{
       parentcard.style.display="none";
       parentCard2.style.display="block";
       parentCard2.appendChild(newCard);
       newCard.style.position="relative";
       newCard.style.left="40%";
       header2[0].style.display="block";
       header1.style.display="none";
       blank.innerText=Title.innerText;
    // console.log(Title.innerText);
    blank.style.color="yellow";
    })


    back1.addEventListener("click",()=>{
       Backbutton();
    })

    function Backbutton(){ 
        console.log("hello2");
        parentCard2.style.display = "none";
        parentCard2.removeChild(newCard);
        parentcard.appendChild(newCard);
        parentcard.style.display = "flex";
        parentcard.style.flexDirection = "row";
        parentcard.style.justifyContent = "space-between";
        header2[0].style.display = "none";
        header1.style.display="flex";

    
    }
    }



// creating second popup box






// closebutton2[0].addEventListener("click",()=>{
//     addpopup2[0].style.display="none";
//     parent.classList.remove("parent");
//     parentcard.classList.remove("parent");


// })










// adding subtitle and mark done button.








function remove(){
    let addpopup=document.getElementsByClassName("addpopup");
    addpopup[0].setAttribute("class","addpopup hide");
    parent.classList.remove("parent");
    parentcard.classList.remove("parent");


}