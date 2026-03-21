
 
 function submit_form(){
        let name = document.getElementById("name").value;
        let mobile = document.getElementById("mobile").value;
        let email = document.getElementById("email").value;
        let res = document.getElementById("result");
        res.innerText = "Balram";
    }

var tl=gsap.timeline()

tl.to("#logo", {
  
  duration:0.7,
  delay:0.1,
  rotation:360,
  scale:1.5,
  borderRadius:"50%"
})