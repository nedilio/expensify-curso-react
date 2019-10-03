console.log('destructuring');

// const person = {
//   name:'Nelson',
//   age: 35,
//   location: {
//     city: 'Santiago de Chile',
//     temp: 17
//   }
// };

// const { name = 'Anonymous', age } = person
// const { city, temp: temperature } = person.location

// console.log(`${name} is ${age}.`);
// console.log(`It's ${temperature}oC in ${city}.`)

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holliday',
  publisher: {
    // name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); //Penguin - Self-Published

const address = ['San Eugnio 1401', 'Nunoa', 'Santiago de Chile', '780000'];
const [street, comuna, ciudad, zip] = address;

console.log(`You are in ${comuna} ${ciudad}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75',];
const [itemName, priceSmall, priceMedium, ] = item;

console.log(`A medium ${itemName} costs ${priceMedium}`);