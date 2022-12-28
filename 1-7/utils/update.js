//update user function
function updateUser() {
  let updatedUser = {
    uid: modal.children[0].children[1].value,
    firstname: modal.children[1].children[1].value,
    lastname: modal.children[2].children[1].value,
    city: modal.children[3].children[1].value,
    postalCode: modal.children[4].children[1].value,
    phoneNumber: modal.children[5].children[1].value,
    position: modal.children[6].children[1].value,
  };
  let errorMessage = validator(updatedUser, "update");
  if (!!errorMessage) {
    alert(errorMessage);
    return;
  }
  let newUserData = [...userData];
  let indexOfUser = userData.findIndex((user) => user.uid == selectedUser.uid);
  newUserData[indexOfUser] = updatedUser;
  userData = newUserData;
  //render new table and hide modal
  renderTable(userData);
  modal.style.display = "none";
  modal.parentElement.style.display = "none";
}
