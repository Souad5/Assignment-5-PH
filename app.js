function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor();  // Change the background color of the entire window
  }
  
  // Add event listener to the div with id "bgColor"
  document.getElementById("bgColor").addEventListener("click", changeBgColor);
  