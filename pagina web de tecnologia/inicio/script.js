// Puedes modificar el texto aquí
const text = "¡Bienvenido a mi página web con efecto de máquina de escribir!";

let charIndex = 0;
const textElement = document.getElementById("text");

function type() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  }
}

// Iniciar el efecto cuando se cargue la página
window.onload = type;
