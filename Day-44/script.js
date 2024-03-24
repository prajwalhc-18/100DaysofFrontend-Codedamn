export function getUsers() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 1, name: 'John' },
				{ id: 2, name: 'Jane' },
			])
		}, 1000)
	})
}

export function getPosts() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 1, title: 'First post' },
				{ id: 2, title: 'Second post' },
			])
		}, 1000)
	})
}

Promise.all([getUsers(), getPosts()]).then(([users, posts]) => {
	console.log(users)
	console.log(posts)
})