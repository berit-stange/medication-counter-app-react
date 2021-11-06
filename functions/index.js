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
const auth = require('./util/auth');


// const express = require('express');
// const request = require('request');
// const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


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
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Medication
// adding auth > all the API calls will require a token > can only be accessed by particular user
app.get('/medication', auth, getAllMedication);
// app.get('/type/:medicationId', auth, getOneMedication);
app.post('/type', auth, postOneMedication);
app.delete('/type/:medicationId', auth, deleteMedication);
app.put('/type/:medicationId', auth, editMedication);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));

exports.api = functions.https.onRequest(app);