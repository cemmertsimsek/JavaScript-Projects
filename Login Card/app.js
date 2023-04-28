let showPassword = document.getElementById('showPassword');
let inputPassword = document.getElementById('password');
showPassword.onclick = function () {
  if (inputPassword.type == 'password') {
    // If input type is password, change it to text
    inputPassword.type = 'text';
    showPassword.classList.add('show');
  } else {
    // If input type is text, change it to password
    inputPassword.type = 'password';
    showPassword.classList.remove('show');
  }
};
