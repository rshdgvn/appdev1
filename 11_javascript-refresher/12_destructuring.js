const person = {
  name: "rshdgvn",
  age: 20
};

const hobbies = ["tulog", "idlip"]; 

function printName(person) {
  const {name, age} = person
  
  console.log(name, age)
}

console.log(hobbies[0], hobbies[1])
printName(person)
