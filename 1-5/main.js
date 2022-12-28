//assign form to a variable
let form = document.getElementById("myForm");
//prevent reset page
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
//submit btn
let subBtn = document.querySelector("#sub-btn");
//inputs
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
//input and icon wrapper
let usernameInp = document.querySelector("#username-inp");
let passwordInp = document.querySelector("#password-inp");
let confirmPasswordInp = document.querySelector("#confirm-password-inp");
//inp and span wrapper
let usernameWrapper = document.querySelector("#username-wrapper");
let passwordWrapper = document.querySelector("#password-wrapper");
let confirmPasswordWrapper = document.querySelector("#confirm-wrapper");
//declear onclick function for submit button
subBtn.onclick = () => {
  //get values
  let usernameValue = username.value;
  let passwordValue = password.value;
  let confirmPasswordValue = confirmPassword.value;
  //reset styles and span values
  usernameWrapper.lastElementChild.innerHTML = "<br/>";
  passwordWrapper.lastElementChild.innerHTML = "<br/>";
  confirmPasswordWrapper.lastElementChild.innerHTML = "<br/>";
  usernameInp.style.boxShadow = "none";
  passwordInp.style.boxShadow = "none";
  confirmPasswordInp.style.boxShadow = "none";
  //validator to style
  let error = false;
  if (!!usernameValidator(usernameValue)) {
    usernameWrapper.lastElementChild.innerHTML =
      usernameValidator(usernameValue);
    usernameInp.style.boxShadow = "red 0px 0px 25px -4px";
    usernameInp.style.borderRadius = "10px";
    error = true;
  }
  if (!!passwordValidator(passwordValue)) {
    passwordWrapper.lastElementChild.innerHTML =
      passwordValidator(passwordValue);
    passwordInp.style.boxShadow = "red 0px 0px 25px -4px";
    passwordInp.style.borderRadius = "10px";
    error = true;
  }
  if (!!confirmPasswordValidator(passwordValue, confirmPasswordValue)) {
    confirmPasswordWrapper.lastElementChild.innerHTML =
      confirmPasswordValidator(passwordValue, confirmPasswordValue);
    confirmPasswordInp.style.boxShadow = "red 0px 0px 25px -4px";
    confirmPasswordInp.style.borderRadius = "10px";
    error = true;
  }
  !error ? alert("You have successfully signed in!") : null;
};
