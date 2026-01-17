document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BASIS SERVICES
  ========================= */

  const baseServices = {
    knippen: [
      { title: "Kort haar", desc: "30–45 minuten knippen & föhnen", price: 58 },
      { title: "Halflang haar", desc: "45 minuten knippen & föhnen", price: 74 },
      { title: "Lang haar", desc: "60 minuten knippen & föhnen", price: 89 },
      { title: "Föhnen (onder schouderlengte)", desc: "Stevig geföhnd", price: 55 },
      { title: "Föhnen (schouderlengte en korter)", desc: "In model geföhnd", price: 40 }
    ],

    kleuren: [
      { title: "Uitgroei + knippen", desc: "Tot 1,5 cm uitgroei", price: 140 },
      { title: "Volledige kleuring + knippen", desc: "Meer dan alleen uitgroei", price: 170 },
      { title: "Uitgroei kleuren", desc: "Zonder knippen", price: 65 },
      { title: "Volledige kleuring", desc: "Inclusief snel drogen", price: 110 }
    ],

    verzorging: [
      { title: "Intensieve verzorging", desc: "O&M herstellende behandeling", price: 20 },
      { title: "Olaplex behandeling", desc: "Herstelt en versterkt het haar", price: 40 },
      { title: "Urban Alchemy cleanse", desc: "Diep reinigende behandeling", price: 30 }
    ],

    kinderen: [
      { title: "Kinderen t/m 12 jaar", desc: "Alleen buiten piekuren", price: 35 }
    ]
  };


  const halfTopServices = {
    ...baseServices,
    kleuren: [
      ...baseServices.kleuren,
      {
        title: "Face frame",
        desc: "Subtiele highlights rond het gezicht (¼ van het haar)",
        price: 70
      }
    ]
  };


  /* =========================
     TOPSTYLIST EXTRA'S
  ========================= */

  const topServices = {
    ...baseServices,
    kleuren: [
      ...baseServices.kleuren,
      {
        title: "Face frame",
        desc: "Subtiele highlights rond het gezicht (¼ van het haar)",
        price: 70
      },
      {
        title: "Halve coupe highlights",
        desc: "Highlights op ½ van het haar, inclusief snel drogen",
        price: 130
      },
      {
        title: "Volledige coupe highlights",
        desc: "Highlights over het gehele haar",
        price: 180
      }
    ]
  };

    

const kleurenZonderFaceFrame = baseServices.kleuren;

  /* =========================
     PRIJZEN PER KAPPER
  ========================= */

const prices = {
  esmeralda: {
    ...baseServices,
    kleuren: halfTopServices.kleuren // WEL face frame
  },

  dorette: {
    ...baseServices,
    kleuren: kleurenZonderFaceFrame // GEEN face frame
  },

  danny: {
    knippen: topServices.knippen.map(s => ({
      ...s,
      price: Math.round(s.price * 1.1)
    })),
    kleuren: topServices.kleuren.map(s => ({
      ...s,
      price: Math.round(s.price * 1.1)
    })),
    verzorging: topServices.verzorging.map(s => ({
      ...s,
      price: Math.round(s.price * 1.1)
    })),
    kinderen: [] // Danny doet geen kinderen
  }
};

  /* =========================
     ROLLEN
  ========================= */

  const roles = {
    danny: "Titel: Topstylist",
    esmeralda: "Titel: Hairstylist",
    dorette: "Titel: Hairstylist"
  };

  /* =========================
     RENDER FUNCTIE
  ========================= */

  function render(id, list) {
    const el = document.getElementById(id);
    if (!el) return;

    el.innerHTML = "";
    list.forEach(s => {
      el.innerHTML += `
        <div class="service">
          <div class="service-title">${s.title}</div>
          ${s.desc ? `<div class="service-desc">${s.desc}</div>` : ""}
          <div class="service-price">€${s.price},00</div>
        </div>
      `;
    });
  }

  /* =========================
     KAPPER LADEN
  ========================= */

  function loadKapper(name) {
    document.getElementById("kapperRole").innerText = roles[name];

    render("dames", prices[name].knippen);
    render("heren", prices[name].kleuren);
    render("verzorgende-behandelingen", prices[name].verzorging);

    const kinderenColumn = document.getElementById("kinderen").parentElement;

    if (prices[name].kinderen.length === 0) {
      kinderenColumn.style.display = "none";
    } else {
      kinderenColumn.style.display = "block";
      render("kinderen", prices[name].kinderen);
    }
  }

  /* =========================
     BUTTON EVENTS
  ========================= */

  document.querySelectorAll(".kapper-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".kapper-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadKapper(btn.dataset.kapper);
    });
  });

  /* =========================
     INIT
  ========================= */

  loadKapper("danny");

});



const modal = document.getElementById("priceModal");
const openLinks = [
  document.getElementById("priceInfoLink"),
  document.getElementById("priceInfoLinkBottom")
];
const closeBtn = document.getElementById("closePriceModal");

openLinks.forEach(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();
    modal.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});
