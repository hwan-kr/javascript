// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//     ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//     console.log(entry[1]);
// }

// const person1 = { name: 'Hwan' };
// const person2 = { name: 'Max' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [value, key] of personData.entries()) {
//     console.log(value, key);
// }

// for (const key of personData.keys()) {
//     console.log(key);
// }

// for (const value of personData.values()) {
//     console.log(value);
// }

let person = { name: 'Hwan' };
const persons = new WeakSet();
persons.add(person);

console.log(persons);

const personData = new WeakMap();