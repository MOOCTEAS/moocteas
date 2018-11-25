const fs = require('fs');

const apiKey = process.argv[2];
const domain = process.argv[3];
const messagingSenderId = process.argv[4];
console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.argv[4]);

const config = `const FIREBASE_CONFIG = {apiKey: '${apiKey}', authDomain: '${domain}.firebaseapp.com', databaseURL: 'https://${domain}.firebaseio.com', storageBucket: '${domain}.appspot.com', messagingSenderId: '${messagingSenderId}',}; export default FIREBASE_CONFIG;`;

fs.writeFileSync('src/firebase.config.js', config, 'utf-8');

console.log('readFileSync complete');
const data = fs.readFileSync('src/firebase.config.js', 'utf-8');
console.log(data);
