//delete user function
function deleteUser() {
  let uid = selectedUser.uid;
  let newUserData = userData.filter((user) => +user.uid !== +uid);
  userData = newUserData;
  //render new table and hide modal
  renderTable(userData);
  modal.style.display = "none";
  modal.parentElement.style.display = "none";
}
