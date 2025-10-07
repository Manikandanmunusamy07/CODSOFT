// =========================
// Smooth Scrolling for Nav
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});



// =========================
// Dynamic Year in Footer
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// =========================
// Contact Form Validation
// =========================
// =========================
// Contact Form Validation & Submission
// =========================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // Only block submission if fields are empty
      alert("⚠️ Please fill in all fields before sending!");
    } else {
      // Allow default form submission to Formspree
      alert("✅ Message sent successfully! 🚀");
      // Do NOT use e.preventDefault() here — let the form submit
    }
  });
}

}
