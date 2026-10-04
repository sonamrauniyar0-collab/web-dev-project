// MOBILE SIDEBAR MENU
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function showMenu() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
  sidebar.setAttribute("aria-hidden", "false");
  openMenu.setAttribute("aria-expanded", "true");
  closeMenu.focus();
}

function hideMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
  sidebar.setAttribute("aria-hidden", "true");
  openMenu.setAttribute("aria-expanded", "false");
  openMenu.focus();
}

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);
overlay.addEventListener("click", hideMenu);

document.querySelectorAll(".sidebar-link").forEach(link => {
  link.addEventListener("click", hideMenu);
});

// VIDEO MODAL
const videoModal = document.getElementById("videoModal");
const companyVideo = document.getElementById("companyVideo");
const playVideo = document.getElementById("playVideo");
const closeModal = document.getElementById("closeModal");

function openVideo() {
  videoModal.classList.add("show");
  companyVideo.currentTime = 0;

  companyVideo.play().catch(() => {
    // The user can press play using the video controls.
  });

  closeModal.focus();
}

function stopVideo() {
  companyVideo.pause();
  companyVideo.currentTime = 0;
  videoModal.classList.remove("show");
  playVideo.focus();
}

playVideo.addEventListener("click", openVideo);
closeModal.addEventListener("click", stopVideo);

// CLOSE VIDEO WHEN CLICKING OUTSIDE
videoModal.addEventListener("click", function(event) {
  if (event.target === videoModal) {
    stopVideo();
  }
});

// ESCAPE KEY
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    if (videoModal.classList.contains("show")) {
      stopVideo();
    } else if (sidebar.classList.contains("open")) {
      hideMenu();
    }
  }
});

// CONTACT FORM DEMO
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  formMessage.textContent =
    "Thank you! Your message has been received in this demo.";

  formMessage.style.color = "#15803d";
  contactForm.reset();
});