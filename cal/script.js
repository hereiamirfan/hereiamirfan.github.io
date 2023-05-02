
const len = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const sym = "!@#$%^&*()_-+=:;[]{}?.,<>";
const comb = num + upperCase + lowerCase + sym;
function createPass() {
  let password = ""
  password += comb[Math.floor(Math.random() * comb.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += sym[Math.floor(Math.random() * sym.length)];
  password += comb[Math.floor(Math.random() * comb.length)];
  while (password.length < len) {
    password += comb[Math.floor(Math.random() * comb.length)];
  }
  const pass = document.getElementById('p');
  pass.value = password;
}
function copp() {
  a = document.getElementById('p');
  if (a.value != "") {
    a.select();
    document.execCommand("copy");
    l.value += "Coppied";
  }
}