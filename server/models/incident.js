const userDb = [
    {
        id: 1,
        firstname: 'chuks',
        lastname: 'amaechi',
        othernames: 'umunnakwe',
        email: 'amaechichuks2000@yahoo.com',
        phoneNumber: '07068566559',
        username: 'amaechichuks',
        registered: new Date(),
        isAdmin: true
    },

    {
        id: 2,
        firstname: 'favor',
        lastname: 'chi',
        othernames: 'success',
        email: 'favo@yahoo.com',
        phoneNumber: '07068756998',
        username: 'successfavo',
        registered: new Date(),
        isAdmin: false
    },

    {
        id: 3,
        firstname: 'kingsley',
        lastname: 'Ibeh',
        othernames: 'chinedu',
        email: 'kingsley234@yahoo.com',
        phoneNumber: '08055867368',
        username: 'kingsleyibeh',
        registered: new Date(),
        isAdmin: false
    },

    {
        id: 4,
        firstname: 'frank',
        lastname: 'wisdom',
        othernames: 'uchendu',
        email: 'frank@yahoo.com',
        phoneNumber: '0806458678',
        username: 'frankbeh',
        registered: new Date(),
        isAdmin: false
    }
];

const incident = [
    {
        id: 1,
        createdOn: new Date(),
        createdBy: 1, // represents the user who created this record   
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.example.com',
       videoUrl: 'https://www.videos.com',
        comment: 'fun' //comments
    },
    {
        id: 2,
        createdOn: new Date(),
        createdBy: 1, // represents the user who created this record   
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.example.com',
       videoUrl: 'https://www.videos.com',
        comment: 'fun' //comments
    },
    {
        id: 3,
        createdOn: new Date(),
        createdBy: 1, // represents the user who created this record   
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.example.com',
       videoUrl: 'https://www.videos.com',
        comment: 'fun' //comments
    },

    {
        id: 4,
        createdOn: new Date(),
        createdBy: 3, // represents the user who created this record   
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.example.com',
        videoUrl: 'https://www.videos.com',
        comment: 'fun' //comments
    },

    {
        id: 5,
        createdOn: new Date(),
        createdBy: 4, // represents the user who created this record   
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.example.com',
        videoUrl: 'https://www.videos.com',
        comment: 'fun' //comments
    },
    {
        id: 6,
        createdOn: new Date(),
        createdBy: 2, // represents the user who created this record   
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: '',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.example.com',
        videoUrl: 'https://www.videos.com',
        comment: 'fun' //comments
    }
]

const db = { userDb, incident };

module.exports = db;