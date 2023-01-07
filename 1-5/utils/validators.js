//validator functions
function containsNumbers(str) {
  return /\d/.test(str);
}
function containsChar(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function usernameValidator(username) {
  if (username == "") return "الزامی";
  return "";
}
function passwordValidator(password) {
  if (password == "") return "الزامی";
  if (
    password.length < 8 ||
    !containsNumbers(password) ||
    !containsChar(password)
  )
    return "رمز عبور باید شامل حداقل 8 کاراکتر و حداقل یک حرف و یک عدد باشد";
  return "";
}

function confirmPasswordValidator(password, confirmPassword) {
  if (confirmPassword == "") return "الزامی";
  if (password != confirmPassword) return "رمز های وارد شده یکسان نیستند";
  return "";
}
