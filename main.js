const valor = document.getElementById("valor");
const eleccion = document.getElementById("eleccion");
const resultado = document.getElementById("resultado");
const guardar = document.getElementById("guardar");

valor.addEventListener("input", conversion);
eleccion.addEventListener("change", conversion);
guardar.addEventListener("click", guardado);

function conversion() {
  const valor1 = parseFloat(valor.value);
  const eleccion1 = eleccion.value;

  switch (eleccion1) {
    case "km_miles":
      resultado.innerHTML = (valor1 * 0.621371).toFixed(2) + " miles";
      break;
    case "miles_km":
      resultado.innerHTML = (valor1 * 1.60934).toFixed(2) + " km";
      break;
    case "ft_mts":
      resultado.innerHTML = (valor1 * 0.3048).toFixed(2) + " mts";
      break;
    case "mts_ft":
      resultado.innerHTML = (valor1 * 3.28084).toFixed(2) + " ft";
      break;
    case "cm_inches":
      resultado.innerHTML = (valor1 * 0.393701).toFixed(2) + " inches";
      break;
    case "inches_cm":
      resultado.innerHTML = (valor1 * 2.54).toFixed(2) + " cm";
      break;
  }
}

function guardado() {
  const valorIngresado = valor.value;
  const conversionRealizada = resultado.innerHTML;

  const guardados = document.createElement("div");
  guardados.textContent = `${valorIngresado} → ${conversionRealizada}`;

  guardados.style.width = "330px";
  guardados.style.height = "40px";
  guardados.style.backgroundColor = "rgb(167, 161, 161)";
  guardados.style.color = "rgb(0, 0, 0)";
  guardados.style.display = "flex";
  guardados.style.flexDirection = "column";
  guardados.style.justifyContent = "center";
  guardados.style.breakInside = "avoid";
  guardados.style.marginTop = "15px";
  guardados.style.marginLeft = "0px";
  guardados.style.paddingLeft = "20px";
  guardados.style.flex = 1;
  guardados.style.borderRadius = "10px";
  guardados.style.boxShadow = "0 0 10px 5px rgb(185, 185, 185)";

  const resultadosDiv = document.getElementById("salvados");
  resultadosDiv.appendChild(guardados);
}
