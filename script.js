// ================= ELEMENTS =================
const body = document.body;

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Theme buttons (Desktop + Mobile)
const themeBtnDesktop = document.getElementById("theme-btn");
const themeBtnMobile = document.getElementById("theme-btn-mobile");

// ================= THEME FUNCTIONS =================
function updateThemeButtons() {
  const isDark = body.classList.contains("dark-theme");
  const text = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

  if (themeBtnDesktop) themeBtnDesktop.textContent = text;
  if (themeBtnMobile) themeBtnMobile.textContent = text;
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }

  updateThemeButtons();
}

function toggleTheme() {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateThemeButtons();
}

// Load saved theme on start
applySavedTheme();

// Click for desktop theme button
if (themeBtnDesktop) {
  themeBtnDesktop.addEventListener("click", toggleTheme);
}

// Click for mobile theme button
if (themeBtnMobile) {
  themeBtnMobile.addEventListener("click", toggleTheme);
}

// ================= MOBILE MENU =================
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking any link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });
}

// ================= HISTORY TOGGLE =================
function toggleHistory() {
  const moreText = document.getElementById("moreHistory");
  const btn = document.getElementById("historyBtn");

  if (!moreText || !btn) return;

  // If initial is empty, force to none
  if (moreText.style.display === "") {
    moreText.style.display = "none";
  }

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Read More";
  }
}

// ================= GALLERY LIGHTBOX =================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

if (lightbox && lightboxImg) {
  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
    });
  });
}

if (closeLightbox && lightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
}
