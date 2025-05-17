// ==== Hamburger Menu Toggle ====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

// ==== Tool Data for Suggestions & Cards ====
const allTools = [
  "ChatGPT", "Google Gemini", "Midjourney", "D-ID", "Runway ML",
  "Synthesia", "Copy AI", "Jasper", "Pictory", "Remove.bg",
  "Soundraw", "Canva AI", "Tome", "HeyGen", "Scribe",
  "Free AI Tools", "Paid AI Tools"
];

// ==== Tool Cards Data ====
const freeTools = [
  { name: "ChatGPT", desc: "Free AI chatbot by OpenAI", link: "https://chat.openai.com" },
  { name: "Canva AI", desc: "Design anything with AI help", link: "https://www.canva.com" },
  { name: "Remove.bg", desc: "Remove image backgrounds", link: "https://www.remove.bg" }
];

const paidTools = [
  { name: "Jasper AI", desc: "Powerful AI writing assistant", link: "https://www.jasper.ai" },
  { name: "Midjourney", desc: "Text to Image AI tool", link: "https://www.midjourney.com" },
  { name: "HeyGen", desc: "AI video avatar creator", link: "https://www.heygen.com" }
];

// ==== Create Tool Cards ====
function createToolCards(tools, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  tools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
      <a href="${tool.link}" target="_blank" onclick="event.stopPropagation()">Visit</a>
    `;
    // Jab card par click ho to local tool page par le jao
    card.addEventListener("click", () => {
      const fileName = tool.name.toLowerCase().replace(/\s+/g, "") + ".html";
      window.location.href = fileName;
    });
    container.appendChild(card);
  });
}
// ==== DOM Load ====
document.addEventListener("DOMContentLoaded", () => {
  createToolCards(freeTools, "freeTools");
  createToolCards(paidTools, "paidTools");

  // Search icon toggle
  const searchIcon = document.getElementById("searchToggle");
  const searchContainer = document.querySelector(".search-container");

  searchIcon.addEventListener("click", () => {
    if (searchContainer.style.display === "block") {
      searchContainer.style.display = "none";
      searchIcon.style.color = "#fff";
    } else {
      searchContainer.style.display = "block";
      searchIcon.style.color = "#00ffcc";
      document.getElementById("searchInput").focus();
    }
  });
});
// ==== Search Suggestions & Redirection ====
const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

searchInput.addEventListener("input", () => {
  const input = searchInput.value.toLowerCase().trim();
  suggestionsList.innerHTML = "";

  if (!input) return;

  const filtered = allTools.filter(tool =>
    tool.toLowerCase().includes(input)
  );

  filtered.forEach(tool => {
    const li = document.createElement("li");
    li.textContent = tool;
    li.addEventListener("click", () => {
      searchInput.value = tool;
      suggestionsList.innerHTML = "";

      // Redirect based on suggestion
      if (tool.toLowerCase().includes("free")) {
        window.location.href = "freetools.html";
      } else if (tool.toLowerCase().includes("paid")) {
        window.location.href = "paidtools.html";
      } else {
        const fileName = tool.toLowerCase().replace(/\s+/g, "") + ".html";
        window.location.href = fileName;
      }
    });
    suggestionsList.appendChild(li);
  });
});

// ==== Enter Key Handling ====
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const query = this.value.toLowerCase().trim();

    const freeKeywords = ["free", "free ai", "free tools", "free ai tools", "freeai"];
    const paidKeywords = ["paid", "paid ai", "paid tools", "paid ai tools", "paidai"];

    if (freeKeywords.some(keyword => query.includes(keyword))) {
      window.location.href = "freetools.html";
    } else if (paidKeywords.some(keyword => query.includes(keyword))) {
      window.location.href = "paidtools.html";
    } else {
      const fileName = query.replace(/\s+/g, "") + ".html";
      window.location.href = fileName;
    }
  }
});
// Scroll adjustment function
function adjustScrollForNavbar() {
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const el = document.getElementById(id);
    if (el) {
      const offset = 130; // Navbar height ke barabar adjust karo
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }
}

// Page load pe scroll adjust karo
window.addEventListener('load', () => {
  adjustScrollForNavbar();
});

// Hashchange pe bhi scroll adjust karo (jab user menu se click kare aur URL me hash badle)
window.addEventListener('hashchange', () => {
  adjustScrollForNavbar();
});