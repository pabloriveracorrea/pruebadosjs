function contador() {
  // variables
  let sum1 = Number(document.querySelector('#input1').value);
  let sum2 = Number(document.querySelector('#input2').value);
  let sum3 = Number(document.querySelector('#input3').value);

  // Sumar los valores
  let sumando = sum1 + sum2 + sum3;

  // Mostrar el resultado en la página
  if (sumando <= 10) {
    document.querySelector('.frase').innerHTML = `llevas ${sumando} stickers`;
  } else {
    document.querySelector('.frase').innerHTML = 'llevas Demasiados stickers';
  }
}
