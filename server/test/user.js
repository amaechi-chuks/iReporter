// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../../app';

// import { validSignUp, inValidSignUp, inValidSignIn, validSignIn } from '../test/mockDb/user';

// import db from '../models/incident';

// const { should, expect } = chai;
// should();

// chai.use(chaiHttp);

// const url2 = '/api/v1/auth/signup';
// const url1 = '/api/v1/auth/signin';


// describe('Test for user route', () => {
//     describe('Test for signin API', () => {
//         it('Should return 200 status if user details is okay', (done) => {
//             const newLength = db.userDb.length;
//             chai.request(app)
//               .post(url2)
//               .send(validSignUp[0])
//               .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.message.should.be.a('string');
//                 expect(db.userDb).to.have.length(newLength);
//                 done();
//               });
//           });
//     });
// });