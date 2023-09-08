const btn = document.querySelectorAll('.button');
console.log(btn);
const body = document.querySelector('body');
console.log(body);
btn.forEach((item) => {
  item.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
