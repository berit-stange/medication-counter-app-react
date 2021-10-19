// import the firebase admin package + initialize the firestore database object
// export this so that other modules can use it

const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };