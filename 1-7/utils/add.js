function addNewUser() {
  let newUser = {
    uid: +modal.children[0].children[1].value,
    firstname: modal.children[1].children[1].value,
    lastname: modal.children[2].children[1].value,
    city: modal.children[3].children[1].value,
    postalCode: modal.children[4].children[1].value,
    phoneNumber: modal.children[5].children[1].value,
    position: modal.children[6].children[1].value,
  };
  let errorMessage = validator(newUser, "create");
  if (!!errorMessage) {
    alert(errorMessage);
    return;
  }
  userData.push(newUser);
  renderTable(userData);
  modal.style.display = "none";
  modal.parentElement.style.display = "none";
}

//create and add user function
function createNewUser() {
  //modal values reset
  resetModal();
  //render it
  renderModal();
  modal.children[0].children[1].disabled = false;
}
