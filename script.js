let taskName = document.getElementById("taskName");
let listitems = document.getElementById("listitems");
let button = document.getElementsByClassName("add");



document.querySelector(".add").addEventListener("click",()=>{
    if(taskName.value === ''){
        alert("You must write something to add in list");
    }    

    else{
        let li = document.createElement("li");
        li.className = "lists";
        // li.className = "check";
        li.innerHTML = taskName.value;
        listitems.appendChild(li);

        // let dateTime = document.createElement("span");
        // dateTime.innerHTML = new Date().toLocaleString();
        // listitems.appendChild(dateTime);

        let span = document.createElement("span");
        // li.className = "dt";
        span.innerHTML = new Date().toLocaleString() + "   Remove";/* \u00d7 --> code of cross symbol */ 
        li.appendChild(span);
              
    }
    // taskName.value = " ";
    taskName.value = null;
    saveData();
   
}
)

// function checkFun(){
//     let element = document.getElementsByClassName("lists");
//     element.classList.add("check");

// }

// document.querySelectorAll(".lists").addEventListener("click", ()=>{
//     checkFun();
// })

listitems.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        // let element = document.getElementsByClassName("dt");
        e.target.parentElement.remove();
        saveData()
        // element.remove();
    //    console.log("e:nth-child(3)");
        }
             
},false)

function saveData(){
    localStorage.setItem("data", listitems.innerHTML);
}

function showTask(){
    listitems.innerHTML = localStorage.getItem("data");
}
showTask();
