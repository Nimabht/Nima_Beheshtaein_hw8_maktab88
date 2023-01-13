//sort data function
function sortData(method) {
  const dictionary = [
    "uid",
    "firstname",
    "lastname",
    "city",
    "postalCode",
    "phoneNumber",
    "position",
  ];
  //checks if our method is valid
  if (!dictionary.includes(method)) throw new Error("Invalid sorting method");
  //sorting
  if (method === "uid") {
    userData.sort((user1, user2) => {
      if (user1[method] < user2[method]) return 1;
      if (user1[method] > user2[method]) return -1;
      return 0;
    });
  } else {
    userData.sort((user1, user2) => {
      if (
        String(user1[method]).toLowerCase() <
        String(user2[method]).toLowerCase()
      )
        return 1;
      if (
        String(user1[method]).toLowerCase() >
        String(user2[method]).toLowerCase()
      )
        return -1;
      return 0;
    });
  }
  renderTable(userData);
}
