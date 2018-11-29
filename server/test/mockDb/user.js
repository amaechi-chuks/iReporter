export const validSignUp = [
    // Good UserId
    {
        id: 1,
        firstName: 'chuks',
        lastName: 'amaechi',
        otherNames: 'umunnakwe',
        email: 'chuksamaechi1@gmail.com',
        password: 'secret33333',
        confirmPassword: 'secret33333',
        phoneNumber: '07068566559',
        username: 'amaechichuks',
        registeredAlt: new Date().toDateString()
    },

    //Good firstName
    {
        id: 1,
        firstName: 'chineye',
        lastName: 'frank',
        otherNames: 'umnakwe',
        email: 'chuksamaechi20@gmail.com',
        password: 'love44444',
        confirmPassword: 'love44444',
        phoneNumber: '0806856655',
        username: 'amaechichuks20',
        registeredAlt: new Date().toDateString()
    },

    //Good LastName
    {
        id: 1,
        firstName: 'emeka',
        lastName: 'uzo',
        otherNames: 'faith',
        email: 'chuksamaechi30@gmail.com',
        password: 'sally55555',
        confirmPassword: 'sally55555',
        phoneNumber: '0806852345',
        username: 'amaechichuks30',
        registeredAlt: new Date().toDateString()
    },

    //Good otherNmaes
    {
        id: 1,
        firstName: 'faithful',
        lastName: 'orji',
        otherNames: 'chisom',
        email: 'chuksamaechi40@gmail.com',
        password: 'buckky66666',
        confirmPassword: 'buckky66666',
        phoneNumber: '09056455335',
        username: 'amaechichuks40',
        registeredAlt: new Date().toDateString()
    },

    //Good Email
    {
        id: 1,
        firstName: 'pascal',
        lastName: 'john',
        otherNames: 'paul',
        email: 'chuksamaechi50@gmail.com',
        password: 'paul477777',
        confirmPassword: 'paul477777',
        phoneNumber: '08067654456',
        username: 'amaechichuks50',
        registeredAlt: new Date().toDateString()
    },

    //Good password
    {
        id: 1,
        firstName: 'adaugo',
        lastName: 'ujunnwa',
        otherNames: 'miracle',
        email: 'chuksamaechi60@gmail.com',
        password: 'hard88888',
        confirmPassword: 'hard88888',
        phoneNumber: '0806856455',
        username: 'amaechichuks60',
        registeredAlt: new Date().toDateString()
    },

    //Good confirmPassword

    {
        id: 1,
        firstName: 'love',
        lastName: 'uzo',
        otherNames: 'gift',
        email: 'chuksamaechi70@gmail.com',
        password: 'gift99999',
        confirmPassword: 'gift99999',
        phoneNumber: '0805856655',
        username: 'amaechichuks70',
        registeredAlt: new Date().toDateString()
    },

    //Good phoneNumber
    {
        id: 1,
        firstName: 'oyinye',
        lastName: 'ibeh',
        otherNames: 'ebube',
        email: 'chuksamaechi80@gmail.com',
        password: 'kind00000',
        confirmPassword: 'kind00000',
        phoneNumber: '0806856655',
        username: 'amaechichuks80',
        registeredAlt: new Date().toDateString()
    },

    //Good username
    {
        id: 1,
        firstName: 'isaac',
        lastName: 'paul',
        otherNames: 'peace',
        email: 'chuksamaechi90@gmail.com',
        password: 'peace4545',
        confirmPassword: 'peace4545',
        phoneNumber: '0806856665',
        username: 'amaechichuks90',
        registeredAlt: new Date().toDateString()
    },

    //Admin
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chuksamaechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechichuks09',
        registeredAlt: new Date().toDateString(),
        isAdmin: true
    }
];

