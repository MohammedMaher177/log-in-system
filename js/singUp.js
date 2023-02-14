let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let userPassword = document.querySelector("#password");
let reiterationEmailInput = document.querySelector("#reiterationEmail");
let signUpBtn = document.querySelector("#signup");
let requiredInput = document.querySelector("#requiredInput");
let success = document.querySelector("#success");
let userList = [];
signUpBtn.addEventListener("click", signUp);

if (localStorage.getItem("userList") != null) {
  userList = JSON.parse(localStorage.getItem("userList"));
}
function signUp(e) {
  let user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  if (user.name == "" || user.email == "" || user.password == "") {
    invalidRequiredInput();
    e.preventDefault();
    return;
  }
  for (let i = 0; i < userList.length; i++) {
    if (user.email == userList[i].email) {
      reiterationEmail();
      e.preventDefault();
      return;
    }
  }
  success.classList.replace("d-none", "d-block");
  reiterationEmailInput.classList.replace("d-block", "d-none");
  requiredInput.classList.replace("d-block", "d-none");

  userList.push(user);
  localStorage.setItem("userList", JSON.stringify(userList));
  console.log(user);
  e.preventDefault();
}
function reiterationEmail() {
  reiterationEmailInput.classList.replace("d-none", "d-block");
  success.classList.replace("d-block", "d-none");
  requiredInput.classList.replace("d-block", "d-none");

}

function invalidRequiredInput() {
  requiredInput.classList.replace("d-none", "d-block");
  success.classList.replace("d-block", "d-none");
  reiterationEmailInput.classList.replace("d-block", "d-none");

}
