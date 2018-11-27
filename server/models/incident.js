const userDb = [
    {
        id: 1,
        firstname: 'chuks',
        lastname: 'amaechi',
        othernames: 'umunnakwe',
        email: 'amaechichuks2000@yahoo.com',
        password: 'secret',
        phoneNumber: '07068566559',
        username: 'amaechichuks',
        registered: new Date().toDateString(),
        isAdmin: true
    },

    {
        id: 2,
        firstname: 'favor',
        lastname: 'chi',
        othernames: 'success',
        email: 'favo@yahoo.com',
        password: 'level',
        phoneNumber: '07068756998',
        username: 'successfavo',
        registered: new Date().toDateString(),
        isAdmin: false
    },

    {
        id: 3,
        firstname: 'kingsley',
        lastname: 'Ibeh',
        othernames: 'chinedu',
        email: 'kingsley234@yahoo.com',
        password: 'soap',
        phoneNumber: '08055867368',
        username: 'kingsleyibeh',
        registered: new Date().toDateString(),
        isAdmin: false
    },

    {
        id: 4,
        firstname: 'frank',
        lastname: 'wisdom',
        othernames: 'uchendu',
        email: 'frank@yahoo.com',
        password: 'hello',
        phoneNumber: '0806458678',
        username: 'frankbeh',
        registered: new Date().toDateString(),
        isAdmin: false
    }
];

const incident = [
    {
        id: 1,
        createdOn: new Date().toDateString(),
        createdBy: 1, // represents the user who created this record  
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Less create awareness for child abuse' //comments
    },
    {
        id: 2,
        createdOn: new Date().toDateString(),
        createdBy: 1, // represents the user who created this record  
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Nigerian Government is less concern in Education' //comments
    },
    {
        id: 3,
        createdOn: new Date().toDateString(),
        createdBy: 1, // represents the user who created this record 
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'NLC should look into industrial rules and regulation' //comments
    },
    {
        id: 4,
        createdOn: new Date().toDateString(),
        createdBy: 4, // represents the user who created this record 
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Thanks to Lagos state ministering of environment for clearing the drainage' //comments
    },

    {
        id: 1,
        createdOn: new Date().toDateString(),
        createdBy: 1, // represents the user who created this record  
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Our government should wale up from their sleep' //comments
    },

    {
        id: 2,
        createdOn: new Date().toDateString(),
        createdBy: 2, // represents the user who created this record  
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'APC fighting PDP' //comments
    },
    {
        id: 3,
        createdOn: new Date().toDateString(),
        createdBy: 3, // represents the user who created this record  
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Human right must be respected' //comments
    },
    {
        id: 4,
        createdOn: new Date().toDateString(),
        createdBy: 4, // represents the user who created this record  
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Thanks to NGO for taking care of the less privilege' //comments
    }
]

const RedFlag = [];

const Intervention = [];

const db = { userDb, incident, RedFlag, Intervention };

module.exports = db;