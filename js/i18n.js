const isInSrc = window.location.pathname.includes("/src/");
const localesPath = isInSrc ? "../locales/" : "./locales/";

let currentLang = localStorage.getItem("lang") || "nl";
let translations = {};

async function loadTranslations(lang) {
  const res = await fetch(localesPath + lang + ".json");
  translations = await res.json();
}

function t(key) {
  const keys = key.split(".");
  let val = translations;
  for (const k of keys) {
    if (val === undefined) return key;
    val = val[k];
  }
  return val ?? key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });

  // Update lang toggle button
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = currentLang === "nl" ? "EN" : "NL";

  document.documentElement.lang = currentLang;
}

async function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  await loadTranslations(lang);
  applyTranslations();
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadTranslations(currentLang);
  applyTranslations();

  document.addEventListener("click", e => {
    if (e.target.id === "lang-toggle") {
      setLang(currentLang === "nl" ? "en" : "nl");
    }
  });
});
