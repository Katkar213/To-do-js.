
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
   Title.style.marginLeft="40%";

   let heading=document.createElement("hr");
   let innerdiv=document.createElement("div");
   let addbtn2=document.createElement("button");
   let deletebutton=document.createElement("button");
   addbtn2.innerText="Add";
   addbtn2.classList.add("btnposition");
   addbtn2.classList.add("add1");
   deletebutton.innerText="Delete";
   deletebutton.classList.add("btnposition");
   deletebutton.classList.add("delete");

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
  
     // creating second pop up (addpopup2)

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
            const para=document.createElement("p");
            para.classList.add("inline");
          title2.innerText = input3.value;
          addpopup2.style.display = "none";
          const markingDone = document.createElement("button");
         
          innerdiv.appendChild(para)
          innerdiv.classList.add("space")
          
          markingDone.innerText = "Done";
          para.appendChild(title2);
          para.appendChild(markingDone);
          addpopup2.style.display = "none";
          parentcard.classList.remove("parent");
          parent.classList.remove("parent");
          markingDone.classList.add("mark");
          parent.classList.remove("first");
    
         
        markingDone.addEventListener("click", () => {
  Done();
 });
function Done() {
  title2.style.textDecoration = "line-through";
  title2.style.color = "red";
   title2.style.fontWeight = "bolder";
   markingDone.remove();
 }
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
       parentCard2.appendChild(newCard);
       parentCard2.style.display="flex";
       header2[0].style.display="block";
       header1.style.display="none";
       blank.innerText=Title.innerText;
       blank.style.color="yellow";
    })


    back1.addEventListener("click",()=>{
       Backbutton();
    })

    function Backbutton(){ 
        console.log("hello2");
        parentCard2.style.display = "none";
        // parentCard2.removeChild(newCard);    change done
        parentCard2.innerText="";
        parentcard.appendChild(newCard);
        parentcard.style.display = "flex";
        parentcard.style.flexDirection = "row";
        parentcard.style.justifyContent = "space-between";
        header2[0].style.display = "none";
        header1.style.display="flex";

    
    }
    }




function remove(){
    let addpopup=document.getElementsByClassName("addpopup");
    addpopup[0].setAttribute("class","addpopup hide");
    parent.classList.remove("parent");
    parentcard.classList.remove("parent");


}



