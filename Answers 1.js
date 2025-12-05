1. Order of execution

 console.log("Start");
 setTimeout(()=>console.log("Timeout 1"), 0);
 Promise.resolve().then(()=>console.log("Promise 1"));
 setTimeout(()=>console.log("Timeout 2"), 0);
 Promise.resolve().then(()=>console.log("Promise 2"));
 console.log("End");

OUTPUT:
       Start
       End
       Promise 1
       Promise 2
       Timeout 1
       Timeout 2

2.fetch a list of users whose company name contains "Group"

async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const filtered = users.filter(user =>
      user.company.name.includes("Group")
    );

    console.log(filtered);
  } catch (err) {
    console.log("Error:", err);
  }
}

fetchUsers();

3.const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  company: { name: "Romaguera-Crona", city: "Gwenborough" }
};
const { company: { name, city }} = data;
console.log(name);
console.log(city);



4.function fetchData(url) {
  return new Promise((resolve, reject) => {
    if (url.includes("success")) {
      resolve("Data fetched successfully");
    } else {
      reject("Fetch error");
    }
  });
}
fetchData("api/success")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
async function callAPI() {
  try {
    const result = await fetchData("api/success");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
callAPI();


5.function mergeObjects(...objs) {
  return Object.assign({}, ...objs);
}

console.log(mergeObjects({a:1}, {b:2}, {a:3}));



6.function formatUser({name, age, city}) {
  return `User ${name} is ${age} years old and lives in ${city}.`;
}

const user = {name:"Keerthi", age:22, city:"Chennai"};
console.log(formatUser(user));



7.const users = [
  { name: "A", phone: "1234" },
  { name: "B" },
  { name: "C", phone: "5678" }
];
users.forEach(u => {
  console.log(u.phone ?? "No phone");
});




8.function multiply(a, b, callback) {
  setTimeout(() => {
    callback(a * b);
  }, 1000);
}
function multiplyPromise(a, b) {
  return new Promise(resolve => {
    setTimeout(() => resolve(a * b), 1000);
  });
}

multiplyPromise(5, 4).then(result => console.log(result));



9.const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/invalid",
  "https://jsonplaceholder.typicode.com/users/3"
];

async function fetchAll() {
  try {
    const results = await Promise.allSettled(
      urls.map(url => fetch(url))
    );

    console.log(results);
  } catch (err) {
    console.log("Error:", err);
  }
}

fetchAll();



10.const data = {
  user: {
    name: "Keerthi",
    contact: {
      email: "keerthi@example.com",
      phones: ["12345", "67890"]
    }
  },
  address: {
    city: "Chennai",
    zip: "600001"
  }
};
const {
  user: {
    name = "Unknown",
    contact: { phones: [firstPhone="No phone"] } = {}
  } = {},
  address: { zip = "No ZIP" } = {}
} = data;

console.log(`User ${name}, Phone: ${firstPhone}, ZIP: ${zip}`);



 