export const inValidSignUp = [
    //udefined userId
    {
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chuksamaechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechichuks09',
        registeredAlt: new Date().toDateString()
    },

    //empty UserId
    {
        id: "",
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chuks60amaech@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'sally',
        registeredAlt: new Date().toDateString()
    },

    //userId not a number
    {
        id: "1",
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chuks45amaechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'mally',
        registeredAlt: new Date().toDateString()
    },

    //firstName Undefined
    {
        id: 1,
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chuksama56echi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'gift',
        registeredAlt: new Date().toDateString()
    },

    //firstName Empty
    {
        id: 1,
        firstName: '',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chuksamae44chi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amachuks09',
        registeredAlt: new Date().toDateString()
    },

    //firstName not a string
    {
        id: 1,
        firstName: 1,
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chuks67amaechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'aechichuks09',
        registeredAlt: new Date().toDateString()
    },

    //firstName length too short
    {
        id: 1,
        firstName: 'king',
        lastName: 'f',
        otherNames: 'ibe',
        email: 'chuksama45echi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechifrank09',
        registeredAlt: new Date().toDateString()
    },
    //firstName length too long
    {
        id: 1,
        firstName: 'kinggoodtotakepartinandelabootcampitsawesom',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chu34ksamaechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'solomon',
        registeredAlt: new Date().toDateString()
    },

    //lastname undefined
    {
        id: 1,
        firstName: 'king',
        otherNames: 'ibe',
        email: 'chuk67imaechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'joshua',
        registeredAlt: new Date().toDateString()
    },

    //lastName Empty
    {
        id: 1,
        firstName: 'king',
        lastName: '',
        otherNames: 'ibe',
        email: 'chuksamaectruthd33@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'pannychuks09',
        registeredAlt: new Date().toDateString()
    },

    //lastName not a string
    {
        id: 1,
        firstName: 'king',
        lastName: 2,
        otherNames: 'ibe',
        email: 'chuksamaechi56900@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'Naijaboy',
        registeredAlt: new Date().toDateString()
    },

    //lastNname too short
    {
        id: 1,
        firstName: 'king',
        lastName: 'f',
        otherNames: 'ibe',
        email: 'chuksfranki190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'comfort',
        registeredAlt: new Date().toDateString()
    },

    //lastName length too long
    {
        id: 1,
        firstName: 'king',
        lastName: 'frankyouarewelcomeheretoserveryoubetter',
        otherNames: 'ibe',
        email: 'chuksamaech89050@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'gracechuks09',
        registeredAlt: new Date().toDateString()
    },

    //othernames undefined
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        email: 'chukstyuirechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'victorhichuks09',
        registeredAlt: new Date().toDateString()
    },

    //otherNames Empty
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: '',
        email: 'chuksertaechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'sallyhichuks09',
        registeredAlt: new Date().toDateString()
    },

    //otherNames not a string
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 2,
        email: 'chuksasteechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechichuks09',
        registeredAlt: new Date().toDateString()
    },

    //otherNames too short
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'i',
        email: 'chuksamaechistew190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechichuks09',
        registeredAlt: new Date().toDateString()
    },

    //otherNames length too long
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibeyouwrewelcombacktoireporterinthe',
        email: 'camaechifla190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'gloria',
        registeredAlt: new Date().toDateString()
    },

    //Email undefined
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'alfred',
        registeredAlt: new Date().toDateString()
    },

    //Email empty
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: '',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechialfred09',
        registeredAlt: new Date().toDateString()
    },
    //Email not a string
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: ['camaechifla190@gmail.com'],
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechikeep9',
        registeredAlt: new Date().toDateString()
    },
    //Email length too short
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: 'c@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaetenth',
        registeredAlt: new Date().toDateString()
    },
    //email length too long
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: 'chuksamaechi1dfsjhfuhrfjhfuhisdfhfsjfsjsdf90@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'buckky',
        registeredAlt: new Date().toDateString()
    },

    //email already exist
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'chuksamaechi190@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechithomas',
        registeredAlt: new Date().toDateString()
    },

    //Password undefined
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: 'chuksamafrank1@gmail.com',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'stephen',
        registeredAlt: new Date().toDateString()
    },

    //Password empty
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: 'chuksamaechjoy23@gmail.com',
        password: '',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'micheal',
        registeredAlt: new Date().toDateString()
    },

    //Password not a string
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: 'joylovei190@gmail.com',
        password: ['ibe4543236'],
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'jacob',
        registeredAlt: new Date().toDateString()
    },

    //Password length too short
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: 'chukssalyy190@gmail.com',
        password: 'ib3',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'gozie',
        registeredAlt: new Date().toDateString()
    },

    //Password length too long
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'philip',
        email: 'chukbuckky345@gmail.com',
        password: 'ibe4543236onetwothreefourfivesixseveen',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'uche09',
        registeredAlt: new Date().toDateString()
    },

    //Undefined confirmPassword
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallypet456@gmail.com',
        password: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'mikepenny',
        registeredAlt: new Date().toDateString()
    },

    //confirmPassword Empty
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallydogs032@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'ebube',
        registeredAlt: new Date().toDateString()
    },

    //confirmPassword not a string
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallycat567@gmail.com',
        password: 'ibe4543236',
        confirmPassword: ['ibe4543236'],
        phoneNumber: '0806556655',
        username: 'ebere',
        registeredAlt: new Date().toDateString()
    },

    //confirmPassword length too short
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallybirds@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'i4',
        phoneNumber: '0806556655',
        username: 'omolara',
        registeredAlt: new Date().toDateString()
    },

    //confirmPassword length too long
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallymike345@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236chuksamaechi45676',
        phoneNumber: '0806556655',
        username: 'tunde',
        registeredAlt: new Date().toDateString()
    },

    //phoneNumber undefined
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'phonesally343@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        username: 'hassan',
        registeredAlt: new Date().toDateString()
    },

    //phoneNumber Empty
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallychuks345@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '',
        username: 'fasasi',
        registeredAlt: new Date().toDateString()
    },

    //phoneNumber not a string
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallyfrank345@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: ['0806556655'],
        username: 'lekeajai',
        registeredAlt: new Date().toDateString()
    },
    //Invalid phoneNumber format
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallyphilip345@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: 'uij0806556',
        username: 'lukmon',
        registeredAlt: new Date().toDateString()
    },

    //phoneNumber too short
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallybeckky345@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '08',
        username: 'chukwuma',
        registeredAlt: new Date().toDateString()
    },

    //phoneNumber too long
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'sallymike345@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '08065566556767990889009089898778899999',
        username: 'chimezie',
        registeredAlt: new Date().toDateString()
    },

    //Undefined userName
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'savethedate09@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        registeredAlt: new Date().toDateString()

    },
    //Empty username
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'ikejacity45@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: '',
        registeredAlt: new Date().toDateString()
    },

    //userName already exist
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'lagosemial45@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechichuks09',
        registeredAlt: new Date().toDateString()
    },

    //userName not a string
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'wedding3456@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: ['amaechichuks09'],
        registeredAlt: new Date().toDateString()
    },

    //userName length too short
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'victoriagtb45@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'a',
        registeredAlt: new Date().toDateString()
    },

    //userName length too long
    {
        id: 1,
        firstName: 'king',
        lastName: 'frank',
        otherNames: 'ibe',
        email: 'fidelia3456@gmail.com',
        password: 'ibe4543236',
        confirmPassword: 'ibe4543236',
        phoneNumber: '0806556655',
        username: 'amaechichuks09makingittoolongfornow',
        registeredAlt: new Date().toDateString()
    },
//registerdAlt undefined
{
    id: 1,
    firstName: 'love',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'register3456@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'regitered'
},

//registeredAlt empty
{
    id: 1,
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
//registeredAlt length too short
    id: 1,
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

//registeredAlength too long
{
    id: 1,
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

//registeredAlt not a date
{
    id: 1,
    firstName: 'king',
    lastName: 'frank',
    otherNames: 'ibe',
    email: 'happyman4@gmail.com',
    password: 'ibe4543236',
    confirmPassword: 'ibe4543236',
    phoneNumber: '0806556655',
    username: 'happy',
    registeredAlt: [new Date()]
},

//is not in database
{
    id: 12,
    firstName : 'prosper',
    lastName: 'guest',
    otherNames: 'success',
    email: 'deliver8@yahoo.com',
    password: 'level6768',
    confirmPassword: 'level6798',
    phoneNumber: '07068756498',
    username: 'successfavo1',
    registeredAlt: new Date().toDateString(),
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
