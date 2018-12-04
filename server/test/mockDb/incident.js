export const validIncident = [
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Thanks to NGO for taking care of the less privilege' // comments
  },
  {
    id: 3,
    createdOn: '2018-11-23',
    createdBy: 3, // represents the user who created this record
    type: 'intervention', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Let us create awareness for child abuse' // comments
  },
  {
    id: 4,
    createdOn: '2018-11-23',
    createdBy: 4, // represents the user who created this record
    type: 'intervention', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Nigerian Government is less concern in Education' // comments
  }

];


export const inValidIncidentDate = [
  /**
     * ***************
     * At index [0]
     * ***************
     * undefined incident date
     */
  {
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
     * ***************
     * At index [1]
     * ***************
     * incident date not a string
     */
  {
    createdOn: [34],
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
     * ***************
     * At index [2]
     * ***************
     *Empty incident date
     */
  {
    createdOn: '',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
    * ***************
    * At index [3]
    * ***************
    *Invalid date length
    */
  {
    createdOn: '34',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },
  /**
    * ***************
    * At index [4]
    * ***************
    *Invalid date
    */

  {
    createdOn: '34rte_rf',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  }
];

export const inValidUserId = [
  /**
   * ***************
   * At index [0]
   * ***************
   *Undefined userId
   */
  {
    createdOn: '2018-11-23',
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
   * ***************
   * At index [1]
   * ***************
   *Empty userId
   */
  {
    createdOn: '2018-11-23',
    createdBy: '', // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
  * ***************
  * At index [2]
  * ***************
  *UserId NAN
  */
  {
    createdOn: '2018-11-23',
    createdBy: '3r', // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },
  /**
  * ***************
  * At index [3]
  * ***************
  *UserId NAN
  */
  {
    createdOn: '2018-11-23',
    createdBy: 675, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  }
];

/**
* ***************
* At index [0]
* ***************
*Undefined Type
*/
export const invalidType = [
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
* ***************
* At index [1]
* ***************
*Type is not a string
*/
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: ['red-flaggin'], // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },


  /**
* ***************
* At index [2]
* ***************
*Empty type
*/
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: '', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
* ***************
* At index [3]
* ***************
*Invalid Type character
*/

  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-345-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },


  /**
 * ***************
 * At index [4]
 * ***************
 *Invalid Type length
 */
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 're', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  }
];
export const inValidLocation = [
  /**
        * ***************
        * At index [0]
        * ***************
        *Undefined Location
        */
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 're', // [red-flag, intervention]
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
     * ***************
     * At index [1]
     * ***************
     *Location not a string
     */
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: 45, // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },


  /**
    * ***************
    * At index [2]
    * ***************
    *Empty Location
    */
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
    * ***************
    * At index [3]
    * ***************
    *Invalid Location Input
    */
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '4hi 98H', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
    * ***************
    * At index [4]
    * ***************
    *Invalid Location Input Length
    */
  {
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '4h', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  }
];


export const inValidStatus = [
  /**
           * ***************
           * At index [0]
           * ***************
           *Undefined status
           */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
       * ***************
       * At index [1]
       * ***************
       *Empty status
       */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: '', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  {

    /**
       * ***************
       * At index [2]
       * ***************
       *Invalid status input
       */
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'dra', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  {
    /**
       * ***************
       * At index [3]
       * ***************
       *Invalid status input length
       */
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draftGeomerty and algerbra', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  }
];

export const inValidImageUrl = [

  {
    /**
      * ***************
      * At index [0]
      * ***************
      *Undefined ImageUrl
      */
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },
  /**
  * ***************
  * At index [1]
  * ***************
  *Empty imageUrl
  */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: '',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
     * ***************
     * At index [2]
     * ***************
     *Invalid Image Input
     */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: ['34trrf'],
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  },

  /**
        * ***************
        * At index [3]
        * ***************
        *Invalid Image input length
        */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'go',
    videoUrl: 'https://www.video.com',
    comment: 'Human right must be respected' // comments
  }
];

export const inValidVideoUrl = [
  {
    /**
      * ***************
      * At index [0]
      * ***************
      *Undefined VideoUrl
      */
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    comment: 'Human right must be respected' // comments
  },
  /**
  * ***************
  * At index [1]
  * ***************
  *Empty videoUrl
  */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: '',
    comment: 'Human right must be respected' // comments
  },

  /**
     * ***************
     * At index [2]
     * ***************
     *Invalid video Input
     */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: ['wrong.nt34'],
    comment: 'Human right must be respected' // comments
  },

  /**
        * ***************
        * At index [3]
        * ***************
        *Invalid videeo input length
        */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'g0',
    comment: 'Human right must be respected' // comments
  }
];

export const inValidComment = [
  {
    /**
      * ***************
      * At index [0]
      * ***************
      *Undefined comment
      */
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',

  },
  /**
  * ***************
  * At index [1]
  * ***************
  *Empty comment
  */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: '' // comments
  },

  /**
     * ***************
     * At index [2]
     * ***************
     *Invalid comment Input
     */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: ['333!+'] // comments
  },

  /**
        * ***************
        * At index [3]
        * ***************
        *Invalid comment input length
        */
  {
    id: 1,
    createdOn: '2018-11-23',
    createdBy: 1, // represents the user who created this record
    type: 'red-flag', // [red-flag, intervention]
    location: '6H 3E', // Lat Long coordinates
    status: 'draft', // [draft, under investigation, resolved, rejected]
    imageurl: 'https://www.image.com',
    videoUrl: 'https://www.video.com',
    comment: 'H' // comments
  }
];
