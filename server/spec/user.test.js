/**
 * Test for dummy data API endpoints
 */
import supertest from 'supertest';
import chai, { assert, expect } from 'chai';
import chaiHtpp from 'chai-http';
import app from '../app';
import inputs from './seed/user.data';

export const request = supertest(app);
// export const { expect } = chai;
export const wrongToken = 'ThisIsAWrongToken';

const userToken = { token: null };

chai.use(chaiHtpp);
describe('All Test cases for user Register', () => {
  it('Should return `201` for unique email signups', (done) => {
    request.post('/api/v1/auth/register')
      .set('Content-Type', 'application/json')
      .send(inputs.validInput1)
      .expect(201)
      .end((err, res) => {
        expect(res.body.message).to.eql('Registration successful!');
        expect(res.body).to.haveOwnProperty('token');
        expect(res.body.userDetails).to.eql({
          id: 104,
          firstname: 'Bruce',
          lastname: 'Banner',
          othernames: 'john',
          email: 'emesksmusa@yahoo.com',
          phonenumber: '08093056052',
          username: 'jacobUzomwnss',
          isAdmin: 'false',
          registered: Date.now(),
          updated: Date.now(),
        });
        if (err) done(err);
      });
    done();
  });

  it('Should return `201` when another unique email signups', (done) => {
    request.post('/api/v1/auth/register')
      .set('Content-Type', 'application/json')
      .send(inputs.validInput2)
      .expect(201)
      .end((err, res) => {
        expect(res.body.message).to.deep.eql('Registration successful!');
        expect(res.body).to.haveOwnProperty('token');
        expect(res.body.userDetails).to.eql({
          firstName: 'Mike',
          lastName: 'Owen',
          othernames: 'johns',
          email: 'mk@yahoo.com',
          password: 'chuks mike',
          phonenumber: '07068566559',
          username: 'chukschuks',
          isAdmin: 'false',
          registered: 'Date.now()',
          updated: 'Date.now()',
        });
        if (err) done(err);
      });
    done();
  });

  // it('should return `400` if some fields are undefined', (done) => {
  //   request.post('/api/v1/auth/register')
  //     .set('Content-Type', 'application/json')
  //     .send(inputs.emptyData)
  //     .expect(400)
  //     .end((err, res) => {
  //       expect(res.body.firstName).to.equal('You need to include a valid firstname');
  //       expect(res.body.lastName).to.equal('You need to include a valid lastname');
  //       expect(res.body.lastName).to.equal('You need to include a valid othernames');
  //       expect(res.body.email).to.equal('You need to include a valid email');
  //       expect(res.body.phonenumber).to.equal('You need to include a valid phonenumber');
  //       expect(res.body.username).to.equal('You need to include a valid username');
  //       if (err) done(err);
  //       done();
  //     });
  // });
  // it('should return `400` if email already exists', (done) => {
  //   request.post('/api/v1/auth/register')
  //     .set('Content-Type', 'application/json')
  //     .send(inputs.existingEmail)
  //     .expect(400)
  //     .end((err, res) => {
  //       // expect(res.body.status).to.equal(400);
  //       // expect(res.body.error).to.eql('A user with given email already exists');
  //       done();
  //     });
  // });
  // it('Should return `500` if password is not hashed', (done) => {
  //   request.post('/api/v1/auth/register')
  //     .set('Content-Type', 'application/json')
  //     .send({})
  //     .expect(500)
  //     .end((err, res) => {
  //       expect(res.body.password).to.equal(undefined);
  //       expect(res.status).to.equal(500);
  //       done();
  //     });
  // });

  // it('should return `400` status code with errors message for empty request', (done) => {
  //   request.post('/api/v1/auth/signup')
  //     .set('Content-Type', 'application/json')
  //     .send(inputs.emptyData)
  //     .expect(400)
  //     .end((err, res) => {
  //       //   expect(res.body.firstName).to.eql('firstName field is undefined');
  //       //   expect(res.body.lastName).to.eql('lastName field is undefined');
  //       //   expect(res.body.email).to.eql('email field is undefined');
  //       //   expect(res.body.password).to.eql('password field is undefined');
  //       //   expect(res.status).to.equal(400);
  //       //   done();
  //       // });
  //     });
  // });

// describe('All Test cases for user login', () => {
//   it('Should return `401` for wrong user input', (done) => {
//     request.post('/api/v1/auth/login')
//       .set('Content-Type', 'application/json')
//       .send(inputs.invalidEmailPassword)
//       .end((err, res) => {
//         expect(res.status).to.equal(401);
//         done();
//       });
//   });
//   it('Should return `401` and deny access if wrong userName is not entered', (done) => {
//     request.post('/api/v1/auth/login')
//       .set('Content-Type', 'application/json')
//       .send(inputs.noEmail)
//       .end((err, res) => {
//         expect(res.status).to.equal(401);
//         done();
//       });
//   });
//   it('Should return `401` and deny access if wrong Password is not entered', (done) => {
//     request.post('/api/v1/auth/login')
//       .set('Content-Type', 'application/json')
//       .send(inputs.noPassword)
//       .end((err, res) => {
//         expect(res.status).to.equal(401);
//         done();
//       });
//   });
//   it('Should return `200` for authenticated user details', (done) => {
//     request.post('/api/v1/auth/login')
//       .set('Content-Type', 'application/json')
//       .send(inputs.userOneLogin)
//       .end((err, res) => {
//         userToken.token = res.body.token;
//         expect(res.body).to.haveOwnProperty('token');
//         expect(res.status).to.equal(200);
//         done();
//       });
//   });
});
// describe('All Test cases for user Register', () => {
//   it('should return `400` if email already exists', (done) => {
//     request.post('/api/v1/auth/register')
//       .set('Content-Type', 'application/json')
//       .send(inputs.existingEmail)
//       .expect(400)
//       .end((err, res) => {
//         // expect(res.body.status).to.equal(400);
//         // expect(res.body.error).to.eql('A user with given email already exists');
//         done();
//       });
//   });
// });
export default userToken;
