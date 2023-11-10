// script.js

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
  
      // Set the background color
      colorBlock.style.backgroundColor = hexCode;
  
      // Set the data-color attribute
      colorBlock.setAttribute('data-color', hexCode);
  
      // Add the color block to the 'colors' div
      colorsDiv.appendChild(colorBlock);
    }
  }
  