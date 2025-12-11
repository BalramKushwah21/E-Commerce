// SIGNUP

const signupForm = document.getElementById("signup_box");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };

    const res = await fetch("http://10.17.78.234:3050/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if(result.message === "Signup successful") {
      window.location.href = "login.html"; // Redirect to login page
    }
    else if(result.message === "User already exists"){
      alert("User already exists. Please login.");
      window.location.href = "login.html"; // Redirect to login page
    }
    else{
      alert(result.message);
    }
    // alert((await res.json()).message);
  });
}

// SIGNIN
const signinForm = document.getElementById("login_box");
if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      email: document.getElementById("login-email").value,
      password: document.getElementById("login-password").value
    };

    const res = await fetch("http://10.17.78.234:3050/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
      if(result.message === "Login successful") {
        // localStorage.setItem("token", result.token);
        window.location.href = "index.html"; // Redirect to home page
      }
      else{
        alert(result.message);
      }
    
  });
}
