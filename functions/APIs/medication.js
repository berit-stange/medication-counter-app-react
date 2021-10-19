exports.getAllMedication = (request, response) => {
    medication = [
        {
            'id': '1',
            'title': 'medication 1',
            'body': '2 x täglich'
        },
        {
            'id': '2',
            'title': 'medication 2',
            'body': '3 x täglich'
        }
        ,
        {
            'id': '3',
            'title': 'medication 3',
            'body': '1 x täglich'
        }
    ]
    return response.json(medication);
}