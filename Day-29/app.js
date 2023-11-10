const counterButton = document.getElementById("counter-btn")
const countDisplay = document.getElementById('count-display')

counterButton.addEventListener('click',function(){
    let count = parseInt(countDisplay.innerText)
    countDisplay.innerText = ++count
})