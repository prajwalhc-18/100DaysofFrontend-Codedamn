const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', handleDragOver);
dropZone.addEventListener('drop', handleDrop);

function handleDragOver(event) {
  event.preventDefault();
  // Check if the dragged item is 'dragItem'
  if (event.dataTransfer.types.includes('text/plain') && event.dataTransfer.getData('text/plain') === 'dragging') {
    dropZone.style.backgroundColor = '#f0f0f0'; // Change color on drag over
  }
}

function handleDrop(event) {
  event.preventDefault();
  // Check if the dragged item is 'dragItem'
  if (event.dataTransfer.types.includes('text/plain') && event.dataTransfer.getData('text/plain') === 'dragging') {
    dropZone.style.backgroundColor = '#4CAF50'; // Change color on drop
  }
}