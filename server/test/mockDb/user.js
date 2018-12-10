export const validSignUp = [
  // Good UserId
  {
    firstName: 'chuks',
    lastName: 'amaechi',
    otherNames: 'umunnakwe',
    email: 'amaechichuks2000@yahoo.com',
    password: 'secret88888',
    confirmPassword: 'secret00000',
    phoneNumber: '07068566559',
    username: 'amaechichuks',


  },
  // Good firstName
  {
    firstName: 'chineye',
    lastName: 'frank',
    otherNames: 'umnakwe',
    email: 'chuksamaechi20@gmail.com',
    password: 'love44444',
    confirmPassword: 'love44444',
    phoneNumber: '0806856655',
    username: 'amaechichuks20',

  },

  // Good LastName
  {

    firstName: 'emeka',
    lastName: 'uzo',
    otherNames: 'faith',
    email: 'chuksamaechi30@gmail.com',
    password: 'sally55555',
    confirmPassword: 'sally55555',
    phoneNumber: '0806852345',
    username: 'amaechichuks30',

  },

  // Good otherNmaes
  {

    firstName: 'faithful',
    lastName: 'orji',
    otherNames: 'chisom',
    email: 'chuksamaechi40@gmail.com',
    password: 'buckky66666',
    confirmPassword: 'buckky66666',
    phoneNumber: '09056455335',
    username: 'amaechichuks40',

  },
  // Good Email
  {
    firstName: 'pascal',
    lastName: 'john',
    otherNames: 'paul',
    email: 'chuksamaechi50@gmail.com',
    password: 'paul477777',
    confirmPassword: 'paul477777',
    phoneNumber: '08067654456',
    username: 'amaechichuks50',
  },
  // Good password
  {
    firstName: 'adaugo',
    lastName: 'ujunnwa',
    otherNames: 'miracle',
    email: 'chuksamaechi60@gmail.com',
    password: 'hard88888',
    confirmPassword: 'hard88888',
    phoneNumber: '0806856455',
    username: 'amaechichuks60',
  },
  // Good confirmPassword

  {

    firstName: 'love',
    lastName: 'uzo',
    otherNames: 'gift',
    email: 'chuksamaechi70@gmail.com',
    password: 'gift99999',
    confirmPassword: 'gift99999',
    phoneNumber: '0805856655',
    username: 'amaechichuks70',

  },

  // Good phoneNumber
  {

    firstName: 'oyinye',
    lastName: 'ibeh',
    otherNames: 'ebube',
    email: 'chuksamaechi80@gmail.com',
    password: 'kind00000',
    confirmPassword: 'kind00000',
    phoneNumber: '0806856655',
    username: 'amaechichuks80',

  },

  // Good username
  {

    firstName: 'isaac',
    lastName: 'paul',
    otherNames: 'peace',
    email: 'chuksamaechi90@gmail.com',
    password: 'peace4545',
    confirmPassword: 'peace4545',
    phoneNumber: '0806856665',
    username: 'amaechichuks90',

  },

  // Admin
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chuksamaechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechichuks09',

    isAdmin: true
  }
];

