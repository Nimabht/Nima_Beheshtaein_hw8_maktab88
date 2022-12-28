//creating table, styling it and add it to body
let table = document.createElement("table");
table.className = "table table-striped table-dark";
table.style.width = "70%";
table.style.margin = "2rem auto";
document.body.appendChild(table);
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
}
renderTable(userData);
