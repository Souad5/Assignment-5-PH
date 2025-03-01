function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBgColor() {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  document.getElementById("bgcolor3").style.backgroundColor = randomColor;

  document.querySelector(".parent").style.backgroundColor = randomColor;
}

document.getElementById("bgColor2").addEventListener("click", changeBgColor);
