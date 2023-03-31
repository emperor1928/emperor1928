const item = document.querySelector("#item")
const toDobox = document.querySelector("#to-do-box")
item.addEventListener(
"keyup",
function(event){
    if(event.key == "Enter"){
          addToDo(this.value)
        this.value = ""
    }
}
)

const addToDo = (item)=>{
const listenItem = document.createElement("li");
listenItem.innerHTML =`
${item}
<i class="fas fa-times"></i>
`;
listenItem.addEventListener(
    "click",
    function(){
       
        this.classList.toggle("done")
    }
)
listenItem.querySelector("i").addEventListener(
    "click",
    function(){
        listenItem.remove()
    }
)


toDobox.appendChild(listenItem)



}