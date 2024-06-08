fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let cad = 
        `
        <nav>
    <img class="logo" src="${data[0].url}" alt="chp">
    <ul>
        <li><a href="./index.html">Inicio</a></li>
        <li><a href="./razas.html">Razas</a></li>
        <li><a href="https://thecatapi.com/">Cat API</a></li>
    </ul>
   </nav>
        
    ` 
    document.querySelector("header").innerHTML = cad;
  });