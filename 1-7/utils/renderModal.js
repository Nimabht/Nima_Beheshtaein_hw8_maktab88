//modal render function
function renderModal(userObj) {
  modal.style.display = "flex";
  modal.parentElement.style.display = "block";
  //show specefic buttons in different situations (creating/selecting a row)
  if (!userObj) {
    addBtn.style.display = "inline";
    deleteBtn.style.display = "none";
    updateBtn.style.display = "none";
    var userObj = {
      uid: "",
      firstname: "",
      lastname: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
      position: "",
    };
  } else {
    addBtn.style.display = "none";
    deleteBtn.style.display = "inline";
    updateBtn.style.display = "inline";
  }
  //modal values reset
  resetModal();
  userValues = Object.values(userObj);
  userValues.forEach((value, index) => {
    if (index == 0) {
      modal.children[index].children[1].disabled = true;
    }
    modal.children[index].children[1].required = true;
    modal.children[index].children[1].value = value;
  });
}
