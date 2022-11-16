//Simulador para alquilar una cancha de futbol en un predio.

const reservas = [];
const canchas = [];
let resultado = "";
//Creamos arrays vacios 

class Canchas {
  constructor(codigo, nombre, precio, alquiler) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.alquiler = alquiler;
  }
  sumarPelota() {
    return (this.precio = (this.precio + 600))
}
  alquilado() {
    this.alquiler = this.alquiler - 1;
  }
}
//Creamos el constructor para los objetos. Cada uno con un parametro


const canchaf7 = new Canchas(1, "Cancha F7 Natural", 5600, 1);
const canchaf9 = new Canchas(2, "Cancha F9 Natural", 8100, 1);
const canchaf11 = new Canchas(3, "Cancha F11 Natural", 11000, 1);
canchas.push(canchaf7, canchaf9, canchaf11);
console.log(canchas);
//Despues de crear todos los objetos. Lo subimos al arrays canchas y corroboramos con el log.



function mostrarCanchas() {
    alert(
      "Bienvenido al Complejo de Canchas de futbol. Nuestras canchas son las siguientes:"
    );
    canchas.forEach((canchas) => {
      alert(`
              ${canchas.nombre}
              $${canchas.precio}
              "Disponibilidad: ${canchas.alquiler}"
          `);
    });
  }
//La funcion mostrarCanchas nos muestra el array con los parametros pedidos
function alquilar() {
    let alquila = Number(
      prompt(
        "Elija la Cancha que quiere alquilar: 1-Cancha F7 sintetico, 2-Cancha F9 sintetico, 3-Cancha F11 sintetico o 0-salir/continuar",
      ),
    );
  
    while (alquila !== 0) {
      let resultado;
      switch (alquila) {
        case 1:
          resultado = canchas.find((canchas) => canchas.codigo === alquila);
          reservas.push(resultado);
  
          break;
        case 2:
            resultado = canchas.find((canchas) => canchas.codigo === alquila);
            reservas.push(resultado);
  
          break;
        case 3:
            resultado = canchas.find((canchas) => canchas.codigo === alquila);
            reservas.push(resultado);
  
          break;

        default:
          alert("Ingrese una cancha de la lista por favor");
      }
      alquila = Number(
        prompt(
            "Gracias por elegir. Si quiere sumar otra cancha puede volver a seleccionar: 1-Cancha F7 sintetico, 2-Cancha F9 sintetico, 3-Cancha F11 sintetico, o 0-salir/continuar",
            ),
      );
    }
  }
  // la funcion alquilar deja al usuario elegir 


  function mostrarReservas() {
    alert("Usted tiene las siguientes canchas para alquilar:");
    reservas.forEach((canchas) => {
      alert(`
              ${canchas.nombre}
              $${canchas.precio}
          `);
    });
  
    let continuar = Number(
      prompt("Que quiere hacer: 1-confirmar alquiler, 2-vaciar carrito"),
    );
    switch (continuar) {
      case 1:
        let total = reservas.reduce((codigo, canchas) => codigo + canchas.precio, 0);
        let canchaPelota = total + 600;
        alert(`El total de su alquiler con pelota es de $${canchaPelota}`);
        break;
      case 2:
        reservas.splice(0, reservas.length);
        alert("Su carrito se vacio con exito!");
        console.log(reservas);
        break;
    }
  }
//la funcuon mostrar carrito es para confirmar compra 

mostrarCanchas();
alquilar();
mostrarReservas();























































//Entrada(Pedir al usuario datos y crear variables globales)

/* const PRECIO_FUTBOL_7 = 5600;
const PRECIO_FUTBOL_9 = 8100;
const PRECIO_FUTBOL_11 = 11000;
let equipo = "";
let cancha = 0;
let mensaje = ""
let cantidad = 0;

cantidad = Number(prompt("Cuantas canchas quiere alquilar?")) */
/* 
function Entrada() {
    equipo = prompt("Ingrese el nombre del equipo");
    cancha = Number(prompt("Ingrese el tipo de cancha que quiere alquilar. Cancha de (7), (9), (11)(Ingresar solo el numero)"))
}

// actividad 

function Alquilar(equipo, cancha) {
    if (equipo != "" && cancha != "") {
        switch (cancha) {
            case 7:
            mensaje = `El equipo ${equipo}, alquilo una cancha de 7 por el valor de ${PRECIO_FUTBOL_7}`;
            break;
            case 9:
            mensaje = `El equipo ${equipo}, alquilo una cancha de 9 por el valor de ${PRECIO_FUTBOL_9}`;
    
            break;
            case 11:
            mensaje = `El equipo ${equipo}, alquilo una cancha de 7 por el valor de ${PRECIO_FUTBOL_11}`;
    
            break;    
            
            default:
            mensaje = `El equipo o tipo de cancha no se ingresaron correctamente. vuelva a ingresarlo`;    
                break;
        }
        
    }
}

// salida 

function Salida(mensaje) {
    return alert(mensaje)
    
}

// funciones
for (let index = 0; index < cantidad; index++) {
    Entrada();
Alquilar(equipo, cancha);
Salida(mensaje);
}


 */