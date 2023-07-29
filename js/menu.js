function menuToggle() {
    var menuContent = document.getElementById("menu");
    var menuBtn = document.getElementById("menu-btn");
    if (menuContent.className.indexOf("w3-show") == -1) { 
      menuContent.className += " w3-show";
      if (menuBtn.className.indexOf("fa-close") == -1)
      menuBtn.className = menuBtn.className.replace(" fa-bars", " fa-close");
    } else {
      menuContent.className = menuContent.className.replace(" w3-show", "");
      if (menuBtn.className.indexOf("fa-bars") == -1)
      menuBtn.className = menuBtn.className.replace(" fa-close", " fa-bars");
    }
  } 

  var myIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) { myIndex = 1 }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 3000); // Change image every 3 seconds
  }