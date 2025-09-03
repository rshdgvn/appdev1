const numbers = [1, 2, 3]
const user = {
  name: 'rshdgvn',
  age: 20
}

const extNumbers = [...numbers, 4, 5]
const extUser = {...user, course: 'BSIS'}

const sum = (...args) => {
  let sum = 0;
  for (let arg of args) {
    sum += arg
  }

  return sum
}

console.log(sum(...extNumbers))