const input = require('./inputs/01.json')

console.log('Star 1')
const count = input.reduce((data, number) => {
    if (typeof data.previous !== 'undefined' && number > data.previous) {
        data.count++
    }
    return {
        count: data.count,
        previous: number
    }
}, { count: 0 }).count
console.log(count)
