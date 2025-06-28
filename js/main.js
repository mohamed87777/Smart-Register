var Emailinput = document.getElementById('floatingEmail');
var Passinput = document.getElementById('floatingPassword');
var loginbtn = document.getElementById('login');
var messg = document.getElementById('msg');

loginbtn.addEventListener('click', function () {
  var Accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  var email = Emailinput.value.trim().toLowerCase();
  var pass = Passinput.value;
  var found = false;

  for (var i = 0; i < Accounts.length; i++) {
    if (
      Accounts[i].email.toLowerCase() === email &&
      Accounts[i].pass === pass
    ) {
      sessionStorage.setItem("loggedInUser", Accounts[i].name);
      found = true;
      break;
    }
  }

  if (found) {
    window.location.href = "html/home.html";
  } else {
    messg.innerHTML = `<div class="alert alert-danger text-center">Invalid Email Or Password.</div>`;
  }
});
