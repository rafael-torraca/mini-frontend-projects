const lamp = document.querySelector('#lamp');
const turnOn = document.querySelector("#turnOn");
const turnOff = document.querySelector("#turnOff");


// funcao verifica se a lampada esta quebrada
function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1;
}

// funcao liga lampada
function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

turnOn.addEventListener("click", lampOn);


// funcao desliga lampada com constante
const lampOff = () => {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

turnOff.addEventListener("click", lampOff);


// funcao anonima embutida
lamp.addEventListener("dblclick", () => {
  lamp.src = "./img/quebrada.jpg";
});


// funcoes mouse
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);