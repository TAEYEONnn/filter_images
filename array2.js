const btns = document.querySelectorAll('.tabs button');
console.log(btns);

const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

const imgWrapper = document.querySelector('.panel');

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    imgWrapper.innerHTML = '';

    btns.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');

    const idx = Array.from(btns).indexOf(this);

    const imgElmt = `
      <img src = ${imgs[idx]} alt = "">
    `;

    imgWrapper.insertAdjacentHTML('beforeend', imgElmt);
  });
});

btns[0].click();
