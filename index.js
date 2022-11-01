//Simulador para alquilar una cancha de futbol en un predio.

//Entrada(Pedir al usuario datos y crear variables globales)

const PRECIO_FUTBOL_7 = 5600;
const PRECIO_FUTBOL_9 = 8100;
const PRECIO_FUTBOL_11 = 11000;
let equipo = "";
let cancha = 0;
let mensaje = ""
let cantidad = 0;

cantidad = Number(prompt("Cuantas canchas quiere alquilar?"))

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


