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
const sumOfLastThree = (input, index) => {
    if (index > 1) {
        return input.slice(index - 2, index + 1).reduce((sum, number) => {
            return sum + number
        }, 0)
    }
    return null
}
const count2 = input.reduce((count, number, index) => {
    if (index >= 3) {
        if (sumOfLastThree(input, index - 1) < sumOfLastThree(input, index)) {
            count++
        }
    }
    return count
}, 0)
console.log(count2)
