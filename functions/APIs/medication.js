const { db } = require('../util/admin');

// fetching all the medication from the database and forwarding them to the client in a list
exports.getAllMedication = (request, response) => {
    db
        .collection('medication')
        .where('username', '==', request.user.username)
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let medication = [];
            data.forEach((doc) => {
                medication.push({
                    medicationId: doc.id,
                    title: doc.data().title,
                    username: doc.data().username,
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


// adding new medication type to list of medication
exports.postOneMedication = (request, response) => {
    if (request.body.body.trim() === '') {
        return response.status(400).json({ body: 'Must not be empty' });
    }
    if (request.body.title.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty ' });
    }

    const newMedicationType = {
        title: request.body.title,
        username: request.user.username,
        body: request.body.body,
        createdAt: new Date().toISOString()
    }

    db
        .collection('medication')
        .add(newMedicationType)
        .then((doc) => {
            const responseMedicationType = newMedicationType;
            responseMedicationType.id = doc.id;
            return response.json(responseMedicationType);
        })
        .catch((err) => {
            response.status(500).json({ error: 'Something went wrong' });
            console.log(err);
        });
};

// delete medication type
exports.deleteMedication = (request, response) => {
    const document = db.doc(`/medication/${request.params.medicationId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'Medication not found' })
            }
            if (doc.data().username !== request.user.username) {
                return response.status(403).json({ error: "UnAuthorized" })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Deleted!' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

// edit medicatione type
exports.editMedication = (request, response) => {
    if (request.body.todoId || request.body.createdAt) {
        response.status(403).json({ message: 'Not allowed to edit' });
    }
    let document = db.collection('medication').doc(`${request.params.medicationId}`);
    document.update(request.body)
        .then(() => {
            response.json({ message: 'Updated successfully' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({
                error: err.code
            });
        });
};