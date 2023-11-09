const inputText = document.getElementById("inputText");
const countButton = document.getElementById("countButton");
const wordCount = document.getElementById("wordCount");

countButton.addEventListener("click", function () {
    const textValue = inputText.value;
    const words = textValue.split(/\s+/).filter(function (word) {
        return word.length > 0;
    });
    const wordCountValue = words.length;
    wordCount.textContent = wordCountValue;
});
