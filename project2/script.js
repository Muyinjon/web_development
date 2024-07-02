const robotImage = document.querySelector('.robot');

document.addEventListener('DOMContentLoaded', function() {
    const robotImage = document.querySelector('.robot');
    
    function checkAndHideImage() {
        if (robotImage.offsetHeight < 300) {
            robotImage.style.display = 'none';
        } else {
            robotImage.style.display = 'block';
        }
    }

    // Check initially
    checkAndHideImage();

    // Check on window resize
    window.addEventListener('resize', checkAndHideImage);
});
