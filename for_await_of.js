const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function (urlsArr) {
    const arrOfPromises = urlsArr.map(url => fetch(url))
    for await (let url of arrOfPromises) {
        const data = await url.json()
        console.log(data)
    }
}

getData(urls)