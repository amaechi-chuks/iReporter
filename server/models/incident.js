const userDb = [
  {
    id: 1,
    firstName: 'chuks',
    lastName: 'amaechi',
    otherNames: 'umunnakwe',
    email: 'amaechichuks2000@yahoo.com',
    password: 'secret',
    phoneNumber: '07068566559',
    username: 'amaechichuks',
    registeredAlt: '2018-10-11',
    isAdmin: true,
  },
  {
    id: 2,
    firstName: 'favor',
    lastName: 'chi',
    otherNames: 'success',
    email: 'favo@yahoo.com',
    password: 'level',
    phoneNumber: '07068756998',
    username: 'successfavo',
    registeredAlt: '2018-10-11',
    isAdmin: false,
  },

  {
    id: 3,
    firstName: 'kingsley',
    lastName: 'Ibeh',
    otherNames: 'chinedu',
    email: 'kingsley234@yahoo.com',
    password: 'soap',
    phoneNumber: '08055867368',
    username: 'kingsleyibeh',
    registeredAlt: '2018-10-11',
    isAdmin: false,
  },

  {
    id: 4,
    firstName: 'frank',
    lastName: 'wisdom',
    otherNames: 'uchendu',
    email: 'frank@yahoo.com',
    password: 'hello',
    phoneNumber: '0806458678',
    username: 'frankbeh',
    registeredAlt: '2018-10-11',
    isAdmin: false
  }
];
const incident = [
  {
    id: 1,
    createdOn: '2018-10-11',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageUrl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    id: 2,
    createdOn: '2018-10-11',
    createdBy: 2, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageUrl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Thanks to NGO for taking care of the less privilege',
  },
  {
    id: 3,
    createdOn: '2018-10-11',
    createdBy: 3, // represents the user who created this record
    type: 'intervention', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageUrl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Create awareness for child abuse',
  },
  {
    id: 4,
    createdOn: '2018-10-11',
    createdBy: 4, // represents the user who created this record
    type: 'intervention', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageUrl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Nigerian Government should wake up in Education sector',
  },
];

const db = { userDb, incident };
export default db;
