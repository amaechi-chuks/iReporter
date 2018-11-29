const userDb = [
    {
        id: 1,
        firstName : 'chuks',
        lastName: 'amaechi',
        otherNames: 'umunnakwe',
        email: 'amaechichuks2000@yahoo.com',
        password: 'secret',
        confirmPassword: 'secret',
        phoneNumber: '07068566559',
        username: 'amaechichuks',
        registeredAlt: new Date().toDateString(),
        isAdmin: true
    },

    {
        id: 2,
        firstName : 'favor',
        lastName: 'chi',
        otherNames: 'success',
        email: 'favo@yahoo.com',
        password: 'level',
        confirmPassword: 'level',
        phoneNumber: '07068756998',
        username: 'successfavo',
        registeredAlt: new Date().toDateString(),
        isAdmin: false
    },

    {
        id: 3,
        firstName : 'kingsley',
        lastName: 'Ibeh',
        otherNames: 'chinedu',
        email: 'kingsley234@yahoo.com',
        password: 'soap',
        confirmPassword: 'soap',
        phoneNumber: '08055867368',
        username: 'kingsleyibeh',
        registeredAlt: new Date().toDateString(),
        isAdmin: false
    },

    {
        id: 4,
        firstName : 'frank',
        lastName: 'wisdom',
        otherNames: 'uchendu',
        email: 'frank@yahoo.com',
        password: 'hello',
        confirmPassword: 'hello',
        phoneNumber: '0806458678',
        username: 'frankbeh',
        registeredAlt: new Date().toDateString(),
        isAdmin: false
    }
];

const incident = [

    {
        id: 1,
        createdOn: new Date().toDateString(),
        createdBy: 1, // represents the user who created this record  
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: 'draft',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Human right must be respected' //comments
    },
    {
        id: 2,
        createdOn: new Date().toDateString(),
        createdBy: 2, // represents the user who created this record  
        type: 'red-flag',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: 'draft',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Thanks to NGO for taking care of the less privilege' //comments
    },
    {
        id: 3,
        createdOn: new Date().toDateString(),
        createdBy: 3, // represents the user who created this record  
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: 'draft',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Create awareness for child abuse' //comments
    },
    {
        id: 4,
        createdOn: new Date().toDateString(),
        createdBy: 4, // represents the user who created this record  
        type: 'intervention',       // [red-flag, intervention] 
        location: '6H 3E',   // Lat Long coordinates   ​ 
        status: 'draft',     // [draft, under investigation, resolved, rejected] 
        imageurl: 'https://www.image.com',
        videoUrl: 'https://www.video.com',
        comment: 'Nigerian Government should wake up in Education sector' //comments
    },
    
    
]



const db = { userDb, incident };

module.exports = db;