const contenedor = document.getElementById("productos");
const categoriaFiltrado = document.getElementById("categoryFilter");

let bikes = [];

fetch("../data/bike.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    bikes = data;
    mostrarBikes(bikes);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

categoriaFiltrado.addEventListener("change", (event) => {
  const selecionarCategoria = event.target.value;
  filtrarPorCategoria(selecionarCategoria);
});

function mostrarBikes(bikes) {
  contenedor.innerHTML = "";
  bikes.forEach((bike) => {
    const cardHTML = `
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100 shadow-sm border-0 rounded-3 overflow-hidden transform-scale hover-shadow">
          <img src="${bike.imagen}" class="card-img-top" alt="${bike.biciicleta}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center">${bike.marca}</h5>
            <p class="card-text text-center">${bike.biciicleta}</p>
            <div class="mt-auto text-center">
              <a href="../page/detalle.html?id=${bike.id}" class="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
      `;
    contenedor.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function filtrarPorCategoria(category) {
  if (category === "all") {
    mostrarBikes(bikes);
  } else {
    const filtradoBikes = bikes.filter((bike) => bike.categoria === category);
    mostrarBikes(filtradoBikes);
  }
}
