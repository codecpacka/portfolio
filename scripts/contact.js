var name = document.getElementsByName("name");
function clear() {
  document.getElementById("mail").value = " ";
  document.getElementById("name").value = " ";
  document.getElementById("description").value = " ";
}
function validate() {
  var mail = document.getElementById("mail").value;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (mail == "") {
    alert("please enter mail address.");
  } else if (window.name == "") {
    alert("Name field cannot be empty");
  } else if (!filter.test(mail)) {
    alert("Enter valid email id.");
  } else if (window.name.length > 6) {
    alert("name is minimun of 6 characters.");
  } else {
    alert("Thank You for your valuable feeback");
  }
}
