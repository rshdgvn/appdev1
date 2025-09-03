foods = ["adobo", "chiks", "steak"]

foods.shift()
foods.push("adobo")

for (let food of foods) {
  console.log(food)
}

foods.map(food => console.log(`I like ${food}`))
