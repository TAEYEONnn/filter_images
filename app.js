const btns = document.querySelectorAll('.filter-btns button');
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    btns.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');

    const idx = Array.from(btns).indexOf(this);
  });
});

btns[0].click();

const arr =[
  { dataFilter: 'bag', src: 'bag-1.jpg'},
  { dataFilter: 3 ,src : 4},
  { dataFilter:5 src : 6},
  { dataFilter: 7 src :8},
  { dataFilter: 7 src :8},
  { dataFilter: 7 src :8}
]
const objs = {
  a: 1,
  b: 2,
};

console.log(objs.a);
