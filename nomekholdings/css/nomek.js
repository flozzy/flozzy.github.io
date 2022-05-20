var myIndex = 0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

const togglebutton =
document.getElementsByClassName("fa-angle-down")[0];
const mainmenu = document.getElementsByClassName("catedrop")[0];

togglebutton.addEventListener("click", () => {
mainmenu.classList.toggle("active");
});

