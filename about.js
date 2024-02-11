function sendEmail() {
  try {
    let parms = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };

    if (parms.email && parms.name && parms.message) {
      emailjs.send("service_wjc7lri", "template_6cqqjfl", parms);
      document.getElementById("success").style.display = "block";

      setTimeout(() => {
        document.getElementById("success").style.display = "none";
        console.log("working");
      }, 5000);
      console.log(parms);
    } else{
        alert("ERROR: Fill all text boxes")
    }
  } catch (error) {
    alert(error);
  }
}
