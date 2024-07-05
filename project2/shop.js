document.addEventListener('DOMContentLoaded', function() {
    const amountofitem1 = document.getElementById('amountofitem1');
    const priceofitem1 = document.getElementById('priceofitem1');
    const amountofitem2 = document.getElementById('amountofitem2');
    const priceofitem2 = document.getElementById('priceofitem2');
    const amountofitem3 = document.getElementById('amountofitem3');
    const priceofitem3 = document.getElementById('priceofitem3');
    const amountofitem4 = document.getElementById('amountofitem4');
    const priceofitem4 = document.getElementById('priceofitem4');
    const totalsum = document.getElementById('totalsum');

    // Load values from sessionStorage
    if (amountofitem1) amountofitem1.textContent = sessionStorage.getItem('cookinput') || '';
    if (priceofitem1) priceofitem1.textContent = sessionStorage.getItem('cookprice') || '';
    if (amountofitem2) amountofitem2.textContent = sessionStorage.getItem('maidinput') || '';
    if (priceofitem2) priceofitem2.textContent = sessionStorage.getItem('Maidprice') || '';
    if (amountofitem3) amountofitem3.textContent = sessionStorage.getItem('guradinput') || '';
    if (priceofitem3) priceofitem3.textContent = sessionStorage.getItem('guardprice') || '';
    if (amountofitem4) amountofitem4.textContent = sessionStorage.getItem('assistantinput') || '';
    if (priceofitem4) priceofitem4.textContent = sessionStorage.getItem('assistantprice') || '';

    function calculator() {
        let total = 0;

        // Calculate for each item
        total += calculateItemTotal(amountofitem1, priceofitem1);
        total += calculateItemTotal(amountofitem2, priceofitem2);
        total += calculateItemTotal(amountofitem3, priceofitem3);
        total += calculateItemTotal(amountofitem4, priceofitem4);

        // Update total sum
        if (totalsum) {
            totalsum.textContent = total.toFixed(2);
        }
    }

    function calculateItemTotal(amountElement, priceElement) {
        if (amountElement && priceElement) {
            const amount = parseFloat(amountElement.textContent) || 0;
            const price = parseFloat(priceElement.textContent) || 0;
            return amount * price;
        }
        return 0;
    }

    // Run calculator on load
    calculator();

    // Add event listeners to recalculate when amounts change
    [amountofitem1, amountofitem2, amountofitem3, amountofitem4].forEach(element => {
        if (element) {
            element.addEventListener('input', calculator);
        }
    });
});