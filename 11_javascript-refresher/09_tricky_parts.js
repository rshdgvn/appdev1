console.log((5 == "5"), (5 === "5"))

let undef;
const nal = null

const student = {
  name: "rshdgvn",
  age: 20,

  func: function () {
    console.log(this.name, this.age);
  },

  arrFunc: () => {
    console.log(this.name, this.age);
  },

  arrFunc2: () => {
    console.log(student.name, student.age);
  }
};

const arr1 = [1, 2, 3];
const arr2 = arr1; 

arr2.push(4);

console.log(arr1, arr2) // the original also change


const arr3 = [1, 2, 3];
const arr4 = [...arr3] 

arr4.push(4);

console.log(arr3, arr4) // the original didn't change



