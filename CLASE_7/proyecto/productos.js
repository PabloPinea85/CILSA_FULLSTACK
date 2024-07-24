const contenedor = document.getElementById("productos");

fetch("./data/bike.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    const bikes = data;

    bikes.forEach((bike) => {
      const cardHTML = `
        <div class="card" style="width: 18rem">
          <img src="${bike.imagen}" class="card-img-top" alt="${bike.biciicleta}" />
          <div class="card-body">
            <h5 class="card-title">${bike.marca}</h5>
            <p class="card-text">
              ${bike.precio}
            </p>
            <a href="#" class="btn btn-primary">Ver más</a>
          </div>
        </div>`;

      contenedor.innerHTML += cardHTML;
    });
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
