// Obtener el parámetro de la URL
const params = new URLSearchParams(window.location.search);
const bikeId = params.get("id");

const detalleContenedor = document.getElementById("detalle");

let bikes = [];

// Fetch para obtener los datos de la bicicleta
fetch("../data/bike.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    bikes = data;
    mostrarDetalle(bikeId);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function mostrarDetalle(id) {
  const bike = bikes.find((bike) => bike.id == id);
  if (bike) {
    const detalleHTML = `
        <div class="container-fluid mb-4 card-container">
          <div class="w-100">
            <div class="row no-gutters">
              <div class="col-12 col-md-6 img-container">
                <img src="${bike.imagen}" class="img-fluid rounded-start w-100 transform-scale hover-zoom" alt="${bike.biciicleta}" />
              </div>
              <div class="col-12 col-md-6 d-flex flex-column">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-center">${bike.marca}</h5>
                  <p class="card-text text-center">${bike.biciicleta}</p>
                  <p class="card-text text-center">${bike.descripciongeneral}</p>
                  <p class="card-text text-center">${bike.precio}</p>
                  <p class="card-text text-center"><small class="text-body-secondary">${bike.categoria}</small></p>
                  <div class="mt-auto text-center">
                    <a href="../page/contacto.html" class="btn btn-primary transform-scale hover-scale">Consultar</a>
                    <a href="javascript:history.back()" class="btn btn-secondary transform-scale hover-scale">Volver</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    detalleContenedor.innerHTML = detalleHTML;
  } else {
    detalleContenedor.innerHTML = "<p>Bicicleta no encontrada</p>";
  }
}
