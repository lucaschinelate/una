document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleTips');
    const tipText = document.getElementById('tipText');
    const nextTipButton = document.getElementById('nextTip');
    const toggleIcon = document.getElementById('toggleIcon');

    toggleButton.addEventListener('click', function() {
        // Toggle visibility of tip text and next tip button
        if (tipText.style.display === 'none') {
            tipText.style.display = '';
            nextTipButton.style.display = '';
            toggleIcon.className = 'fas fa-minus';
        } else {
            tipText.style.display = 'none';
            nextTipButton.style.display = 'none';
            toggleIcon.className = 'fas fa-plus';
        }
    });
});