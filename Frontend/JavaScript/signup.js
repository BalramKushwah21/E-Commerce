function submit_form(){
    let name=document.getElementById("name").value;
    let mobile=document.getElementById("number").value;
    let email=document.getElementById("email").value;

    fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, mobile, email })
    })
    // .then(res => res.json())
    // .then(data => alert("OTP Sent: " + data.otp))
    // .catch(err => console.error(err));
}