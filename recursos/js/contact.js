(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "knlLampwv0KxpjWT6",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("fecha-actual").value =
        new Date().toLocaleString() + " ";
      new Date().toLocaleTimeString(); // Set the current date and time in the hidden input field
      // these IDs from the previous Ssteps
      emailjs.sendForm("service_hvh75vy", "template_zgv6cff", this).then(
        () => {
          alert("Mensaje enviado correctamente. Gracias por contactarnos.");
          this.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          alert(
            "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
          );
          console.log("FAILED...", error);
        },
      );
    });
};
