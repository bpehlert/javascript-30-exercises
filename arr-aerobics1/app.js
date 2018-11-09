 // ## Array Cardio Day 1
 
 // Some data we can work with
 
 const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 
                'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
                'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 
                'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 
                'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 
                'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 
                'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 
                'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 
                'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteenHundreds = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
// console.log(fifteenHundreds);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(names);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedByAge = inventors.sort((a, b) => a.year < b.year ? -1 : 1);

// const sortedByAge = inventors.sort((a, b) => {
//     if (a.year < b.year) {
//         return -1
//     };
// });

// console.table(sortedByAge);



// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const yearsLived = inventors.reduce((years, inventor) => {
    return years + (inventor.passed - inventor.year)
}, 0);
// console.log(yearsLived);


// 5. Sort the inventors by years lived

const oldest = inventors.sort((a, b) => {
    const firstAge = a.passed - a.year;
    const secondAge = b.passed - b.year;
    return firstAge > secondAge ? -1 : 1;
})
// console.log(oldest);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const boulevards = Array.from(document.querySelectorAll('.mw-category li'));
// const deBoulevards = boulevards
//                             .map(street => street.innerText)
//                             .filter(streetName => streetName.includes("de"));
// console.log(deBoulevards);


// 7. sort Exercise
// Sort the people alphabetically by last name

const alphabetically = people.sort((a, b) => {
    const firstName = a.split(", ");
    const secondName = b.split(", ");
    return firstName[0] < secondName[0] ? -1 : 1;
});
// console.table(alphabetically);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, type) => {
    if (!obj[type]) {
        obj[type] = 0;
    }
    obj[type]++
    return obj;
},{});
// console.log(transportation);


// ## Array Cardio Day 2


const users = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];



// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const containsAdult = users.some(user => {
    const currentYear = new Date().getFullYear();
    return (currentYear - user.year) >= 19;
});
// console.log(containsAdult);

// Array.prototype.every() // is everyone 19 or older?

const allAdults = users.every(user => {
    const currentYear = new Date().getFullYear();
    return (currentYear - user.year) >= 19;
})
// console.log(allAdults);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const commentIndex = comments.findIndex(comment => comment.id === 823423);

const newComments = [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1)
];

console.log(commentIndex);
console.log(comments);
console.log(newComments);



