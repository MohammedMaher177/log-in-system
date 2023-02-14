let userEmail = document.querySelector("#email");
let userPassword = document.querySelector("#password");
let signInBtn = document.querySelector("#logIn");
let requiredInput = document.querySelector("#requiredInput");
let success = document.querySelector("#success");
let invalidLogInP = document.querySelector("#invalidLogIn");
let userList = [];

if (localStorage.getItem("userList") != null) {
  userList = JSON.parse(localStorage.getItem("userList"));
}
signInBtn.addEventListener("click", logIn);

function invalidRequiredInput() {
  requiredInput.classList.replace("d-none", "d-block");
  success.classList.replace("d-block", "d-none");
  invalidLogInP.classList.replace("d-block", "d-none");
}

function logIn(e) {
  if (userEmail.value == "" || userPassword.value == "") {
    invalidRequiredInput();
    e.preventDefault();
    return;
  }
  for (let i = 0; i < userList.length; i++) {
    if (
      userList[i].email == userEmail.value &&
      userList[i].password == userPassword.value
    ) {
      successLogIn(userList[i]);
      e.preventDefault();

      return;
    }
  }
  invalidLogIn();
  e.preventDefault();
}

function successLogIn(user) {
  success.classList.replace("d-none", "d-block");
  requiredInput.classList.replace("d-block", "d-none");
  invalidLogInP.classList.replace("d-block", "d-none");
  userEmail.classList.replace("border-danger", "border-info");
  userPassword.classList.replace("border-danger", "border-info");
}
function invalidLogIn() {
  success.classList.replace("d-block", "d-none");
  requiredInput.classList.replace("d-block", "d-none");
  invalidLogInP.classList.replace("d-none", "d-block");
  userEmail.classList.add("border-danger");
  userPassword.classList.add("border-danger");
}
