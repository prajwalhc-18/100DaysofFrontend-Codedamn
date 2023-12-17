// Simulating user data
const userData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    // Add more user data as needed
  ];
  
  // Simulating post data
  const postData = [
    { postId: 101, title: 'Post 1' },
    { postId: 102, title: 'Post 2' },
    // Add more post data as needed
  ];
  
  // Simulating asynchronous API call for getUsers
  export function getUsers() {
    return new Promise((resolve) => {
      // Simulating delay of 1 second
      setTimeout(() => {
        resolve(userData);
      }, 1000);
    });
  }
  
  // Simulating asynchronous API call for getPosts
  export function getPosts() {
    return new Promise((resolve) => {
      // Simulating delay of 1 second
      setTimeout(() => {
        resolve(postData);
      }, 1000);
    });
  }
  
  // Using Promise.all to call getUsers and getPosts concurrently
  Promise.all([getUsers(), getPosts()])
    .then(([users, posts]) => {
      // Do something with the results
      console.log('Users:', users);
      console.log('Posts:', posts);
  
      // You can write the results to a file using fs
      fs.writeFileSync('output.json', JSON.stringify({ users, posts }));
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  console.log('Hello world');
  