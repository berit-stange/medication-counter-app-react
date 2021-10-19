// fetching all the medication from the database and forwarding them to the client in a list

const { db } = require('../util/admin');

exports.getAllMedication = (request, response) => {
    db
        .collection('medication')
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let medication = [];
            data.forEach((doc) => {
                medication.push({
                    medicationId: doc.id,
                    title: doc.data().title,
                    body: doc.data().body,
                    createdAt: doc.data().createdAt,
                });
            });
            return response.json(medication);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ err: err.code });
        });
};


// first dummy objects: 
// exports.getAllMedication = (request, response) => {
//     medication = [
//         {
//             'id': '1',
//             'title': 'medication 1',
//             'body': '2 x täglich'
//         },
//         {
//             'id': '2',
//             'title': 'medication 2',
//             'body': '3 x täglich'
//         }
//         ,
//         {
//             'id': '3',
//             'title': 'medication 3',
//             'body': '1 x täglich'
//         }
//     ]
//     return response.json(medication);
// }