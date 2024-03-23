// JavaScript code to handle click events and update the content of the paragraph element
const optionItems = document.querySelectorAll('.option');
const selectedItemsParagraph = document.getElementById('selected-items');

optionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('selected');
        updateSelectedItems();
    });
});

function updateSelectedItems() {
    const selectedItems = document.querySelectorAll('.option.selected');
    if (selectedItems.length === 0) {
        selectedItemsParagraph.textContent = 'No items selected';
    } else {
        selectedItemsParagraph.textContent = 'Selected items: ' + Array.from(selectedItems).map(item => item.textContent).join(', ');
    }
}
