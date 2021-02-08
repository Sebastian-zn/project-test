'use strict'
const card = document.querySelector('#main-card');
const gButton = document.querySelector('#gButton');
const bButton = document.querySelector('#bButton');
var a = document.createElement('a');

gButton.addEventListener('click', () => {
  var h2 = document.createElement('h2');
  var h3 = document.createElement('h3');
  var p = document.createElement('p');

  document.getElementById('btn-message').remove();
  gButton.remove();
  bButton.remove();

  // h2.innerText = 'The Last of Us II';
  h3.innerText = '¡TU VOTO HA SIDO REGISTRADO!';
  p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptate iste. Labore ut esse voluptatibus non corrupti at error! At est ab exercitationem commodi cum quidem.';
  a.style.padding = '5px 10px';
  a.style.backgroundColor = 'gray';
  a.style.cursor = 'pointer';
  a.style.textDecoration = 'none';
  a.style.border = '1px solid #fff';
  a.style.borderRadius = '10px';
  a.innerHTML = '<i class="fas fa-chevron-left"></i>' + ' ' + 'Cambiar voto';

  // document.getElementById('main-card-header').innerHTML = '<h2 class="new-h2">' + h2.textContent + '</h2>';
  document.getElementById('main-card-body').innerHTML = '<h3 class="new-h3">' + h3.textContent + '</h3>' + '<p class="new-p">' + p.textContent + '</p>';
  document.getElementById('buttons').appendChild(a);
});

bButton.addEventListener('click', () => {
  var h2 = document.createElement('h2');
  var h3 = document.createElement('h3');
  var p = document.createElement('p');

  document.getElementById('btn-message').remove();
  gButton.remove();
  bButton.remove();

  // h2.innerText = 'The Last of Us II';
  h3.innerText = '¡TU VOTO HA SIDO REGISTRADO!';
  p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptate iste. Labore ut esse voluptatibus non corrupti at error! At est ab exercitationem commodi cum quidem.';
  a.style.padding = '5px 10px';
  a.style.backgroundColor = 'gray';
  a.style.cursor = 'pointer';
  a.style.textDecoration = 'none';
  a.style.border = '1px solid #fff';
  a.style.borderRadius = '10px';
  a.innerHTML = '<i class="fas fa-chevron-left"></i>' + ' ' + 'Cambiar voto';

  // document.getElementById('main-card-header').innerHTML = '<h2 class="new-h2">' + h2.textContent + '</h2>';
  document.getElementById('main-card-body').innerHTML = '<h3 class="new-bh3">' + h3.textContent + '</h3>' + '<p class="new-p">' + p.textContent + '</p>';
  document.getElementById('buttons').appendChild(a);
});

a.addEventListener('click', () => {
  // var cardBody = document.getElementById('main-card-body');
  // var p = document.createElement('p');


  // while (cardBody.firstChild) {
  //   cardBody.removeChild(cardBody.firstElementChild);
  // }
  // a.remove();

  // p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptate iste. Labore ut esse voluptatibus non corrupti at error! At est ab exercitationem commodi cum quidem, necessitatibus omnis optio repellendus.';
  // cardBody.innerHTML = p.textContent + '<h3 class="buttons-title" id="btn-message">' + '¡Realiza tu voto!' + '</h3>';

  // document.getElementById('gButtonDiv').appendChild(gButton);
  // document.getElementById('bButtonDiv').appendChild(bButton);
  location.reload();
});
