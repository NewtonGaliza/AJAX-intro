function ajaxintro() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("d1").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajaxintro.txt", true);
  xhttp.send();
}
