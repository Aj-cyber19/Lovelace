// Update year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth scroll to main content
const exploreBtn = document.getElementById("exploreNow");
if (exploreBtn) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const main = document.querySelector("#main-content");
    if (main) {
      main.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Collapsible sections
const headers = document.querySelectorAll(".collapsible-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("open");
      arrow.classList.remove("rotate");
    } else {
      document.querySelectorAll(".collapsible-content").forEach(c => {
        c.style.maxHeight = null;
        c.classList.remove("open");
      });
      document.querySelectorAll(".arrow").forEach(a => a.classList.remove("rotate"));
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      arrow.classList.add("rotate");
    }
  });
});