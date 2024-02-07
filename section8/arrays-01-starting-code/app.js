// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(); // []
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading'); // 항상 배열의 마지막에 추가함
// hobbies.unshift('Coding'); // 배열의 가장 앞에 추가
// const popedValue = hobbies.pop(); // 배열의 마지막 요소를 빼냄
// hobbies.shift(); // 배열은 왼쪽으로 한칸 옮김
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements =  hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.slice(2); // 배열의 값이 아니라 주소를 저장한 것이기 떄문에 배열의 값이 바뀌어도 둘이 같음.
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(testResults, storedResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Hwan' }, { name: 'Max' }];
// console.log(personData.indexOf({ name: 'Max' }));

// const max = personData.find((person, idx, persons) => {
//     return person.name === 'Max';
// });

// max.name = 'Anne';

// console.log(max, personData);

// const hwanIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Hwan';
// })

// console.log(hwanIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrice = [];

// // for (const price of prices) {
// //     taxAdjustedPrice.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     taxAdjustedPrice.push(priceObj);
// });

// console.log(taxAdjustedPrice);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrice = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     return priceObj;
// });

// // console.log(priceMap);

// const sortedPrices = prices.sort(function (a, b) {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedPrices);

// const filteredArray = prices.filter(function (price, index) {
//     return price > 6;
// });

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach(price => sum += price);

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     return prevValue + curValue;
// }, 0);

// console.log(sum);

// const data = 'Seoul;10.99;2000';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ['Jeon', 'SeungHwan'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [
//     { name: 'Jeon', age: 24 },
//     { name: 'Max', age: 30 },
// ];

// const copiedPersons = persons.map((person) => ({
//     name: person.name,
//     age: person.age,
// }));

// persons.push({ name: 'Anna', age: 29 });
// persons[0].age = 25;

// console.log(persons, copiedPersons);

const nameData = ['Jeon', 'SeungHwan', 'Mr', 30];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
