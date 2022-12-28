//function that add a new list with content to a specefic parent
function addList(parent, contentList) {
  let list = document.createElement("li");
  list.innerHTML = contentList;
  parent.appendChild(list);
}
//creating and styling unordered list
let unorderedList = document.createElement("ul");
addList(unorderedList, "login");
addList(unorderedList, "<s>register</s>");
addList(unorderedList, "logout");
unorderedList.style.listStyleType = "circle";
//creating and styling ordered list
let orderedList = document.createElement("ol");
addList(orderedList, "user dashboard");
addList(orderedList, "admin dashboard");
addList(
  orderedList,
  `<span>authentication</span> <ul>${unorderedList.innerHTML}</ul>`
);
addList(orderedList, "about page");
addList(orderedList, "<s>content page</s>");
orderedList.style.listStyleType = " upper-roman";
//creating and styling our container
let continer = document.createElement("div");
continer.style.padding = "2rem 3rem";
continer.style.margin = "auto";
continer.style.width = "300px";
continer.style.border = " 1px black solid";
//creating and styling header (My Tasks)
let header = document.createElement("h1");
header.style.color = "red";
header.innerHTML = "My Tasks";
//creating input and button
let input = document.createElement("input");
let button = document.createElement("button");
button.innerHTML = "add Task";
//append everything that we created
continer.appendChild(header);
continer.appendChild(orderedList);
continer.appendChild(input);
continer.appendChild(button);
document.body.appendChild(continer);
