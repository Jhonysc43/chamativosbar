document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = "Venha nos visitar e tenha uma experiência incrível!";
    
    welcomeMessage.addEventListener("mouseover", () => {
        welcomeMessage.textContent = "Esperamos por você!";
    });
    
    welcomeMessage.addEventListener("mouseout", () => {
        welcomeMessage.textContent = "Venha nos visitar e tenha uma experiência incrível!";
    });
});
