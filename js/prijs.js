document.addEventListener("DOMContentLoaded", () => {

  const prices = {
    danny: {
      knippen: [
        { title_nl: "Kort haar",     title_en: "Short hair",   desc_nl: "30–45 min knippen & föhnen", desc_en: "30–45 min cut & blowdry", price: 64 },
        { title_nl: "Halflang haar", title_en: "Medium hair",  desc_nl: "45–60 min knippen & föhnen", desc_en: "45–60 min cut & blowdry", price: 82 },
        { title_nl: "Lang haar",     title_en: "Long hair",    desc_nl: "60 min knippen & föhnen",    desc_en: "60 min cut & blowdry",    price: 98 }
      ],
      styling: [
        { title_nl: "Föhnen (langer dan schouderlengte)", title_en: "Blowdry (longer than shoulder length)", desc_nl: "In model geföhnd", desc_en: "Blow-dried to shape", price: 55 },
        { title_nl: "Föhnen (op de schouderlengte en korter)",   title_en: "Blowdry (shoulder length & above)", desc_nl: "In model geföhnd", desc_en: "Blow-dried to shape", price: 40 }
      ],
      kleuren: [
        { title_nl: "Uitgroei + knippen",           title_en: "Regrowth + Cut",    desc_nl: "Tot 1,5 cm uitgroei + knippen",         desc_en: "Regrowth till 1.5cm + cut",          price: 140 },
        { title_nl: "Volledige kleuring + knippen", title_en: "Total Color + Cut", desc_nl: "Meer dan alleen uitgroei + knippen",     desc_en: "Anything more than regrowth + cut",  price: 170 },
        { title_nl: "Uitgroei",                     title_en: "Regrowth",          desc_nl: "Tot 1,5 cm uitgroei",                   desc_en: "Regrowth till 1.5cm",                price: 65  },
        { title_nl: "Volledige kleuring",           title_en: "Total Color",       desc_nl: "Meer dan alleen uitgroei + snel drogen", desc_en: "Anything more than regrowth + quick dry", price: 110 },
        { title_nl: "Face frame",                   title_en: "Face Frame",        desc_nl: "Highlights rond het gezicht (¼)",        desc_en: "A few highlights around the front (¼)", price: 70 },
        { title_nl: "Halve coupe highlights",       title_en: "Half Head",         desc_nl: "Highlights op ½ van het haar",           desc_en: "Half head highlights + quick dry",   price: 130 },
        { title_nl: "Volledige coupe highlights",   title_en: "Full Head",         desc_nl: "Highlights over het gehele haar",        desc_en: "Full head of highlights",            price: 180 }
      ],
      verzorging: [],
      kinderen:   []
    },

    esmeralda: {
      knippen: [
        { title_nl: "Kort haar",     title_en: "Short hair",  desc_nl: "30–45 min knippen & föhnen", desc_en: "30–45 min cut & blowdry", price: 58 },
        { title_nl: "Halflang haar", title_en: "Medium hair", desc_nl: "45 min knippen & föhnen",    desc_en: "45 min cut & blowdry",    price: 74 },
        { title_nl: "Lang haar",     title_en: "Long hair",   desc_nl: "60 min knippen & föhnen",    desc_en: "60 min cut & blowdry",    price: 89 }
      ],
      styling: [
        { title_nl: "Föhnen (langer dan schouderlengte)", title_en: "Blowdry (longer than shoulder length)",  desc_nl: "In model geföhnd", desc_en: "Blow-dried to shape", price: 55 },
        { title_nl: "Föhnen (op de schouderlengte en korter)",   title_en: "Blowdry (shoulder length & above)", desc_nl: "In model geföhnd", desc_en: "Blow-dried to shape", price: 40 }
      ],
      kleuren: [
        { title_nl: "Uitgroei + knippen",           title_en: "Regrowth + Cut",    desc_nl: "Tot 1,5 cm uitgroei + knippen",         desc_en: "Regrowth till 1.5cm + cut",              price: 140 },
        { title_nl: "Volledige kleuring + knippen", title_en: "Total Color + Cut", desc_nl: "Meer dan alleen uitgroei + knippen",     desc_en: "Anything more than regrowth + cut",      price: 170 },
        { title_nl: "Uitgroei",                     title_en: "Regrowth",          desc_nl: "Tot 1,5 cm uitgroei",                   desc_en: "Regrowth till 1.5cm",                    price: 65  },
        { title_nl: "Volledige kleuring",           title_en: "Total Color",       desc_nl: "Meer dan alleen uitgroei + snel drogen", desc_en: "Anything more than regrowth + quick dry", price: 110 },
        { title_nl: "Face frame",                   title_en: "Face Frame",        desc_nl: "Highlights rond het gezicht (¼)",        desc_en: "A few highlights around the front (¼)",  price: 70  }
      ],
      verzorging: [
        { title_nl: "Mini Headspa",         title_en: "Mini Headspa",         desc_nl: "30 min massage & snel föhnen", desc_en: "30 min massage & quick blowdry", price: 35 },
        { title_nl: "Olaplex behandeling",  title_en: "Olaplex Treatment",    desc_nl: "Herstelt en versterkt het haar", desc_en: "Repairs and strengthens hair",  price: 40 }
      ],
      kinderen: [
        { title_nl: "Kinderen t/m 12 jaar", title_en: "Kids up to 12", desc_nl: "Alleen buiten piekuren", desc_en: "Off-peak hours only", price: 35 }
      ]
    },

    dorette: {
      knippen: [
        { title_nl: "Kort haar",     title_en: "Short hair",  desc_nl: "30–45 min knippen & föhnen", desc_en: "30–45 min cut & blowdry", price: 58 },
        { title_nl: "Halflang haar", title_en: "Medium hair", desc_nl: "45 min knippen & föhnen",    desc_en: "45 min cut & blowdry",    price: 74 },
        { title_nl: "Lang haar",     title_en: "Long hair",   desc_nl: "60 min knippen & föhnen",    desc_en: "60 min cut & blowdry",    price: 89 }
      ],
      styling: [
        { title_nl: "Föhnen (langer dan schouderlengte)", title_en: "Blowdry (longer than shoulder length)",  desc_nl: "In model geföhnd", desc_en: "Blow-dried to shape", price: 55 },
        { title_nl: "Föhnen (op de schouderlengte en korter)",   title_en: "Blowdry (shoulder length & above)", desc_nl: "In model geföhnd", desc_en: "Blow-dried to shape", price: 40 }
      ],
      kleuren: [
        { title_nl: "Uitgroei + knippen",           title_en: "Regrowth + Cut",    desc_nl: "Tot 1,5 cm uitgroei + knippen",         desc_en: "Regrowth till 1.5cm + cut",              price: 140 },
        { title_nl: "Volledige kleuring + knippen", title_en: "Total Color + Cut", desc_nl: "Meer dan alleen uitgroei + knippen",     desc_en: "Anything more than regrowth + cut",      price: 170 },
        { title_nl: "Uitgroei",                     title_en: "Regrowth",          desc_nl: "Tot 1,5 cm uitgroei",                   desc_en: "Regrowth till 1.5cm",                    price: 65  },
        { title_nl: "Volledige kleuring",           title_en: "Total Color",       desc_nl: "Meer dan alleen uitgroei + snel drogen", desc_en: "Anything more than regrowth + quick dry", price: 110 }
      ],
      verzorging: [
        { title_nl: "Mini Headspa",        title_en: "Mini Headspa",      desc_nl: "30 min massage & snel föhnen",   desc_en: "30 min massage & quick blowdry", price: 35 },
        { title_nl: "Olaplex behandeling", title_en: "Olaplex Treatment", desc_nl: "Herstelt en versterkt het haar", desc_en: "Repairs and strengthens hair",   price: 40 }
      ],
      kinderen: [
        { title_nl: "Kinderen t/m 12 jaar", title_en: "Kids up to 12", desc_nl: "Alleen buiten piekuren", desc_en: "Off-peak hours only", price: 35 }
      ]
    },

    andy: {
      knippen: [
        { title_nl: "Kort haar", title_en: "Short hair", desc_nl: "30–45 min knippen & föhnen", desc_en: "30–45 min cut & blowdry", price: 58 }
      ],
      styling: [
        { title_nl: "Föhnen (langer dan schouderlengte)", title_en: "Blowdry (longer than shoulder length)",  desc_nl: "In model geföhnd", desc_en: "Blow-dried to shape", price: 55 },
        { title_nl: "Föhnen (op de schouderlengte en korter)",   title_en: "Blowdry (shoulder length & above)", desc_nl: "In model geföhnd", desc_en: "Blow-dried to shape", price: 40 }
      ],
      kleuren: [
        { title_nl: "Uitgroei", title_en: "Regrowth", desc_nl: "Tot 1,5 cm uitgroei", desc_en: "Regrowth till 1.5cm", price: 65 }
      ],
      verzorging: [
        { title_nl: "Mini Headspa",        title_en: "Mini Headspa",      desc_nl: "30 min massage & snel föhnen",   desc_en: "30 min massage & quick blowdry", price: 35 },
        { title_nl: "Olaplex behandeling", title_en: "Olaplex Treatment", desc_nl: "Herstelt en versterkt het haar", desc_en: "Repairs and strengthens hair",   price: 40 }
      ],
      kinderen: [
        { title_nl: "Kinderen t/m 12 jaar", title_en: "Kids up to 12", desc_nl: "Alleen buiten piekuren", desc_en: "Off-peak hours only", price: 35 }
      ]
    }
  };

  const roles = {
    danny:     { nl: "Titel: Topstylist",    en: "Title: Top Stylist"   },
    esmeralda: { nl: "Titel: Hairstylist",   en: "Title: Hairstylist"   },
    dorette:   { nl: "Titel: Hairstylist",   en: "Title: Hairstylist"   },
    andy:      { nl: "Titel: Junior Stylist", en: "Title: Junior Stylist" }
  };

  function getLang() {
    return localStorage.getItem("lang") || "nl";
  }

  function render(id, list) {
    const el = document.getElementById(id);
    if (!el) return;
    const lang = getLang();
    el.innerHTML = list.map(s => `
      <div class="service">
        <div class="service-title">${lang === "en" ? s.title_en : s.title_nl}</div>
        <div class="service-desc">${lang === "en" ? s.desc_en : s.desc_nl}</div>
        <div class="service-price">€${s.price},00</div>
      </div>
    `).join("");
  }

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
    const lang = getLang();
    document.getElementById("kapperRole").innerText = roles[name][lang];
    toggleColumn("dames",                     prices[name].knippen);
    toggleColumn("styling",                   prices[name].styling);
    toggleColumn("heren",                     prices[name].kleuren);
    toggleColumn("verzorgende-behandelingen", prices[name].verzorging);
    toggleColumn("kinderen",                  prices[name].kinderen);
  }

  // Active kapper tracker
  let activeKapper = "danny";

  document.querySelectorAll(".kapper-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".kapper-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeKapper = btn.dataset.kapper;
      loadKapper(activeKapper);
    });
  });

  // Re-render when language changes
  document.addEventListener("langChanged", () => {
    loadKapper(activeKapper);
  });

  loadKapper("danny");

  // Price modal
  const modal    = document.getElementById("priceModal");
  const closeBtn = document.getElementById("closePriceModal");
  const openLinks = [
    document.getElementById("priceInfoLink"),
    document.getElementById("priceInfoLinkBottom")
  ];

  openLinks.forEach(link => {
    if (!link) return;
    link.addEventListener("click", e => {
      e.preventDefault();
      modal.classList.remove("hidden");
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  if (modal) modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // Treatment modal
  const treatmentModal   = document.getElementById("treatmentModal");
  const treatmentLink    = document.getElementById("treatmentInfoLink");
  const closeTreatmentBtn = document.getElementById("closeTreatmentModal");

  if (treatmentLink) treatmentLink.addEventListener("click", e => {
    e.preventDefault();
    treatmentModal.classList.remove("hidden");
  });
  if (closeTreatmentBtn) closeTreatmentBtn.addEventListener("click", () => treatmentModal.classList.add("hidden"));
  if (treatmentModal) treatmentModal.addEventListener("click", e => {
    if (e.target === treatmentModal) treatmentModal.classList.add("hidden");
  });

});
