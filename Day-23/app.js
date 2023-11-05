// Import the DOM elements
const colorPicker = document.getElementById("colorPicker")
const colorDisplay = document.getElementById("colorDisplay")
const colorCode = document.getElementById("colorCode")
// Add the event listener for #colorPicker element

colorPicker.addEventListener('input',function(){
    colorDisplay.style.backgroundColor = colorPicker.value
    colorCode.textContent = colorPicker.value;
})