function sendEmail() {
    var params = {
    firstname: document.getElementById("firstname").value,
    lastname:  document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    pesan: document.getElementById("pesan").value,
    };

  emailjs
  .send (serviceID, templateID, params)
  .then(
    res => {
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("pesan").value = "";

        console.log(res);
        alert("Pesan anda telah terkirim")
    })
  .catch((err) => console.log(err));

}

