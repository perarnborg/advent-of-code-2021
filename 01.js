const input = require('./inputs/01.json')

console.log('Star 1')
const count1 = input.reduce((data, number) => {
    if (typeof data.previous !== 'undefined' && number > data.previous) {
        data.count++
    }
    return {
        count: data.count,
        previous: number
    }
}, { count: 0 }).count
console.log(count1)

console.log('Star 2')
const count2 = input.reduce((count, number, index) => {
    if (index >= 3) {
        if (input[index - 3] + input[index - 2] + input[index - 1] < input[index - 2] + input[index - 1] + input[index]) {
            count++
        }
    }
    return count
}, 0)
console.log(count2)
