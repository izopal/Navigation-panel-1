const list = document.querySelectorAll('.list');

function activeLink () {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => {
  item.addEventListener('mouseover', activeLink);
  item.addEventListener('mouseleave', activeLink)
});


// Цікавий ефект

const navItems = document.querySelectorAll('.navigation ul li');

navItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    const indikator = document.querySelector('.indikator');
    const indikatorWidth = indikator.offsetWidth;
    const translateXValue = index * 70 + (70 - indikatorWidth) / 2;

    indikator.style.transform = `translateX(${translateXValue}px) scale(1)`;
  });

  item.addEventListener('mouseleave', () => {
    const indikator = document.querySelector('.indikator');
    indikator.style.transform = 'translateX(0) scale(0)';
  });
});