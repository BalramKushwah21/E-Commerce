function toggleMenu() {
  let menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  
}

var tl=gsap.timeline()



tl.to("#logo", {
  // x:500 ,
  
  duration:0.7,
  delay:0.1,
  rotation:360,
  scale:1.5,
  borderRadius:"50%"
})

tl.from("h3",{
  y:-30,
  duration:0.5,
  opacity:0,
  stagger:0.2


})