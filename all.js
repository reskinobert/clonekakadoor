/* Toggle navbar links when toggle button is clicked */
const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});




{/* <script type="text/javascript"> */}
  function sendEmail() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const pesan = document.getElementById("pesan").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Email sent!");
      }
    };

    xhr.send(`firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${phone}&pesa=${pesan}`);
  }
// </script>

