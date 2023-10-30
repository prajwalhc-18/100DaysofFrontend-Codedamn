document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('comment');
    const submitButton = document.getElementById('submit');
    const commentList = document.getElementById('commentList');
    const errorParagraph = document.getElementById('error');

    submitButton.addEventListener('click', function () {
        const commentText = commentInput.value.trim();

        if (commentText === '') {
            errorParagraph.innerText = 'Error: Comment cannot be empty';
        } else {
            errorParagraph.innerText = ''; // Clear any existing error message
            displayComment(commentText);
            commentInput.value = ''; // Clear the textarea
        }
    });

    function displayComment(comment) {
        const listItem = document.createElement('li');
        listItem.textContent = comment;
        commentList.appendChild(listItem);
    }
});
