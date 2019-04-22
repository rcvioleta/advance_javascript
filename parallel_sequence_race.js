const promisify = (item, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(item), delay)
    })
}

const a = () => promisify('a', 1000)
const b = () => promisify('b', 3000)
const c = () => promisify('c', 5000)

// parallel
const parallel = async function () {
    const promises = [a(), b(), c()]
    const [output1, output2, output3] = await Promise.all(promises)
    return `Parallel output: ${output1}, ${output2}, ${output3}`
}

async function sequencial() {
    const output1 = await a()
    const output2 = await b()
    const output3 = await c()
    return `Sequence output: ${output1}, ${output2}, ${output3}`
}

async function race() {
    const promises = [a(), b(), c()]
    const output = await Promise.race(promises)
    return `Race output: ${output}`
}

parallel().then(console.log)
sequencial().then(console.log)
race().then(console.log)