import * as firebase from 'firebase';
import moment from 'moment';

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('Expense Removed', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('New Expense', snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   })
//   .catch((error) => {
//     console.log('Error fetching:', error)
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// const expense = {
//   description: 'Luz',
//   note: '',
//   amount: 15000,
//   createdAt: moment().valueOf()
// };
// database.ref('expenses').push(expense);

// database.ref().set({
//   name: 'Nelson Izquierdo',
//   age: 35,
//   stressLevel: 6,
//   job: {
//     title: 'FrontEnd Developer',
//     company: 'Globant'
//   },
//   location: {
//     city: 'Santiago',
//     country: 'Chile'
//   },
//   attributes: {
//     height: 176,
//     weight: 62
//   } 
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e)=>{
//   console.log('This failed: ', e)
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Google',
//   'location/city': 'Santiago updated'
// });

// database.ref('isSingle').set(null); //pasar null elimina el dato

// database.ref('isSingle').remove()
//   .then(()=> {
//     console.log('isSIngle Removed');
//   })
//   .catch((error) => {
//     console.log('Fallo en remove: ', error)
//   });

// database.ref()
//   .once('value')
//     .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//     })
//     .catch((error) => {
//       console.log('Error buscando datos', error)
//     });

// const printInfo = (data) => {
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }


// database.ref().on('value', (snapshot) => {
//   printInfo(snapshot.val());
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Nelson 2'
//   });
// }, 3500);