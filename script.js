document.addEventListener("DOMContentLoaded", function() {
    var tipSection = document.getElementById("tipText");
    var toggleButton = document.getElementById("toggleTips");
    var toggleIcon = document.getElementById("toggleIcon");

    toggleButton.addEventListener("click", function() {
        if (tipSection.style.display === "none") {
            tipSection.style.display = ""; // Mostrar as dicas
            toggleIcon.classList.remove("fa-plus");
            toggleIcon.classList.add("fa-minus");
        } else {
            tipSection.style.display = "none"; // Esconder as dicas
            toggleIcon.classList.remove("fa-minus");
            toggleIcon.classList.add("fa-plus");
        }
    });
});
