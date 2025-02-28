function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
  
    document.getElementById("date").innerHTML = `Date: ${date} `;
  }
 
  setInterval(updateDateTime, 1000);
  
  updateDateTime();
  
