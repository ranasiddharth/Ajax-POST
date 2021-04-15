const regex = {

  Email: /^([\w\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/,
  Password: /^[\w@_-]{8,15}$/,

}
function func() {
  var a = document.getElementById("email");
  var b = document.getElementById("password");
  if (regex.Email.test(a.value.trim()) && regex.Password.test(b.value.trim())) {
    var Http = new XMLHttpRequest();
    const url = 'https://reqres.in/api/login';
    Http.onreadystatechange = function(){
      if(this.status==200 && this.readyState==4){
        let myObj = JSON.parse(this.responseText);
        alert("JSON token is QpwL5tke4Pnpja7X4");
      }
    }
  }
  else{
    alert("Invalid email or password. Pls write in format - test@test.com and catswalk as email and password");
   
  }
  Http.open ("POST", "https://reqres.in/api/login" , true);
  Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  Http.send(`email=${email.value}&password=${password.value}`);
}
var input = document.getElementById("password");
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
}); 