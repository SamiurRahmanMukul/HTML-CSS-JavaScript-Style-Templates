// select elements
var logIn = document.getElementById("log-in");
var register = document.getElementById("register");
var btn = document.getElementById("btn");

// register button
function myRegister() {
  logIn.style.left = "-400px";
  register.style.left = "50px";
  btn.style.left = "110px";
}

// log-in button
function myLogIn() {
  logIn.style.left = "50px";
  register.style.left = "450px";
  btn.style.left = "0";
}
