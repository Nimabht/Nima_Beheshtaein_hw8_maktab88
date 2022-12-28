//creating main container
let container = document.createElement("div");
let text = document.createTextNode("hover over me!");
container.appendChild(text);
document.body.appendChild(container);
//styling main container
container.style.backgroundColor = "red";
container.style.color = "white";
container.style.width = "350px";
container.style.height = "100px";
container.style.border = "2px solid black";
//event functions
container.onmouseover = () => {
  container.style.backgroundColor = "blue";
};
container.onmouseout = () => {
  container.style.backgroundColor = "red";
};
