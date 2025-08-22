const vicsX = document.getElementById("vicsX");
let puntajeX = 0;
vicsX.textContent = puntajeX;

const vicsO = document.getElementById("vicsO");
let puntajeO = 0;
vicsO.textContent = puntajeO
const tablero = document.getElementById("tablero")
const mensaje = document.getElementById("mensaje")
const reiniciarBtn = document.getElementById("reiniciar")

let estadoJuego = false

/*
    Crear las variables que referencien los ids del HTML, usando document.getElementById("casilla0")
    ...
    Crear un arreglo, que contenga todas esas casillas
*/
const casilla0 = document.getElementById("casilla0")
const casilla1 = document.getElementById("casilla1")
const casilla2 = document.getElementById("casilla2")
const casilla3 = document.getElementById("casilla3")
const casilla4 = document.getElementById("casilla4")
const casilla5 = document.getElementById("casilla5")
const casilla6 = document.getElementById("casilla6")
const casilla7 = document.getElementById("casilla7")
const casilla8 = document.getElementById("casilla8")

let array = [casilla0, casilla1, casilla2, casilla3, casilla4, casilla5, casilla6, casilla7, casilla8]
let movimientosTablero = 0

function movimientos() {

  array.forEach((casilla) => {
    casilla.addEventListener("click", () => {
      if (casilla.textContent === "") {
        casilla.textContent = "X";
        movimientosTablero++
        if (ganador()) return; // Verifica si ganó el jugador
        setTimeout(() => {
          movCirculo();
        }, 1000);
          jugadoresEmpate();
      }
    });
  });
}

function jugadoresEmpate() {

if (movimientosTablero==9 && estadoJuego === false) {

  alert("EMPATE")
  
}
  
}

function movCirculo() {
  movimientosTablero++
  const casillasVacias = array.filter((casilla)=> casilla.textContent == "")
  const arrayCasilla = [Math.floor(Math.random() * casillasVacias.length)];
  casillasVacias[arrayCasilla].textContent = "O";
  if (casillasVacias.length === 0) return;
  ganador(); // Verifica si ganó el círculo


}
vicsX.textContent = puntajeX
function ganador() {
  const posiblesGames = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [6, 4, 2], [0, 4, 8]
  ];

  for (let index = 0; index < posiblesGames.length; index++) {
    const [pos1, pos2, pos3] = posiblesGames[index];

    if (
      array[pos1].textContent !== "" &&
      array[pos1].textContent === array[pos2].textContent &&
      array[pos1].textContent === array[pos3].textContent
    ) {
      if (array[pos1].textContent == 'X') {
        puntajeX++
        vicsX.textContent = puntajeX
        estadoJuego = true
      }

      if (array[pos1].textContent == 'O') {
        puntajeO++
        vicsO.textContent = puntajeO
        estadoJuego = true
      }

      alert("¡Ganador: " + array[pos1].textContent + "!");
      return true;
    }
  }

  return false;
}
movimientos()

const jugadorGanador = ganador();

if (jugadorGanador === "X") {
  puntajeX++;
  vicsX.textContent = puntajeX;
} else if (jugadorGanador === "O") {
  puntajeO++;
  vicsO.textContent = puntajeO;
}

const btnreiniciar = document.getElementById("reiniciar");
function reiniciarJuego() {
  array.forEach((casilla) => {
    movimientosTablero=0
    estadoJuego= false
    casilla.textContent = ""; // Limpia cada casilla
    casilla.style.pointerEvents = "auto"; // Reactiva los clicks si los habías bloqueado
  });

  // Opcional: reiniciar turno, mensaje, etc.
  turno = "X"; // si estás usando una variable de turno
  mensaje.textContent = ""; // si tienes un mensaje en pantalla
}
btnreiniciar.addEventListener("click", reiniciarJuego);

console.log("¡Botón funcionando!");

