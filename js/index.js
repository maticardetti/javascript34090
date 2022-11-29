//Simulador para alquilar una cancha de futbol en un predio.

const reservas = [];
const canchas = [];
let resultado = "";
//Creamos arrays vacios 

class Canchas {
  constructor(codigo, nombre, precio, imagen, alquiler) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.alquiler = alquiler;
  }
  
}
//Creamos el constructor para los objetos. Cada uno con un parametro


const canchaf7 = new Canchas(1, "Cancha F7 Natural", 5600, "/img/cancha-de-fútbol.png", 1);
const canchaf9 = new Canchas(2, "Cancha F9 Natural", 8100, "/img/cancha-de-fútbol.png", 1);
const canchaf11 = new Canchas(3, "Cancha F11 Natural", 11000, "/img/cancha-de-fútbol.png", 1);
canchas.push(canchaf7, canchaf9, canchaf11);
console.log(canchas);
//Despues de crear todos los objetos. Lo subimos al arrays canchas y corroboramos con el log.

function alquilacodigo1() {
  resultado = canchas.find((canchas) => canchas.codigo === 1);
  reservas.push(resultado);
  console.log("Alquilada cancha futbol 7");
}

function alquilacodigo2() {
  resultado = canchas.find((canchas) => canchas.codigo === 2);
  reservas.push(resultado);
  console.log("Alquilada cancha futbol 9");
}

function alquilacodigo3() {
  resultado = canchas.find((canchas) => canchas.codigo === 3);
  reservas.push(resultado);
  console.log("Alquilada cancha futbol 11");
}





function mostrarReservas() {
  alert("Usted tiene las siguientes canchas para alquilar:");
  reservas.forEach((canchas) => {
    alert(`
              ${canchas.nombre}
              $${canchas.precio}
          `);
  });
      let total = reservas.reduce((codigo, canchas) => codigo + canchas.precio, 0);
      let canchaPelota = total + 600;
      alert(`El total de su alquiler con pelota es de $${canchaPelota}`);

  }



let contenedor = document.getElementById("contenedor")
canchas.forEach(cancha => {
  let item = document.createElement("div");
  item.innerHTML = `
  <div class="productos">
  <div class="card" style="width: 18rem;">
<img src="${cancha.imagen}" class="card-img-top" alt="imagen cancah de futbol">
<div class="card-body">
  <h5 class="card-title">${cancha.nombre}</h5>
  <p class="card-text">${cancha.precio}</p>
  <a href="#" id=${cancha.codigo} class="btn btn-success">Reservar</a>
</div>
</div> 
</div>

`;

  contenedor.append(item);

})

let boton = document.getElementById("1");
boton.addEventListener("click", () => alquilacodigo1());

boton = document.getElementById("2");
boton.addEventListener("click", () => alquilacodigo2());

boton = document.getElementById("3");
boton.addEventListener("click", () => alquilacodigo3());





let turnos = document.getElementById("turnos");
turnos.addEventListener("click", () => mostrarReservas());


















