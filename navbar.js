const navbar = document.querySelector(".navbar");
const listmenu = document.querySelector(".menu-items");
const iconmenu = document.querySelector(".btn-menu");
const menulinks = document.querySelector(".menulinks");



function handleLlinks() {
    if (window.innerWidth <= 991) {
        menulinks.classList.toggle("visible");
    }
  }
  
  iconmenu.addEventListener("click", handleLlinks);
  menulinks.addEventListener("click", handleLlinks);



  window.addEventListener("scroll", function () {
    window.scrollY > 100 && (navbar.style.background = `black`);
    window.scrollY < 100 && (navbar.style.background = `transparent`);
  });


  