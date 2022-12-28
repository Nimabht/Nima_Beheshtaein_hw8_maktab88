//creating main container with text
let container = document.createElement("div");
let text = document.createTextNode("Click here and watch the text change!");
document.body.appendChild(container);
container.appendChild(text);
//styling main container
container.style.backgroundColor = "#008300";
container.style.color = "white";
container.style.width = "400px";
container.style.height = "200px";
//event function
container.onclick = () => {
  container.innerHTML += "Click added some text!";
};
