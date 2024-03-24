const inputText = document.getElementById('input-text');
const uppercaseBtn = document.getElementById('uppercase-btn');
const lowercaseBtn = document.getElementById('lowercase-btn');
const resetBtn = document.getElementById('reset-btn');
const output = document.getElementById('output');

uppercaseBtn.addEventListener('click', function(){
    inputText.value = inputText.value.toUpperCase();
    output.textContent = inputText.value;
});

lowercaseBtn.addEventListener('click', function(){
    inputText.value = inputText.value.toLowerCase();
    output.textContent = inputText.value;
});

resetBtn.addEventListener('click', function(){
    inputText.value = "";
    output.textContent = "";
});
