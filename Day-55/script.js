document.getElementById('fetchData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postTitlesList = document.getElementById('postTitles');

            // Clear existing list items
            postTitlesList.innerHTML = '';

            // Display up to 20 post titles
            for (let i = 0; i < Math.min(posts.length, 20); i++) {
                const postTitle = posts[i].title;
                const listItem = document.createElement('li');
                listItem.textContent = postTitle;
                postTitlesList.appendChild(listItem);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
