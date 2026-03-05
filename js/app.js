
console.log("APP JS CARGADO");
window.foods = [];

const tableBody = document.querySelector("#food-table tbody");
const searchInput = document.getElementById("search-input");
const gramsInput = document.getElementById("grams-input");
const resultContainer = document.getElementById("result-container");

function createTableRow(food) {

  const row = document.createElement("tr");

  const tipoCell = document.createElement("td");
  tipoCell.textContent = food.tipo;
  row.appendChild(tipoCell);

  const nombreCell = document.createElement("td");
  nombreCell.textContent = food.nombre;
  row.appendChild(nombreCell);

  const hidratosCell = document.createElement("td");
  hidratosCell.textContent = food.hidratos;
  row.appendChild(hidratosCell);

  const glucemicoCell = document.createElement("td");
  glucemicoCell.textContent = food.glucemico;

  if (food.glucemico < 50) glucemicoCell.style.color = "green";
  else if (food.glucemico <= 65) glucemicoCell.style.color = "orange";
  else glucemicoCell.style.color = "red";

  row.appendChild(glucemicoCell);

  const urlCell = document.createElement("td");
  const link = document.createElement("a");

  link.href = food.url;
  link.target = "_blank";
  link.textContent = "Saber más";

  urlCell.appendChild(link);
  row.appendChild(urlCell);

  const imagenCell = document.createElement("td");
  const image = document.createElement("img");

  image.src = food.imagen;
  image.alt = food.nombre;
  image.width = 80;

  imagenCell.appendChild(image);
  row.appendChild(imagenCell);

  return row;
}

function renderTable(foodsToShow) {

  tableBody.innerHTML = "";

  foodsToShow.forEach(food => {
    const row = createTableRow(food);
    tableBody.appendChild(row);
  });

}

function filterFoods(searchTerm) {

  console.log("buscando:", searchTerm);

  const filteredFoods = foods.filter(food =>
    food.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("resultados:", filteredFoods.length);

  renderTable(filteredFoods);
}

function calculateRations() {

  const search = searchInput.value.trim();
  const grams = parseFloat(gramsInput.value);

  if (search === "") {
    resultContainer.textContent = "";
    return;
  }

  if (isNaN(grams)) {
    resultContainer.textContent = "";
    return;
  }

  const filteredFoods = foods.filter(food =>
    food.nombre.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredFoods.length === 0) {
    resultContainer.textContent = "No se encontró alimento.";
    return;
  }

  let result = "";

  filteredFoods.forEach(food => {

    const rations = grams / food.hidratos;

    result += `${food.nombre}: ${rations.toFixed(2)} raciones | `;

  });

  resultContainer.textContent = result;
}

searchInput.addEventListener("input", () => {
  filterFoods(searchInput.value);
  calculateRations();
});

gramsInput.addEventListener("input", calculateRations);

fetch("foods.json")
  .then(res => res.json())
  .then(data => {
    window.foods = data;
    renderTable(foods);
  })
  .catch(error => console.error("Error cargando foods.json:", error));