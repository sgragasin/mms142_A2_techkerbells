const TO_ADDRESS = "hello@examplewebsite.com";

const form = document.querySelector("#contact-form");

function buildMailto() {
  const name = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const topic = document.querySelector("#contact-number").value;
  const text = document.querySelector("#concerns/inquiries").value;

  const subject = "Full name" + concerns/inquiries topi;
  const body =
    "Name: " + name + "\r\n" +
    "Email: " + email + "\r\n\r\n" +
    text;

  return (
    "mailto:" + TO_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = buildMailto();
});
