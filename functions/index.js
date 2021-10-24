// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const app = require('express')();

// import methods and after that assign routes to them
const {
    getAllMedication,
    postOneMedication,
    deleteMedication,
    editMedication
} = require('./APIs/medication')

const {
    loginUser,
    signUpUser,
    getUserDetail
} = require('./APIs/users')

// Medication
app.get('/medication', getAllMedication);
app.post('/type', postOneMedication);
app.delete('/type/:medicationId', deleteMedication);
app.put('/type/:medicationId', editMedication);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetail);

exports.api = functions.https.onRequest(app);