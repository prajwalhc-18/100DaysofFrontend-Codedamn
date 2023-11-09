const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const calculateTip = document.getElementById('calculateTip');
const tipAmount = document.getElementById('tipAmount');

calculateTip.addEventListener('click', function() {
    const tip = (+tipPercentage.value / 100) * (+billAmount.value);
    tipAmount.innerHTML = "Tip Amount: " + tip.toFixed(2);
});
