const signupSwitchBtn = document.getElementById("signupSwitchBtn");
const loginSwitchBtn = document.getElementById("loginSwitchBtn");
const loginCard = document.getElementById("loginCard")
const signUpCard = document.getElementById("signupCard")

signupSwitchBtn.addEventListener('click', function hideLogin() {
  loginCard.classList.add("hide")
  signUpCard.classList.remove("hide")
})
loginSwitchBtn.addEventListener('click', function hideSignUp() {
  signUpCard.classList.add("hide")
  loginCard.classList.remove("hide")
})
