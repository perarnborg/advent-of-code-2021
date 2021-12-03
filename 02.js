const input = require('./inputs/02.json')

console.log('Star 1')

function operationDepthChange(operation) {
  const parts = operation.split(' ')
  if (parts[0] === 'down') {
    return parseInt(parts[1], 10)
  }
  if (parts[0] === 'up') {
    return 0 - parseInt(parts[1], 10)
  }
  return 0
}

function operationHorizontalChange(operation) {
  const parts = operation.split(' ')
  if (parts[0] === 'forward') {
    return parseInt(parts[1], 10)
  }
  return 0
}

const finalPosition = input.reduce(({ depth, horizontal }, operation) => {
  return {
    depth: depth + operationDepthChange(operation),
    horizontal: horizontal + operationHorizontalChange(operation)
  }
}, { depth: 0, horizontal: 0 })
console.log(finalPosition.depth * finalPosition.horizontal)


console.log('Star 2')

const operationAimChange = operationDepthChange

function operationDepthChangeWithAim(operation, aim) {
  const parts = operation.split(' ')
  if (parts[0] === 'forward') {
    return parseInt(parts[1], 10) * aim
  }
  return 0
}

const finalPosition2 = input.reduce(({ aim, depth, horizontal }, operation) => {
  return {
    aim: aim + operationAimChange(operation),
    depth: depth + operationDepthChangeWithAim(operation, aim),
    horizontal: horizontal + operationHorizontalChange(operation)
  }
}, { aim: 0, depth: 0, horizontal: 0 })
console.log(finalPosition2.depth * finalPosition2.horizontal)



