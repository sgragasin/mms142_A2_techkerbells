const TO_ADDRESS = "hello@examplewebsite142.com";
const form = document.querySelector("#contact-form");

function buildMailto() {
  const name = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const contactNumber = document.querySelector("#contact-number").value;
  const text = document.querySelector("#concerns-inquiries").value;

  const subject = encodeURIComponent("Inquiry from " + name);
  const body = encodeURIComponent(
    "Hello Zest Team,\n\n" +
    "Name: " + name + "\r\n" +
    "Email: " + email + "\r\n" +
    "Contact Number: " + contactNumber + "\r\n\r\n" +
    "I have a concern/inquiry regarding:\r\n" + text + "\n\n" +
    "I look forward to hearing from you. Thank you!"
  );

  return `mailto:${TO_ADDRESS}?subject=${subject}&body=${body}`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = buildMailto();
});
