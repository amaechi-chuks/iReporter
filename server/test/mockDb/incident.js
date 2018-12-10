export const validIncident = [
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1,
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag',
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Thanks to NGO for taking care of the less privilege',
  },
  {
    id: 3,
    createdOn: '2018-11-23',
    createdBy: 3, // represents the user who created this record
    type: 'intervention',
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Let us create awareness for child abuse',
  },
  {
    id: 4,
    createdOn: '2018-11-23',
    createdBy: 4, // represents the user who created this record
    type: 'intervention',
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Nigerian Government is less concern in Education',
  },

];


export const inValidIncidentDate = [

  {
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: [34],
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '34',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },

  {
    createdOn: '34rte_rf',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
];

export const inValidUserId = [
  {
    createdOn: '2018-11-23',
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: '', // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 'Ur', // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 675, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
];
export const invalidType = [
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: ['red-flaggin'], // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: '', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },

  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-345-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 're', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
];
export const inValidLocation = [
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 're', // [red-flag, intervention]
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: 45,
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '4hi 98H',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '4h',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
];


export const inValidStatus = [
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: '',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },

  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'dra',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },

  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draftGeomerty and algerbra',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
];

export const inValidImageUrl = [

  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: '',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: ['34trrf'],
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'go',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected',
  },
];

export const inValidVideoUrl = [
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    comment: 'Human right must be respected',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: '',
    comment: 'Human right must be respected',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: ['wrong.nt34'],
    comment: 'Human right must be respected',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'g0',
    comment: 'Human right must be respected',
  },
];

export const inValidComment = [
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',

  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: '',
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: ['333!+'],
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E',
    status: 'draft',
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'H',
  },
];
