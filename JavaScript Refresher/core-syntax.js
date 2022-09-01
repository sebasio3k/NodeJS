// Variables:
console.log("\nVariables ----------------------------------");
const nombre = "Sebas";
let edad = 29;
const hasHobbies = true;

// name = "Sebast";
edad = 30;

console.log(nombre);

// Functions:
console.log("\nFunctions ----------------------------------");
function summarizeUser(userName, userAge, UserHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies: " +
    UserHasHobby
  );
}
console.log(summarizeUser(nombre, edad, hasHobbies));

const summarizeUser2 = function (userName, userAge, UserHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies: " +
    UserHasHobby
  );
};

// Arrow Functions ()=>
console.log("\nArrow Functions ()=> ----------------------------------");
const summarizeUser3 = (userName, userAge, UserHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies: " +
    UserHasHobby
  );
};

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// const addOne = (a) => a + 1;
const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

console.log("addOne()", addOne(1));
console.log("addRandom()", addRandom(1));

// Objects
console.log("\nObjects ----------------------------------");
const person = {
  // Properties
  name: "Sebastian",
  age: 25,
  greet() {
    console.log(`Hi I am ${this.name} and I'm ${this.age} yo.`);
  },
  greet2: function () {
    console.log(`Hi I am ${this.name} and I'm ${this.age} yo.`);
  },
};

// console.log("person:", person);
console.log("person.greet", person.greet());
console.log("person.greet", person.greet2());

// Array and Array Methods
console.log("\nArray and Array Methods ----------------------------------");

const hobbies = ["Sports", "Cooking", 1, true, {}];
hobbies.push("Programming");

console.log("ForOf");
for (const hobby of hobbies) {
  console.log("hobby", hobby);
}
hobbies.pop("Programming");

console.log("hobbies.map");
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);

// Slice and Spread operators
console.log("\nSlice and Spread operators ----------------------------------");

const copiedArrayWithSlice = hobbies.slice();
console.log("copiedArrayWithSlice", copiedArrayWithSlice);

console.log(
  " > To pull elementos or properties out of arrays or objects use spread operator:"
);
const copiedArrayWithSpread = [...hobbies];
console.log("copiedArrayWithSpread", copiedArrayWithSpread);

const copiedPerson = { ...person };
console.log("copiedPerson", copiedPerson);

// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };

// To merge multiple args use Rest operator:
console.log(" > To merge multiple args use Rest operator: ");
const toArrayWithRest = (...args) => {
  return [...args];
};

console.log("toArrayWithRest", toArrayWithRest(1, 2, 3, 4));

// Object Destructuring
console.log("\nObject Destructuring ----------------------------------");

// const printName = (personData) => {
//   console.log("personData.name", personData.name);
// };
const printName = ({ name, greet }) => {
  console.log("name", name);
  console.log("greet", greet);
};

// Must match prop names:
const { name, age } = person;
console.log('name, edad:', name, edad)

// u can use the id u want 'cause it's rulled by position:
const [first, second] = hobbies;
console.log('first, second:', first, second)

// console.log("printName(person", printName(person));
console.log(printName(person));
