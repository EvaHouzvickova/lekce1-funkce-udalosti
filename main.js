/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

function secti(a, b) {
	let c = a + b;
	return c;
}

function zobrazVysledek() {
  document.querySelector('#vysledek').innerHTML = secti(100, 50);
};

function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log('Gratulace, právě si spustila tuto funkci!');

  let squareElement = document.getElementsByClassName('ctverecek')[0];
  squareElement.innerHTML = 'Gratulace, právě jsi spustila tuto funkci!';
  squareElement.style.width = '400px';
}

function zmenaBarvy() {
  let ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.backgroundColor = 'green';
}
