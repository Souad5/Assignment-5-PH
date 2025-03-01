function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor(); 
  }
  
  document.getElementById("bgColor").addEventListener("click", changeBgColor);
  
  