export const inValidSignUp = [
  // udefined userId
  {
    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chuksamaechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechichuks09',

  },

  // empty UserId
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chuks60amaech@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'sally',

  },

  // userId not a number
  {
    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chuks45amaechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'mally',

  },

  // firstName Undefined
  {

    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chuksama56echi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'gift',

  },

  // firstName Empty
  {

    firstName: '',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chuksamae44chi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amachuks09',

  },

  // firstName not a string
  {

    firstName: 1,
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chuks67amaechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'aechichuks09',

  },

  // firstName length too short
  {

    firstName: 'king',
    lastName: 'f',
    otherNames: 'ibe',
    email: 'chuksama45echi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechifrank09',

  },
  // firstName length too long
  {

    firstName: 'kinggoodtotakepartinandelabootcampitsawesom',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chu34ksamaechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'solomon',

  },

  // lastname undefined
  {

    firstName: 'king',
    otherNames: 'ibe',
    email: 'chuk67imaechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'joshua',

  },

  // lastName Empty
  {

    firstName: 'king',
    lastName: '',
    otherNames: 'ibe',
    email: 'chuksamaectruthd33@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'pannychuks09',

  },

  // lastName not a string
  {

    firstName: 'king',
    lastName: 2,
    otherNames: 'ibe',
    email: 'chuksamaechi56900@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'Naijaboy',

  },

  // lastNname too short
  {

    firstName: 'king',
    lastName: 'f',
    otherNames: 'ibe',
    email: 'chuksfranki190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'comfort',

  },

  // lastName length too long
  {

    firstName: 'king',
    lastName: 'frankyouarewelcomeheretoserveryoubetter',
    otherNames: 'ibe',
    email: 'chuksamaech89050@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'gracechuks09',

  },

  // othernames undefined
  {

    firstName: 'king',
    lastName: 'frank',
    email: 'chukstyuirechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'victorhichuks09',

  },

  // otherNames Empty
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: '',
    email: 'chuksertaechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'sallyhichuks09',

  },

  // otherNames not a string
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 2,
    email: 'chuksasteechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechichuks09',

  },

  // otherNames too short
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'i',
    email: 'chuksamaechistew190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechichuks09',

  },

  // otherNames length too long
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibeyouwrewelcombacktoireporterinthe',
    email: 'camaechifla190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'gloria',

  },

  // Email undefined
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'alfred',

  },

  // Email empty
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: '',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechialfred09',

  },
  // Email not a string
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: ['camaechifla190@gmail.com'],
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechikeep9',

  },
  // Email length too short
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: 'c@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaetenth',

  },
  // email length too long
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: 'chuksamaechi1dfsjhfuhrfjhfuhisdfhfsjfsjsdf90@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'buckky',

  },

  // email already exist
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'chuksamaechi190@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechithomas',

  },

  // Password undefined
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: 'chuksamafrank1@gmail.com',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'stephen',

  },

  // Password empty
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: 'chuksamaechjoy23@gmail.com',
    password: '',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'micheal',

  },

  // Password not a string
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: 'joylovei190@gmail.com',
    password: ['ibe4543236'],
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'jacob',

  },

  // Password length too short
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: 'chukssalyy190@gmail.com',
    password: 'ib3',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'gozie',

  },

  // Password length too long
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'philip',
    email: 'chukbuckky345@gmail.com',
    password: 'ibe4543236onetwothreefourfivesixseveen',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'uche09',

  },

  // Undefined confirmPassword
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallypet456@gmail.com',
    password: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'mikepenny',

  },

  // confirmPassword Empty
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallydogs032@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'ebube',

  },

  // confirmPassword not a string
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallycat567@gmail.com',
    password: 'ibe4543236',
    confirmPassword: ['ibe4543236'],
    phoneNumber: '0806556655',
    username: 'ebere',

  },

  // confirmPassword length too short
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallybirds@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'i4',
    phoneNumber: '0806556655',
    username: 'omolara',

  },

  // confirmPassword length too long
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallymike345@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236chuksamaechi45676',
    phoneNumber: '0806556655',
    username: 'tunde',

  },

  // phoneNumber undefined
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'phonesally343@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    username: 'hassan',

  },

  // phoneNumber Empty
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallychuks345@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '',
    username: 'fasasi',

  },

  // phoneNumber not a string
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallyfrank345@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: ['0806556655'],
    username: 'lekeajai',

  },
  // Invalid phoneNumber format
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallyphilip345@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: 'uij0806556',
    username: 'lukmon',

  },

  // phoneNumber too short
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallybeckky345@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '08',
    username: 'chukwuma',

  },

  // phoneNumber too long
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'sallymike345@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '08065566556767990889009089898778899999',
    username: 'chimezie',

  },

  // Undefined userName
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'savethedate09@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',


  },
  // Empty username
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'ikejacity45@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: '',

  },

  // userName already exist
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'lagosemial45@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechichuks09',

  },

  // userName not a string
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'wedding3456@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: ['amaechichuks09'],

  },

  // userName length too short
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'victoriagtb45@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'a',

  },

  // userName length too long
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'fidelia3456@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'amaechichuks09makingittoolongfornow',

  },
  // registerdAlt undefined
  {

    firstName: 'love',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'register3456@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'regitered'
  },

  // registeredAlt empty
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'donalbush4@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'gamewin',
    registeredAlt: '',
  },

  {
    // registeredAlt length too short

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'becareful2@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'barrister',
    registeredAlt: '07',
  },

  // registeredAlength too long
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'gerald54@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'joygood',
    registeredAlt: '',
  },

  // registeredAlt not a date
  {

    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'happyman4@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'happy',
    registeredAlt: ['2018-10-11']
  },

  // is not in database
  {
    id: 12,
    firstName: 'prosper',
    lastName: 'guest',
    otherNames: 'success',
    email: 'deliver8@yahoo.com',
    password: 'level6768',
    confirmPassword: 'level6798',
    phoneNumber: '07068756498',
    username: 'successfavo1',

  },

];

export const inValidSignIn = [
  // Undefined email
  {
    password: 'secret33333',
  },

  // Empty email
  {
    email: '',
    password: 'secret33333',
  },

  // Email not a string
  {
    email: [],
    password: 'secret33333',
  },

  // Email not in database
  {
    email: 'databser3@gmail.com',
    password: 'secret33333',
  },

  // Password undefined
  {
    email: 'chuksamaechi1@gmail.com',
  },

  // Password empty
  {
    email: 'chuksamaechi1@gmail.com',
    password: '',
  },

  // Email does not tally with password
  {
    email: 'chuksamaechi1@gmail.com',
    password: 'secr676876'
  }
];

export const validSignIn = [
  {
    email: 'chuksamaechi1@gmail.com',
    password: 'secret33333'
  }
];
