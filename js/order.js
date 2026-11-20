// Quantity + and - buttons
const qtyInput = document.querySelector("#shirtQty");
const decreaseBtn = document.querySelector("#decreaseQty");
const increaseBtn = document.querySelector("#increaseQty");

decreaseBtn.addEventListener("click", function () {
  let currentQty = parseInt(qtyInput.value, 10);
  if (currentQty > 1) {
    qtyInput.value = currentQty - 1;
  }
});

increaseBtn.addEventListener("click", function () {
  let currentQty = parseInt(qtyInput.value, 10);
  if (currentQty < 99) {
    qtyInput.value = currentQty + 1;
  }
});

// Order Now mailto: Method #2
const orderForm = document.querySelector("#orderForm");

orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const productName = document.querySelector("#productName").textContent.trim();
  const productPrice = document.querySelector("#productPrice").textContent.trim();
  const selectedSize = document.querySelector('input[name="shirtSize"]:checked').value;
  const quantity = qtyInput.value;

  const recipient = "orders@examplewebsite142.com";
  const subject = encodeURIComponent("Order Request: " + productName);
  const body = encodeURIComponent(
    "Hello Zest Team,\n\n" +
    "I would like to place an order for the following t-shirt:\n\n" +
    "Product: " + productName + "\n" +
    "Price: " + productPrice + "\n" +
    "Size: " + selectedSize + "\n" +
    "Quantity: " + quantity + "\n\n" +
    "Thank you!"
  );

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

const slides = document.querySelectorAll("#productCarousel .carousel-item");
const prevBtn = document.querySelector("#productCarousel .carousel-control-prev");
const nextBtn = document.querySelector("#productCarousel .carousel-control-next");

if (slides.length > 0 && prevBtn && nextBtn) {
  let currentSlide = 0;

  const showSlide = (index) => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  };

  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
}
