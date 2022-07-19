let navbar = document.querySelector(".navbar");
let navBtn = document.querySelector(".navbar__toggler");

navBtn.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
});


// Background image changer 
const navItems = document.querySelectorAll(".main_nav_list li a");
const mainBg = document.querySelector(".main-bg-after");
// console.log(mainBg);
navItems.forEach((nav) => {
  nav.addEventListener("mouseover", (e) => {
    mainBg.style.opacity = "0.2";
    mainBg.style.background = `url(${nav.getAttribute("data-source")})`
  })

  nav.addEventListener("mouseout", () => {
    mainBg.classList.remove("main-bg-hover");
    mainBg.style.opacity = "0";
  })
})