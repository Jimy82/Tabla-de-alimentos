console.log("APP JS CARGADO v2");

document.addEventListener("DOMContentLoaded", () => {
  let foods = [];
  let currentFoods = [];

  let sortColumn = null;
  let sortDirection = 1;

  const tableBody = document.querySelector("#food-table tbody");
  const searchInput = document.getElementById("search-input");
  const gramsInput = document.getElementById("grams-input");
  const resultContainer = document.getElementById("result-container");
  const themeToggle = document.getElementById("theme-toggle");

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function getGlucemicoClass(valor) {
    if (valor < 50) {
      return "glucemico-bajo";
    }

    if (valor <= 75) {
      return "glucemico-medio";
    }

    return "glucemico-alto";
  }

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-mode");
      if (themeToggle) themeToggle.textContent = "Modo oscuro";
    } else {
      document.body.classList.remove("light-mode");
      if (themeToggle) themeToggle.textContent = "Modo claro";
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);
  }

  function toggleTheme() {
    const newTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }

  function getImageCandidates(food) {
    const slug = slugify(food.nombre);

    const candidates = [
      `imagenes/${slug}.webp`,
      `imagenes/${slug}.jpg`,
      `imagenes/${slug}.jpeg`,
      `imagenes/${slug}.png`
    ];

    if (food.imagen && typeof food.imagen === "string") {
      candidates.push(food.imagen);
    }

    return [...new Set(candidates)];
  }

  function attachImageFallback(img, candidates) {
    let index = 0;

    function tryNext() {
      index++;

      if (index < candidates.length) {
        img.src = candidates[index];
      } else {
        img.onerror = null;
        img.src = "imagenes/no-disponible.webp";
      }
    }

    img.onerror = tryNext;
    img.src = candidates[0];
  }

  function createTableRow(food) {
    const row = document.createElement("tr");
    const candidates = getImageCandidates(food);

    row.innerHTML = `
      <td data-label="Tipo"><span>${food.tipo}</span></td>
      <td data-label="Nombre"><span>${food.nombre}</span></td>
      <td data-label="Gramos por ración"><span>${food.hidratos}</span></td>
      <td data-label="Índice glucémico">
        <span class="${getGlucemicoClass(food.glucemico)}">${food.glucemico}</span>
      </td>
      <td data-label="URL"><a href="${food.url}" target="_blank" rel="noopener noreferrer">Saber más</a></td>
      <td data-label="Imagen"><img alt="${food.nombre}"></td>
    `;

    const img = row.querySelector("img");
    attachImageFallback(img, candidates);

    return row;
  }

  function renderTable(data) {
    currentFoods = data;
    tableBody.innerHTML = "";

    data.forEach(food => {
      tableBody.appendChild(createTableRow(food));
    });
  }

  function filterFoods(term) {
    const searchTerm = term.trim().toLowerCase();

    if (searchTerm === "") {
      renderTable(foods);
      return;
    }

    const filtered = foods.filter(food =>
      food.nombre.toLowerCase().includes(searchTerm)
    );

    renderTable(filtered);
  }

  function calculateRations() {
    const grams = parseFloat(gramsInput.value);
    const search = searchInput.value.trim().toLowerCase();

    if (search === "" || isNaN(grams) || grams <= 0) {
      resultContainer.textContent = "";
      return;
    }

    const filtered = foods.filter(food =>
      food.nombre.toLowerCase().includes(search)
    );

    if (filtered.length === 0) {
      resultContainer.textContent = "No se han encontrado alimentos para calcular.";
      return;
    }

    const result = filtered.map(food => {
      const gramosPorRacion = food.hidratos;
      const rations = grams / gramosPorRacion;
      return `${grams} g de ${food.nombre} = ${rations.toFixed(2)} raciones`;
    });

    resultContainer.textContent = result.join(" | ");
  }

  function sortFoods(column) {
    if (sortColumn === column) {
      sortDirection *= -1;
    } else {
      sortColumn = column;
      sortDirection = 1;
    }

    const sorted = [...currentFoods].sort((a, b) => {
      let valA = a[column];
      let valB = b[column];

      if (typeof valA === "string") {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (valA > valB) return sortDirection;
      if (valA < valB) return -sortDirection;
      return 0;
    });

    renderTable(sorted);
  }

  searchInput.addEventListener("input", () => {
    filterFoods(searchInput.value);
    calculateRations();
  });

  gramsInput.addEventListener("input", calculateRations);

  if (themeToggle) {
    themeToggle.onclick = toggleTheme;
  }

  document.querySelectorAll(".sortable").forEach(header => {
    header.addEventListener("click", () => {
      const column = header.dataset.column;
      sortFoods(column);
    });
  });

  initTheme();

  fetch("foods.json")
    .then(res => res.json())
    .then(data => {
      foods = data;
      currentFoods = foods;
      renderTable(foods);
    })
    .catch(err => {
      console.error(err);
      resultContainer.textContent = "Error al cargar los alimentos.";
    });
});