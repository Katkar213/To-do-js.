
let parent=document.getElementById("parent1");
let addpopup=document.getElementsByClassName("addpopup");
let parentCard2=document.getElementById("parentCard2");
let header2=document.getElementsByClassName("header2");
let parentcard=document.createElement("div");

let count=0;
let body=document.querySelector("body");


// Add item plus icon.............
function addnewtask(){
    parent.setAttribute("class","parent");
    console.log("hii");
    addpopup[0].classList.add("show");
    console.log("hii2");
    parentCard2.classList.add("parent");
    header2[0].classList.add("parent");
    
    if(count>=1){
        parentcard.classList.add("parent");
    }
}
let input=document.querySelector("#input");

//Appending flex container 1 to body..............
body.appendChild(parentcard);

// header 1..................
let header1=document.querySelector("header");

// header 2 elements.............
let blank=document.getElementById("blank");
const back1=document.getElementById("back");

// popup 1 add button..............
function add(){
    
// pop up box removed
let addpopup=document.getElementsByClassName("addpopup");
addpopup[0].setAttribute("class","addpopup hide");
count++;
parent.classList.remove("parent");

//no item in list removed....
   let noItemHeading=document.getElementsByClassName("initial");
   noItemHeading[0].style.display="none"; 

// creating flex container 1
parentcard.classList.remove("parent");
parentcard.classList.add("parent2");
parentcard.setAttribute("id","show");
parentcard.classList.add("width");


// Creating new card by js..........
   let newCard= document.createElement("div");
   newCard.classList.add("newtask");

   let Title=document.createElement("h1");
     Title.innerText=input.value;
     Title.style.color="white";
     Title.style.marginLeft="40%";

   let heading=document.createElement("hr");
   let innerdiv=document.createElement("div");
   let addbtn2=document.createElement("button");
     addbtn2.classList.add("btnposition");
     addbtn2.classList.add("add");
   let deletebutton=document.createElement("button");
     deletebutton.classList.add("btnposition");
     deletebutton.classList.add("delete");
   header2[0].classList.remove("parent");
   parentCard2.classList.remove("parent");

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
    header2[0].classList.add("parent");
    parentCard2.classList.add("parent");


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
          parent.classList.remove("parent");
          header1.classList.remove("parent");
          parentcard.classList.remove("parent");
          header2[0].classList.remove("parent");
          parentCard2.classList.remove("parent");
         
        markingDone.addEventListener("click", () => {
             Done();
        });
      function Done() {
        title2.style.textDecoration = "line-through";
        title2.style.color = "yellow";
        title2.style.fontWeight = "bolder";
    markingDone.remove();
        }
        });


        close2.addEventListener("click", () => {
          addpopup2.remove();
          parentcard.classList.remove("parent");
          parent.classList.remove("parent");
         header1.classList.remove("parent");
         header2[0].classList.remove("parent");
         parentCard2.classList.remove("parent");

        });
      }
      deletebutton.addEventListener(("click"),()=>{
      //  newCard.remove();
        newCard.style.display="none";
           blank.innerText=" "
        console.log(parentcard.childNodes);
        if (parentcard.childNodes.length === 0) {
            console.log("i am in");
            noItemHeading[0].style.display="block"; 
          } 
        else {
            noItemHeading[0].style.display="none"; 
          }
          if(parentCard2.childNodes.length===1){
            noItemHeading[0].style.display="none"; 
          }
    })

    Title.addEventListener("click",()=>{
       parentcard.style.display="none";
       parentCard2.appendChild(newCard);
       parentCard2.style.display="flex";
       header2[0].style.display="block";
       header1.style.display="none";
       header2[0].classList.remove("parent");
       parentCard2.classList.remove("parent");
       blank.innerText=Title.innerText;
       blank.style.color="yellow";
    })


    back1.addEventListener("click",()=>{
       Backbutton();
      if (parentcard.childNodes.length === 0) {
       console.log("i am in");
        noItemHeading[0].style.display="block"; 
      } 
    else {
        noItemHeading[0].style.display="none"; 
      }

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
    header2[0].classList.remove("parent");
    parentCard2.classList.remove("parent");


}



