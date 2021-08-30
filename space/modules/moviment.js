const yourShip = document.querySelector('.player-shooter');

//função de subir
export function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if(topPosition === "0px") {
      return
  } else {
      let position = parseInt(topPosition);
      position -= 50;
      yourShip.style.top = `${position}px`;
  }
}

//função de descer
export function moveDown() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if(topPosition === "510px"){
      return
  } else {
      let position = parseInt(topPosition);
      position += 50;
      yourShip.style.top = `${position}px`;
  }
}

//funcionalidade de tiro
export function fireLaser() {
  let laser = createLaserElement();
  playArea.appendChild(laser);
  moveLaser(laser);
}