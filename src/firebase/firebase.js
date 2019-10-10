import * as firebase from 'firebase';

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9k7tGec-AZiB3BsipXFKp2lZQWhO9ux8",
  authDomain: "expensify-2c0e4.firebaseapp.com",
  databaseURL: "https://expensify-2c0e4.firebaseio.com",
  projectId: "expensify-2c0e4",
  storageBucket: "expensify-2c0e4.appspot.com",
  messagingSenderId: "209186479474",
  appId: "1:209186479474:web:6873415991ec25a9ae91eb",
  measurementId: "G-QDY05664M9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const database = firebase.database();

database.ref().set({
  name: 'Nelson Izquierdo',
  age: 35,
  isSingle: false,
  location: {
    city: 'Santiago',
    country: 'Chile'
  },
  // attributes: {
  //   height: 176,
  //   weight: 62
  // } 
}).then(() => {
  console.log('Data is saved');
}).catch((e)=>{
  console.log('This failed: ', e)
});

// database.ref().set('This is my data');

// database.ref('age').set(36);
// database.ref('location/city').set('Antofagasta');
database.ref('attributes').set({
  height: 176,
  weight: 62
}).then(() => {
  console.log('Attributes created');
}).catch((e) => {
  console.log('ocurrio un error', e);
})