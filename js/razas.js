const API_KEY = "live_4oNdmmbqQi6SraEvCWxCynuhtUJphE3oodXC8h8f0BTpSJEtBIoZBM1LQOKlsTgq"


fetch(`https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=1&api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let cad = ``
    for (let gato of data) {
        console.log(gato);
      cad =
        cad +
        `
        <div class="card">
            <h3 class="raza">Raza: ${gato.breeds[0].id}</h3>
            <img src="${gato.url}" alt="${gato.breeds[0].name}">
            <h4 class="info"><a href="${gato.breeds[0].vetstreet_url}">Info</a></h4>
        </div>
    `
    }
    document.querySelector("main").innerHTML = cad;
  });       