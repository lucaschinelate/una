const tips = [
    "Invista em peças que realcem suas melhores características.",
    "Conforto é tão importante quanto estilo.",
    "Não tenha medo de experimentar novos estilos e cores."
];

let currentTip = 0;

document.getElementById('nextTip').addEventListener('click', function() {
    currentTip = (currentTip + 1) % tips.length; // Isso fará o loop das dicas
    document.getElementById('tipText').textContent = tips[currentTip];
});

document.getElementById('tipText').textContent = tips[currentTip]; // Inicia com a primeira dica