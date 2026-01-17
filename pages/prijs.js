document.addEventListener("DOMContentLoaded", () => {

    const baseServices = {
      dames: [
        { title: "Kort haar (30–45 min)", desc: "Knippen & föhnen", price: 58 },
        { title: "Halflang haar", desc: "45 minuten knippen & föhnen", price: 74 },
        { title: "Lang haar", desc: "60 minuten knippen & föhnen", price: 89 },
        { title: "Föhnen (onder schouderlengte)", desc: "Stevig geföhnd", price: 55 },
        { title: "Föhnen (schouderlengte en korter)", desc: "In model geföhnd", price: 40 },
        { title: "Uitgroei + knippen", desc: "Tot 1,5 cm uitgroei", price: 140 },
        { title: "Volledige kleuring + knippen", desc: "Meer dan alleen uitgroei", price: 170 },
        { title: "Uitgroei kleuren", desc: "Zonder knippen", price: 65 },
        { title: "Volledige kleuring", desc: "Inclusief snel drogen", price: 110 },
        { title: "Intensieve verzorging", desc: "O&M herstellende behandeling", price: 20 },
        { title: "Olaplex behandeling", desc: "Herstelt en versterkt het haar", price: 40 },
        { title: "Urban Alchemy cleanse", desc: "Diep reinigende behandeling", price: 30 }
      ],

      heren: [
        { title: "Kort haar", desc: "30–45 minuten knippen & stylen", price: 58 },
        { title: "Halflang haar", desc: "45 minuten knippen & föhnen", price: 74 },
        { title: "Lang haar", desc: "60 minuten knippen & föhnen", price: 89 }
      ],

      kinderen: [
        { title: "Kinderen t/m 12 jaar", desc: "Alleen buiten piekuren", price: 35 }
      ]
    };

  const extendedServices = { ...baseServices };

  const topServices = {
    ...extendedServices,
    dames: [
      ...extendedServices.dames,
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

  const prices = {
    esmeralda: extendedServices,
    danny: {
      dames: topServices.dames.map(s => ({ ...s, price: Math.round(s.price * 1.1) })),
      heren: topServices.heren.map(s => ({ ...s, price: Math.round(s.price * 1.1) })),
      kinderen: topServices.kinderen.map(s => ({ ...s, price: Math.round(s.price * 1.1) }))
    },
    dorette: baseServices
  };

  const roles = {
    danny: "Titel: Topstylist",
    esmeralda: "Titel: Hairstylist",
    dorette: "Titel: Hairstylist"
  };

  function render(category, list) {
    const el = document.getElementById(category);
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

  function loadKapper(name) {
    const roleEl = document.getElementById("kapperRole");
    if (roleEl) {
      roleEl.innerText = roles[name];
    }

    render("dames", prices[name].dames);
    render("heren", prices[name].heren);
    render("kinderen", prices[name].kinderen);
  }

  document.querySelectorAll(".kapper-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".kapper-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadKapper(btn.dataset.kapper);
    });
  });

  // initial load
  loadKapper("danny");

});
