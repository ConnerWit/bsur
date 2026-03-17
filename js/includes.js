const depth = window.location.pathname.includes("/src/") ? "../" : "./";

const navbarHTML = `
<header class="navbar">
  <a href="${depth}index.html">
    <img src="${depth}assets/logo.png" alt="BSUR Hair logo" class="logo">
  </a>
  <div class="navbar-right">
    <nav>
      <ul>
        <li><a href="${depth}index.html" data-i18n="nav.home">Home</a></li>
        <li><a href="${depth}src/ons-team.html" data-i18n="nav.team">Ons Concept &amp; Team</a></li>
        <li><a href="${depth}src/prijslijst.html" data-i18n="nav.prijslijst">Prijslijst</a></li>
        <li><a href="${depth}src/fotos.html" data-i18n="nav.fotos">Foto's</a></li>
        <li><a href="${depth}src/faq.html" data-i18n="nav.faq">FAQ</a></li>
        <li><a href="${depth}src/contact.html" data-i18n="nav.contact">Contact</a></li>
      </ul>
    </nav>
    <button id="lang-toggle" class="lang-toggle">EN</button>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<nav class="mobile-nav" id="mobile-nav">
  <a href="${depth}index.html" data-i18n="nav.home">Home</a>
  <a href="${depth}src/ons-team.html" data-i18n="nav.team">Ons Concept &amp; Team</a>
  <a href="${depth}src/prijslijst.html" data-i18n="nav.prijslijst">Prijslijst</a>
  <a href="${depth}src/fotos.html" data-i18n="nav.fotos">Foto's</a>
  <a href="${depth}src/faq.html" data-i18n="nav.faq">FAQ</a>
  <a href="${depth}src/contact.html" data-i18n="nav.contact">Contact</a>
</nav>`;

const footerHTML = `
<footer>
  <div class="footer-info">
    <h3 data-i18n="footer.contact">Contact</h3>
    <p data-i18n="footer.telefoon">Telefoon: +31 6 22492470</p>
    <p data-i18n="footer.adres">Van Speykstraat 141<br>3014 VJ Rotterdam</p>
  </div>
  <div class="footer-socials">
    <p data-i18n="footer.volg">Volg ons:</p>
    <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">LinkedIn</a>
  </div>
  <p class="copyright" data-i18n="footer.copyright">© BSUR Hair 2025. Alle rechten voorbehouden.</p>
  <a href="#" id="privacyLink" data-i18n="footer.privacy">Privacyverklaring</a> -
  <a href="${depth}src/algemene-voorwaarden.html" data-i18n="footer.voorwaarden">Algemene voorwaarden</a>
</footer>

<div id="privacyModal" class="modal hidden">
  <div class="modal-content">
    <button class="close-btn" id="closePrivacy">&times;</button>
    <h2 data-i18n="privacy_modal.title">Privacyverklaring</h2>
    <p data-i18n="privacy_modal.p1"></p>
    <p data-i18n="privacy_modal.p2"></p>
    <p data-i18n="privacy_modal.p3"></p>
    <p data-i18n="privacy_modal.p4"></p>
  </div>
</div>`;

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar-placeholder");
  const footer = document.getElementById("footer-placeholder");

  if (navbar) navbar.innerHTML = navbarHTML;
  if (footer) footer.innerHTML = footerHTML;

  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileNav.classList.toggle("open");
    });

    // Close on nav link click
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileNav.classList.remove("open");
      });
    });
  }

  // Highlight active nav link
  document.querySelectorAll(".navbar a").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Privacy modal
  const privacyLink = document.getElementById("privacyLink");
  const modal       = document.getElementById("privacyModal");
  const closeBtn    = document.getElementById("closePrivacy");

  if (privacyLink && modal && closeBtn) {
    privacyLink.addEventListener("click", e => {
      e.preventDefault();
      modal.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.add("hidden");
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") modal.classList.add("hidden");
    });
  }
});
