//table render function
function renderTable(userData) {
  //reset table
  table.innerHTML = `<tr>
          <th scope="col">Row</th>
          <th id="uid" scope="col">UID</th>
          <th id="firstname" scope="col">First Name</th>
          <th id="lastname" scope="col">Last Name</th>
          <th id="city" scope="col">City</th>
          <th id="postalCode" scope="col">Postal Code</th>
          <th id="phoneNumber" scope="col">Phone Number</th>
          <th id="position" scope="col">Position</th>
        </tr>`;
  //create rows
  userData.forEach((user, indexOfUser) => {
    table.insertRow();
    let newCell = table.rows[table.rows.length - 1].insertCell();
    newCell.textContent = indexOfUser + 1;
    for (const key in user) {
      let newCell = table.rows[table.rows.length - 1].insertCell();
      newCell.textContent = user[key];
    }
  });
  //assign onclick funtion for row 1 for sorting
  for (let i = 1; i < table.rows[0].cells.length; i++) {
    let cell = table.rows[0].cells[i];
    cell.onclick = () => sortData(cell.id);
  }
  //assign onclick funtion for each row (row 2 -...) for rendering modal
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      getUserData(this);
    };
  }
  //assign/update selected user and openUp modal for it
  function getUserData(userRow) {
    let userObj = {
      uid: userRow.children[1].innerText,
      firstname: userRow.children[2].innerText,
      lastname: userRow.children[3].innerText,
      city: userRow.children[4].innerText,
      postalCode: userRow.children[5].innerText,
      phoneNumber: userRow.children[6].innerText,
      position: userRow.children[7].innerText,
    };
    selectedUser = userObj;
    renderModal(userObj);
  }
}
