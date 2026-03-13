console.log("APP JS CARGADO");

document.addEventListener("DOMContentLoaded", () => {
  let foods = [];
  let currentFoods = [];

  let sortColumn = null;
  let sortDirection = 1;

  const tableBody = document.querySelector("#food-table tbody");
  const searchInput = document.getElementById("search-input");
  const gramsInput = document.getElementById("grams-input");
  const resultContainer = document.getElementById("result-container");

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function createTableRow(food) {
    const row = document.createElement("tr");
    const imagePath = `imagenes/${slugify(food.nombre)}.webp`;

    row.innerHTML = `
      <td data-label="Tipo"><span>${food.tipo}</span></td>
      <td data-label="Nombre"><span>${food.nombre}</span></td>
      <td data-label="Gramos por ración"><span>${food.hidratos}</span></td>
      <td data-label="Índice glucémico"><span>${food.glucemico}</span></td>
      <td data-label="URL"><a href="${food.url}" target="_blank" rel="noopener noreferrer">Saber más</a></td>
      <td data-label="Imagen">
        <img src="${imagePath}" alt="${food.nombre}" onerror="this.onerror=null;this.src='imagenes/no-disponible.webp';">
      </td>
    `;

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

  document.querySelectorAll(".sortable").forEach(header => {
    header.addEventListener("click", () => {
      const column = header.dataset.column;
      sortFoods(column);
    });
  });

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