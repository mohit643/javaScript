const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const wight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const result = document.querySelector('#results');
  result.innerHTML = `${wight} and ${height}`;
});
