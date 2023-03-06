function colourSwap(colour) {
  document.body.style.backgroundColor = colour;
}


function containerAtt() {
  buttonContainer.style.backgroundColor = 'white';
  buttonContainer.style.display = 'inline-block'
  buttonContainer.style.padding = '1.5em';
  buttonContainer.style.marginLeft = window.innerWidth / 2 - buttonContainer.clientWidth / 2 + 'px';
}

// Setup begin
const colours = ['green', 'red', 'blue'];
document.body.style.backgroundColor = 'grey';
let buttonContainer = document.getElementById('container');
buttonContainer.style.margin = 'auto';
containerAtt();
colours.forEach((colour) => {
  let button = document.createElement('button');
  button.style.backgroundColor = colour;
  button.innerText = colour;
  button.style.border = '3px solid black';
  button.style.padding = '1em';
  button.style.paddingLeft = '2em';
  button.style.paddingRight = '2em';
  button.style.marginLeft = '0.5em';
  button.style.marginRight = '0.5em';
  button.addEventListener('click', colourSwap.bind(undefined, colour));
  buttonContainer.appendChild(button);
});
window.addEventListener('resize', containerAtt);
// Setup end