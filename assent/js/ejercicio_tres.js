function verificarPassword() {
  const digit1 = document.getElementById('digit1').value;
  const digit2 = document.getElementById('digit2').value;
  const digit3 = document.getElementById('digit3').value;

  const password = digit1 + digit2 + digit3;
  const resultado = document.getElementById('frase');

  if (password === '911') {
    resultado.textContent = 'password 1 correcto';
  } else if (password === '714') {
    resultado.textContent = 'password 2 correcto';
  } else {
    resultado.textContent = 'password incorrecto';
  }
}
