document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.getElementById("greeting");
  
    const hour = new Date().getHours();
    let message = "Hello!";
  
    if (hour < 12) {
      message = "Good morning! Welcome to my portfolio.";
    } else if (hour < 18) {
      message = "Good afternoon! Welcome to my portfolio.";
    } else {
      message = "Good evening! Welcome to my portfolio.";
    }
  
    greeting.textContent = message;
  });
  