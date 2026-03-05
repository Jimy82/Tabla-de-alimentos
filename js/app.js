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

function createTableRow(food) {

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${food.tipo}</td>
    <td>${food.nombre}</td>
    <td>${food.hidratos}</td>
    <td>${food.glucemico}</td>
    <td><a href="${food.url}" target="_blank">Saber más</a></td>
    <td><img src="${food.imagen}" width="80"></td>
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

  if(term === ""){
    renderTable(foods);
    return;
  }

  const filtered = foods.filter(food =>
    food.nombre.toLowerCase().includes(term.toLowerCase())
  );

  renderTable(filtered);

}

function calculateRations(){

  const grams = parseFloat(gramsInput.value);
  const search = searchInput.value.trim();

  if(search === "" || isNaN(grams)){
    resultContainer.textContent = "";
    return;
  }

  const filtered = foods.filter(food =>
    food.nombre.toLowerCase().includes(search.toLowerCase())
  );

  let result = "";

  filtered.forEach(food => {

    const rations = grams / food.hidratos;

    result += `${food.nombre}: ${rations.toFixed(2)} raciones | `;

  });

  resultContainer.textContent = result;

}

function sortFoods(column){

  if(sortColumn === column){
    sortDirection *= -1;
  }else{
    sortColumn = column;
    sortDirection = 1;
  }

  const sorted = [...currentFoods].sort((a,b)=>{

    let valA = a[column];
    let valB = b[column];

    if(typeof valA === "string"){
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }

    if(valA > valB) return sortDirection;
    if(valA < valB) return -sortDirection;

    return 0;

  });

  renderTable(sorted);

}

searchInput.addEventListener("input", ()=>{
  filterFoods(searchInput.value);
  calculateRations();
});

gramsInput.addEventListener("input", calculateRations);

document.querySelectorAll(".sortable").forEach(header=>{

  header.addEventListener("click", ()=>{

    const column = header.dataset.column;
    sortFoods(column);

  });

});

fetch("foods.json")
.then(res=>res.json())
.then(data=>{

  foods = data;
  currentFoods = foods;

  renderTable(foods);

})
.catch(err=>console.error(err));

});