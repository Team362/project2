function checkRequirements() {
  
  var name = document.forms["contactForm"]["name_field"].value;
  var email = document.forms["contactForm"]["email_field"].value;
  
  if ((name == "") && (email == "")) {
    document.getElementById("error").style.display = "block";
  } else {
    alert("Sent message succesfully");
  }
}