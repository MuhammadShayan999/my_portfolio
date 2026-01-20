// DARK MODE
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// LOAD SECTIONS
function loadPage(section) {
  fetch(`${section}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("main-content").innerHTML = data;
      if (section === "contact") initContactForm();
    })
    .catch(() => {
      document.getElementById("main-content").innerHTML = "<p>Page not found</p>";
    });
}

// EMAILJS
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_mbdh8qm", "template_oxztfnl", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch(() => alert("Failed to send message"));
  });
}
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.onload = () => loadPage("home");

