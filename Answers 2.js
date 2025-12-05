1.

let x = 10;
{
  console.log(x);
}
x = 20;

output: 10

2.

const user = { name: "keerthi", scores: [10, 20, 30] };

console.log(`User ${user.name} total score is ${
  user.scores[0] + user.scores[1] + user.scores[2]
}`);

3.

const arr = [10, ,30];

const [a, b = 50, c] = arr;

console.log(a); //110
console.log(b); //50
console.log(c);//30



4.
const user = {
  info: {
    address: { city: "Chennai", pin: 600001 },
    hobbies: ["Coding", "Music", "Cricket"]
  }
};

const {
  info: {
    address: { city, pin },
    hobbies: [, second]
  }
} = user;

console.log(city);
console.log(pin);
console.log(second);


5.

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged);


7.

const student = {
  name: "Hari",
  marks: {
    math: {
 score: 88 
  }
  }
};

const score = student?.marks?.math?.score ?? "Not Available";

console.log(score);






