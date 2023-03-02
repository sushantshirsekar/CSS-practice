var button = document.getElementById("btn");
var div = document.getElementById("container");

div.addEventListener("click", ()=> {
    console.log("div");
})

button.addEventListener("click", ()=> {
    console.log("button");
})

div.addEventListener("mouseover", ()=> {
    console.log("div");
},true)

button.addEventListener("mouseover", ()=> {
    console.log("button");
}, true)
