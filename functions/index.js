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

const {
    getAllMedication,
    postOneMedication,
    deleteMedication,
    editMedication
} = require('./APIs/medication')

// Medication
app.get('/medication', getAllMedication);
app.post('/type', postOneMedication);
app.delete('/type/:medicationId', deleteMedication);
app.put('/type/:medicationId', editMedication);

exports.api = functions.https.onRequest(app);