function generateRandomHexCode() {
    // Generate a random 6-digit hex code
    const hexCode = Math.floor(Math.random()*16777215).toString(16);
    return "#" + "0".repeat(6 - hexCode.length) + hexCode;
}

function generateColorPalette() {
    const colorsDiv = document.getElementById('colors');
  
    // Clear existing colors
    colorsDiv.innerHTML = "";
  
    // Generate and add 5 color blocks to the 'colors' div
    for (let i = 0; i < 5; i++) {
        const hexCode = generateRandomHexCode();
  
        // Create a new div element
        const colorBlock = document.createElement('div');
  
        // Set the class and background color
        colorBlock.className = 'color-block';
        colorBlock.style.backgroundColor = hexCode;
  
        // Set the data-color attribute
        colorBlock.setAttribute('data-color', hexCode);
  
        // Add event listener for color block click
        colorBlock.addEventListener('click', copyToClipboard);
  
        // Add the color block to the 'colors' div
        colorsDiv.appendChild(colorBlock);
    }
}

function copyToClipboard(event) {
    const colorCode = event.target.getAttribute('data-color');
    navigator.clipboard.writeText(colorCode)
        .then(() => alert('Copied: ' + colorCode))
        .catch(err => console.error('Failed to copy: ', err));
}
