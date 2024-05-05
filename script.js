const foods = [
  { tipo: 'Lacteos', nombre: 'Cuajada', hidratos: 200, glucemico: 35, },
  { tipo: 'Lacteos', nombre: 'Flan', hidratos: 50, glucemico: 10, },
  { tipo: 'Lacteos', nombre: 'Helado de crema', hidratos: 50, glucemico: 60, },
  { tipo: 'Lacteos', nombre: 'Helado de hielo', hidratos: 50, glucemico: 64, },
  { tipo: 'Lacteos', nombre: 'Helado sin azúcar', hidratos: 100, glucemico: 35, },
  { tipo: 'Lacteos', nombre: 'Kefir', hidratos: 200, glucemico: 35, },
  { tipo: 'Lacteos', nombre: 'Leche desnatada', hidratos: 200, glucemico: 32, },
  { tipo: 'Lacteos', nombre: 'Leche semidesnatada', hidratos: 200, glucemico: 30, },
  { tipo: 'Lacteos', nombre: 'Leche entera', hidratos: 200, glucemico: 27, },
  { tipo: 'Lacteos', nombre: 'Leche condensada', hidratos: 20, glucemico: 61, },
  { tipo: 'Lacteos', nombre: 'Leche en polvo', hidratos: 25, glucemico: 30, },
  { tipo: 'Lacteos', nombre: 'Nata liquida', hidratos: 300, glucemico: 15, },
  { tipo: 'Lacteos', nombre: 'Natillas', hidratos: 50, glucemico: 10, },
  { tipo: 'Lacteos', nombre: 'Petit suisse', hidratos: 70, glucemico: 40, },
  { tipo: 'Lacteos', nombre: 'Queso fresco', hidratos: 250, glucemico: 35, },
  { tipo: 'Lacteos', nombre: 'Yogur natural', hidratos: 200, glucemico: 35, },
  { tipo: 'Lacteos', nombre: 'Yogur desnatado sabores', hidratos: 125, glucemico: 35, },
  { tipo: 'Lacteos', nombre: 'Yogur liquido', hidratos: 70, glucemico: 35, },
  { tipo: 'Lacteos', nombre: 'Yogur Actimel', hidratos: 100, glucemico: 35, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Arroz cocido', hidratos: 38, glucemico: 70, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Arroz integral cocido', hidratos: 40, glucemico: 50, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Arroz hinchado', hidratos: 12, glucemico: 85, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Avena cocida', hidratos: 34, glucemico: 40, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Avena copos', hidratos: 15, glucemico: 40, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Boniato', hidratos: 50, glucemico: 50, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Cebada cocida', hidratos: 42, glucemico: 45, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Cereales desayuno', hidratos: 15, glucemico: 77, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Cereales All-bram', hidratos: 20, glucemico: 50, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Cuscus cocido', hidratos: 65, glucemico: 65, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Fideo de arroz', hidratos: 50, glucemico: 50, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Fideos de soja', hidratos: 40, glucemico: 10, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Galleta Digestiva', hidratos: 16, glucemico: 65, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Galleta Maria', hidratos: 15, glucemico: 70, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Galleta Principe', hidratos: 14, glucemico: 70, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Galleta sin azúcar', hidratos: 18, glucemico: 50, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Garbanzo cocido', hidratos: 50, glucemico: 35, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Guisantes', hidratos: 100, glucemico: 35, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Harina', hidratos: 15, glucemico: 78, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Harina de centeno', hidratos: 17, glucemico: 45, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Harina de soja', hidratos: 70, glucemico: 25, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Hojaldre horneado', hidratos: 24, glucemico: 10, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Judias blancas', hidratos: 50, glucemico: 35, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Lentejas', hidratos: 50, glucemico: 35, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Maiz en lata', hidratos: 50, glucemico: 65, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Muesli', hidratos: 15, glucemico: 65, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan blanco', hidratos: 20, glucemico: 70, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan de centeno', hidratos: 20, glucemico: 65, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan de molde', hidratos: 20, glucemico: 85, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan de hamburguesa', hidratos: 18, glucemico: 85, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan integral', hidratos: 23, glucemico: 40, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan rallado', hidratos: 15, glucemico: 70, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan tostado', hidratos: 15, glucemico: 70, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pan bastoncitos', hidratos: 15, glucemico: 70, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pasta', hidratos: 50, glucemico: 50, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Patata cocida', hidratos: 50, glucemico: 65, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Patata horno', hidratos: 35, glucemico: 60, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Patata frita', hidratos: 30, glucemico: 70, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Patatas chips', hidratos: 20, glucemico: 95, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Pure de patatas', hidratos: 80, glucemico: 90, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Quinoa', hidratos: 48, glucemico: 35, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Semola de trigo', hidratos: 90, glucemico: 67, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Soja hervida', hidratos: 100, glucemico: 15, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Sushi', hidratos: 45, glucemico: 42, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Tapioca', hidratos: 33, glucemico: 84, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Trigo sarraceno', hidratos: 42, glucemico: 40, },
  { tipo: 'Cereales, Harinas y Legumbres', nombre: 'Yuca', hidratos: 33, glucemico: 55, },
  { tipo: 'Frutas', nombre: 'Albaricoque', hidratos: 150, glucemico: 30, },
  { tipo: 'Frutas', nombre: 'Arandano', hidratos: 100, glucemico: 25, },
  { tipo: 'Frutas', nombre: 'Castana cruda', hidratos: 30, glucemico: 65, },
  { tipo: 'Frutas', nombre: 'Castana tostada', hidratos: 25, glucemico: 65, },
  { tipo: 'Frutas', nombre: 'Cereza', hidratos: 100, glucemico: 25, },
  { tipo: 'Frutas', nombre: 'Chirimoya', hidratos: 50, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Ciruela', hidratos: 100, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Coco fresco', hidratos: 200, glucemico: 45, },
  { tipo: 'Frutas', nombre: 'Datil', hidratos: 15, glucemico: 70, },
  { tipo: 'Frutas', nombre: 'Frambuesa', hidratos: 150, glucemico: 25, },
  { tipo: 'Frutas', nombre: 'Fresones', hidratos: 200, glucemico: 25, },
  { tipo: 'Frutas', nombre: 'Granada', hidratos: 70, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Grosella', hidratos: 200, glucemico: 25, },
  { tipo: 'Frutas', nombre: 'Grosella negra', hidratos: 140, glucemico: 15, },
  { tipo: 'Frutas', nombre: 'Higos', hidratos: 100, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Kiwi', hidratos: 100, glucemico: 50, },
  { tipo: 'Frutas', nombre: 'Litchi', hidratos: 70, glucemico: 50, },
  { tipo: 'Frutas', nombre: 'Mandarina', hidratos: 100, glucemico: 30, },
  { tipo: 'Frutas', nombre: 'Mango', hidratos: 100, glucemico: 50, },
  { tipo: 'Frutas', nombre: 'Manzana', hidratos: 100, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Manazana asada', hidratos: 50, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Melocoton', hidratos: 100, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Melocoton conserva', hidratos: 50, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Melon', hidratos: 200, glucemico: 60, },
  { tipo: 'Frutas', nombre: 'Membrillo', hidratos: 150, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Membrillo dulce de', hidratos: 20, glucemico: 60, },
  { tipo: 'Frutas', nombre: 'Moras', hidratos: 150, glucemico: 25, },
  { tipo: 'Frutas', nombre: 'Naranja', hidratos: 100, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Nectarina', hidratos: 100, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Nispero', hidratos: 100, glucemico: 55, },
  { tipo: 'Frutas', nombre: 'Pera', hidratos: 100, glucemico: 30, },
  { tipo: 'Frutas', nombre: 'Papaya', hidratos: 125, glucemico: 55, },
  { tipo: 'Frutas', nombre: 'Paraguayo', hidratos: 100, glucemico: 35, },
  { tipo: 'Frutas', nombre: 'Piña', hidratos: 100, glucemico: 45, },
  { tipo: 'Frutas', nombre: 'Platano', hidratos: 50, glucemico: 50, },
  { tipo: 'Frutas', nombre: 'Sandia', hidratos: 200, glucemico: 75, },
  { tipo: 'Frutas', nombre: 'Uva', hidratos: 50, glucemico: 45, },
  { tipo: 'Hortalizas', nombre: 'Acelga', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Ajo', hidratos: 40, glucemico: 30, },
  { tipo: 'Hortalizas', nombre: 'Alcachofa', hidratos: 300, glucemico: 20, },
  { tipo: 'Hortalizas', nombre: 'Apio', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Berenjena', hidratos: 300, glucemico: 20, },
  { tipo: 'Hortalizas', nombre: 'Brocoli', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Calabacin', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Cebolla', hidratos: 150, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Coliflor', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Endibia', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Judia verde', hidratos: 250, glucemico: 30, },
  { tipo: 'Hortalizas', nombre: 'Lechuga', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Nabo', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Palmitos', hidratos: 200, glucemico: 20, },
  { tipo: 'Hortalizas', nombre: 'Pepino', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Pimiento', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Puerro', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Rabano', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Remolacha', hidratos: 150, glucemico: 30, },
  { tipo: 'Hortalizas', nombre: 'Repollo', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Setas', hidratos: 300, glucemico: 15, },
  { tipo: 'Hortalizas', nombre: 'Tomate', hidratos: 300, glucemico: 30, },
  { tipo: 'Hortalizas', nombre: 'Zanahoria', hidratos: 150, glucemico: 30, },
  { tipo: 'Hortalizas', nombre: 'Zanahoria hervida', hidratos: 200, glucemico: 85, },
  { tipo: 'Frutos secos', nombre: 'Aceituna', hidratos: 250, glucemico: 15, },
  { tipo: 'Frutos secos', nombre: 'Albaricoque seco', hidratos: 15, glucemico: 35, },
  { tipo: 'Frutos secos', nombre: 'Almendra', hidratos: 150, glucemico: 15, },
  { tipo: 'Frutos secos', nombre: 'Avellana', hidratos: 150, glucemico: 15, },
  { tipo: 'Frutos secos', nombre: 'Cacahuete', hidratos: 100, glucemico: 15, },
  { tipo: 'Frutos secos', nombre: 'Ciruela pasa', hidratos: 150, glucemico: 15, },
  { tipo: 'Frutos secos', nombre: 'Datil seco', hidratos: 15, glucemico: 70, },
  { tipo: 'Frutos secos', nombre: 'Higo seco', hidratos: 15, glucemico: 40, },
  { tipo: 'Frutos secos', nombre: 'Nuez', hidratos: 300, glucemico: 15, },
  { tipo: 'Frutos secos', nombre: 'Piñon', hidratos: 300, glucemico: 15, },
  { tipo: 'Frutos secos', nombre: 'Pipas', hidratos: 80, glucemico: 35, },
  { tipo: 'Frutos secos', nombre: 'Pistacho', hidratos: 80, glucemico: 15, },
  { tipo: 'Frutos secos', nombre: 'Sesamo', hidratos: 100, glucemico: 35, },
  { tipo: 'Frutos secos', nombre: 'Uva pasa', hidratos: 15, glucemico: 65, },
  { tipo: 'Bebidas', nombre: 'Bebida isotonica', hidratos: 130, glucemico: 78, },
  { tipo: 'Bebidas', nombre: 'Refresco', hidratos: 100, glucemico: 70, },
  { tipo: 'Bebidas', nombre: 'Bebida de cacao', hidratos: 100, glucemico: 34, },
  { tipo: 'Bebidas', nombre: 'Bebida de soja', hidratos: 250, glucemico: 30, },
  { tipo: 'Bebidas', nombre: 'Bebida energetica', hidratos: 80, glucemico: 70, },
  { tipo: 'Bebidas', nombre: 'Bitter', hidratos: 100, glucemico: 70, },
  { tipo: 'Bebidas', nombre: 'Cava seco', hidratos: 250, glucemico: 15, },
  { tipo: 'Bebidas', nombre: 'Cerveza', hidratos: 250, glucemico: 110, },
  { tipo: 'Bebidas', nombre: 'Horchata', hidratos: 75, glucemico: 15, },
  { tipo: 'Bebidas', nombre: 'Licor de Manzana', hidratos: 30, glucemico: 65, },
  { tipo: 'Bebidas', nombre: 'Mosto', hidratos: 70, glucemico: 15, },
  { tipo: 'Bebidas', nombre: 'Sangria', hidratos: 100, glucemico: 15, },
  { tipo: 'Bebidas', nombre: 'Sidra', hidratos: 200, glucemico: 15, },
  { tipo: 'Bebidas', nombre: 'Tonica', hidratos: 100, glucemico: 70, },
  { tipo: 'Bebidas', nombre: 'Vermut', hidratos: 75, glucemico: 15, },
  { tipo: 'Bebidas', nombre: 'Vino dulce', hidratos: 75, glucemico: 15, },
  { tipo: 'Bebidas', nombre: 'Zumo comercial', hidratos: 100, glucemico: 60, },
  { tipo: 'Otros', nombre: 'Azucar blanco', hidratos: 10, glucemico: 70, },
  { tipo: 'Otros', nombre: 'Azucar moreno', hidratos: 10, glucemico: 70, },
  { tipo: 'Otros', nombre: 'Barrita energetica', hidratos: 20, glucemico: 70, },
  { tipo: 'Otros', nombre: 'Bizcocho', hidratos: 20, glucemico: 65, },
  { tipo: 'Otros', nombre: 'Bolleria', hidratos: 20, glucemico: 70, },
  { tipo: 'Otros', nombre: 'Cruasan', hidratos: 20, glucemico: 70, },
  { tipo: 'Otros', nombre: 'Cacao en polvo', hidratos: 12, glucemico: 25, },
  { tipo: 'Otros', nombre: 'Calamares a la romana', hidratos: 120, glucemico: 15, },
  { tipo: 'Otros', nombre: 'Canelones con bechamel', hidratos: 100, glucemico: 15, },
  { tipo: 'Otros', nombre: 'Caramelo', hidratos: 12, glucemico: 70, },
  { tipo: 'Otros', nombre: 'Chocolate', hidratos: 17, glucemico: 70, },
  { tipo: 'Otros', nombre: 'Chocolate negro', hidratos: 25, glucemico: 20, },
  { tipo: 'Otros', nombre: 'Churros', hidratos: 25, glucemico: 40, },
  { tipo: 'Otros', nombre: 'Crema de cacao', hidratos: 25, glucemico: 55, },
  { tipo: 'Otros', nombre: 'Crema de cacahuetes', hidratos: 100, glucemico: 40, },
  { tipo: 'Otros', nombre: 'Croquetas', hidratos: 50, glucemico: 20, },
  { tipo: 'Otros', nombre: 'Donut', hidratos: 23, glucemico: 75, },
  { tipo: 'Otros', nombre: 'Empanadilla de carne', hidratos: 50, glucemico: 20, },
  { tipo: 'Otros', nombre: 'Edulcorante', hidratos: 10, glucemico: 20, },
  { tipo: 'Otros', nombre: 'Gazpacho', hidratos: 150, glucemico: 20, },
  { tipo: 'Otros', nombre: 'Gelatina', hidratos: 62, glucemico: 30, },
  { tipo: 'Otros', nombre: 'Glucosa', hidratos: 10, glucemico: 100, },
  { tipo: 'Otros', nombre: 'Golosinas', hidratos: 18, glucemico: 70, },
  { tipo: 'Otros', nombre: 'Ketchup', hidratos: 50, glucemico: 55, },
  { tipo: 'Otros', nombre: 'Lasaña', hidratos: 100, glucemico: 40, },
  { tipo: 'Otros', nombre: 'Magdalena', hidratos: 25, glucemico: 65, },
  { tipo: 'Otros', nombre: 'Mazapan', hidratos: 25, glucemico: 60, },
  { tipo: 'Otros', nombre: 'Mermelada', hidratos: 20, glucemico: 65, },
  { tipo: 'Otros', nombre: 'Miel', hidratos: 13, glucemico: 85, },
  { tipo: 'Otros', nombre: 'Palomitas', hidratos: 20, glucemico: 85, },
  { tipo: 'Otros', nombre: 'Pizza', hidratos: 40, glucemico: 45, },
  { tipo: 'Otros', nombre: 'Surimi', hidratos: 100, glucemico: 20, },
  { tipo: 'Otros', nombre: 'Tortilla de patata', hidratos: 17, glucemico: 70, },

  // Agrega más alimentos aquí...
];

const table = document.getElementById('food-table');
const searchInput = document.getElementById('search-input');
const gramsInput = document.getElementById('grams-input');
const resultContainer = document.getElementById('result-container');

function createTableRow(food) {
  const row = document.createElement('tr');

  const tipoCell = document.createElement('td');
  tipoCell.textContent = food.tipo;
  row.appendChild(tipoCell);

  const nombreCell = document.createElement('td');
  nombreCell.textContent = food.nombre;
  row.appendChild(nombreCell);

  const hidratosCell = document.createElement('td');
  hidratosCell.textContent = food.hidratos;
  row.appendChild(hidratosCell);

  const glucemicoCell = document.createElement('td');
  glucemicoCell.textContent = food.glucemico.toString();
  row.appendChild(glucemicoCell);

  // Aplicar estilos según el rango del índice glucémico
  if (food.glucemico < 50) {
    glucemicoCell.style.color = 'green';
  } else if (food.glucemico >= 50 && food.glucemico <= 65) {
    glucemicoCell.style.color = 'orange';
  } else {
    glucemicoCell.style.color = 'red';
  }

  const urlCell = document.createElement('td');
  const link = document.createElement('a');
  link.href = food.url;
  link.target = '_blank';
  link.textContent = 'Saber más';
  urlCell.appendChild(link);
  row.appendChild(urlCell);

  const imagenCell = document.createElement('td');
  const image = document.createElement('img');
  image.src = food.imagen;
  image.alt = 'Imagen ' + food.nombre;
  image.width = 100;
  image.height = 100;
  imagenCell.appendChild(image);
  row.appendChild(imagenCell);

  return row;
}

function renderTable(foodsToShow) {
  table.innerHTML = ''; // Limpiar la tabla antes de renderizar

  // Agregar la fila de nombres de columna
  const headerRow = document.createElement('tr');
  const headers = ['Tipo', 'Nombre', 'Hidratos', 'Índice Glucémico', 'URL', 'Imagen'];

  headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  foodsToShow.forEach(food => {
    const row = createTableRow(food);
    table.appendChild(row);
  });
}

function filterFoods(searchTerm) {
  const filteredFoods = foods.filter(food => {
    const nombre = food.nombre.toLowerCase();
    return nombre.includes(searchTerm.toLowerCase());
  });

  renderTable(filteredFoods);
}

function calculateRations() {
  const selectedFood = foods.find(food => food.nombre.toLowerCase() === searchInput.value.toLowerCase());
  const grams = parseFloat(gramsInput.value);

  if (selectedFood && !isNaN(grams)) {
    const rations = grams / selectedFood.hidratos;
    resultContainer.textContent = `Corresponden a ${rations.toFixed(2)} raciones de hidratos.`;
  } else {
    resultContainer.textContent = 'Ingrese un alimento válido y una cantidad de gramos.';
  }
}

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value;
  filterFoods(searchTerm);
});

gramsInput.addEventListener('input', calculateRations);

// Renderizar la tabla inicialmente con todos los alimentos
renderTable(foods);
