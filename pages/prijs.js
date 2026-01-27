document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BASIS SERVICES
  ========================= */

    const baseServices = {
      knippen: [
        { title: "Kort haar", desc: "30–45 min knippen & föhnen", price: 58 },
        { title: "Halflang haar", desc: "45 min knippen & föhnen", price: 74 },
        { title: "Lang haar", desc: "60 min knippen & föhnen", price: 89 }
      ],

      styling: [
        { title: "Föhnen (onder schouderlengte)", desc: "In model geföhnd", price: 55 },
        { title: "Föhnen (schouder en korter)", desc: "In model geföhnd", price: 40 }
      ],

      kleuren: [
        { title: "Uitgroei + knippen", desc: "Tot 1,5 cm uitgroei + knippen", price: 140 },
        { title: "Volledige kleuring + knippen", desc: "Meer dan alleen uitgroei", price: 170 },
        { title: "Uitgroei", desc: "Tot 1,5 cm uitgroei", price: 65 },
        { title: "Volledige kleuring", desc: "Meer dan alleen uitgroei + snel drogen", price: 110 },
        { title: "Face frame", desc: "Highlights rond het gezicht (¼)", price: 70 }
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

    const topStylistExtras = [
      { title: "Halve coupe highlights", desc: "Highlights op ½ van het haar", price: 130 },
      { title: "Volledige coupe highlights", desc: "Highlights over het gehele haar", price: 180 }
    ];


  /* =========================
     PRIJZEN PER KAPPER
  ========================= */

    const prices = {
      danny: {
        knippen: baseServices.knippen.map(s => ({
          ...s,
          price: Math.round(s.price * 1.1) // topstylist opslag
        })),

        styling: baseServices.styling.map(s => ({
          ...s,
          price: Math.round(s.price * 1.1)
        })),

        kleuren: [
          ...baseServices.kleuren.map(s => ({
            ...s,
            price: Math.round(s.price * 1.1)
          })),
          ...topStylistExtras.map(s => ({
            ...s,
            price: Math.round(s.price * 1.1)
          }))
        ],

        verzorging: [],   // Danny doet GEEN behandelingen
        kinderen: []     // Danny doet GEEN kinderen
      },

      esmeralda: {
        knippen: baseServices.knippen,
        styling: baseServices.styling,

        kleuren: baseServices.kleuren.filter(s =>
          s.title !== "Halve coupe highlights" &&
          s.title !== "Volledige coupe highlights"
        ),

        verzorging: baseServices.verzorging,
        kinderen: baseServices.kinderen
      },

      dorette: {
        knippen: baseServices.knippen,
        styling: baseServices.styling,

        kleuren: baseServices.kleuren.filter(s =>
          s.title !== "Face frame" &&
          s.title !== "Halve coupe highlights" &&
          s.title !== "Volledige coupe highlights"
        ),

        verzorging: baseServices.verzorging,
        kinderen: baseServices.kinderen
      },

      andy: {
        knippen: [],
        styling: baseServices.styling,

        kleuren: baseServices.kleuren.filter(s =>
          s.title !== "Uitgroei + knippen" &&
          s.title !== "Volledige kleuring + knippen" &&
          s.title !== "Face frame" &&
          s.title !== "Halve coupe highlights" &&
          s.title !== "Volledige coupe highlights" &&
          s.title !== "Volledige kleuring"
        ),
        verzorging: baseServices.verzorging,
        kinderen: baseServices.kinderen
      }
    };

  /* =========================
     ROLLEN
  ========================= */

  const roles = {
    danny: "Titel: Topstylist",
    esmeralda: "Titel: Hairstylist",
    dorette: "Titel: Hairstylist",
    andy: "Titel: Junior Stylist"
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

  function toggleColumn(id, list) {
      const column = document.getElementById(id).parentElement;

      if (!list || list.length === 0) {
          column.style.display = "none";
      } else {
          column.style.display = "block";
          render(id, list);
      }
  }

    function loadKapper(name) {
      document.getElementById("kapperRole").innerText = roles[name];

      toggleColumn("dames", prices[name].knippen);
      toggleColumn("styling", prices[name].styling);
      toggleColumn("heren", prices[name].kleuren);
      toggleColumn("verzorgende-behandelingen", prices[name].verzorging);
      toggleColumn("kinderen", prices[name].kinderen);
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
