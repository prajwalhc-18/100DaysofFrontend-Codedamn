const inputText = document.getElementById('input-text');
const uppercaseBtn = document.getElementById('uppercase-btn');
const lowercaseBtn = document.getElementById('lowercase-btn');
const resetBtn = document.getElementById('reset-btn');
const output = document.getElementById('output');

uppercaseBtn.addEventListener('click', function(){
    // Corrected: Use inputText.value instead of inputText.textContent
    let Uppercase = inputText.value.toUpperCase();
    output.textContent = Uppercase;
});

lowercaseBtn.addEventListener('click', function(){
    // Corrected: Use inputText.value instead of inputText.textContent
    let Lowercase = inputText.value.toLowerCase();
    output.textContent = Lowercase;
});

resetBtn.addEventListener('click', function(){
    inputText.value = "";
    output.textContent = "";
});
