function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}
function containsOnlyLettersAndSpace(str) {
  return /^[a-zA-Z\s]*$/.test(str);
}
function containsOnlySpace(str) {
  let noSpace = String(str).replace(/ /g, "");
  return noSpace.length === 0;
}
//function that checks if there is any empty input and also check duplicate id
function validator(user, type) {
  //check if user is not an object
  if (typeof user !== "object" || Array.isArray(user) || user === null)
    return "Invalid input";

  for (const key in user) {
    if (user[key] == "" || containsOnlySpace(user[key])) {
      return "Please Fill all the inputs!!!";
    }
  }

  if (type === "create") {
    if (!containsOnlyNumbers(user.uid)) return "Id must be numeric";
    if (userData.find((person) => person.uid == user.uid)) {
      return "Choose another id :)";
    }
  }

  if (!containsOnlyNumbers(user.postalCode))
    return "Postal Code must be numeric";
  if (!containsOnlyNumbers(user.phoneNumber))
    return "Phone Number must be numeric";
  if (!containsOnlyLettersAndSpace(user.firstname))
    return "firstname cannot contains number";
  if (!containsOnlyLettersAndSpace(user.lastname))
    return "lastname cannot contains number";
  if (!containsOnlyLettersAndSpace(user.position))
    return "Position cannot contains number";
  if (!containsOnlyLettersAndSpace(user.city))
    return "City cannot contains number";
}
