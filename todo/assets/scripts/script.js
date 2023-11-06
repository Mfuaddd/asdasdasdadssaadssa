const input = document.getElementById("inp")
const button = document.getElementById("btn")
const list = document.querySelector(".todoList")

loadLi()
button.addEventListener("click",function () {
    if (input.value !== ""){
        addLi(input.value,null)
        input.value = ""
        saveLi();
    }
})
function addLi(value,cls){
    const li = document.createElement("li");
    const p = document.createElement("p");
    const sClose = document.createElement("span");
    sClose.textContent = "×";
    sClose.classList.add("sClose")
    p.textContent = value;
    if (cls) p.classList.add(cls);
    li.append(p,sClose)
    list.append(li)
    sClose.addEventListener("click",function () {
        li.remove()
        saveLi()
    })
    li.addEventListener("click",function () {
        p.classList.toggle("line")
        saveLi()
    })
}
function loadLi() {
    const fullarray =  JSON.parse(localStorage.getItem("liArray"))
    if(!(fullarray === null)){
        for (let i = 0; i < fullarray.length; i++) {
            addLi(fullarray[i][0],fullarray[i][1])

        } 
    }
}
function saveLi() {
    localStorage.clear()
    const p = list.querySelectorAll("p")
    const fullarray = []
    for (let i = 0; i < p.length; i++) {
        fullarray.push([p[i].textContent,p[i].getAttribute("class")])
    }
    localStorage.setItem("liArray",JSON.stringify(fullarray))
}

