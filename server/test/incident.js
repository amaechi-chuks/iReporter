import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import {
  inValidUserId, invalidType,
  inValidLocation, inValidStatus, inValidImageUrl, inValidVideoUrl, inValidComment
} from './mockDb/incident';

import db from '../models/incident';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/red-flags';
const url1 = '/api/v1/red-flag';
const inValidParams = 'abc';
const inValidURL = `/api/v1/red-flag/${inValidParams}`;
const notFoundRedFlagId = 14;
const notFound = `/api/v1/red-flag/${notFoundRedFlagId}`;
const foundParams = 1;
const foundURL = `/api/v1/red-flag/${foundParams}`;

describe('Test for (METHOD)/ incident route', () => {
  describe('Tests for createIncident API', () => {
    it('Should return 400 status code for undefined createdBy', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUserId[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.eql('createdBy is required');
          done();
        });
    });
    it('Should return 400 status code for an empty userId', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUserId[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.eql('createdBy is required');
          done();
        });
    });
    it('Should return 400 status code for userId NAN', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUserId[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for userId not found', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidUserId[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for type not found', (done) => {
      chai.request(app)
        .post(url)
        .send(invalidType[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for type not string', (done) => {
      chai.request(app)
        .post(url)
        .send(invalidType[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an empty type', (done) => {
      chai.request(app)
        .post(url)
        .send(invalidType[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an inValid type character', (done) => {
      chai.request(app)
        .post(url)
        .send(invalidType[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an inValid type length', (done) => {
      chai.request(app)
        .post(url)
        .send(invalidType[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an undefined location', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidLocation[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for location not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidLocation[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an empty location', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidLocation[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an inValid location format', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidLocation[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an inValid location input ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidLocation[4])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an undefined status ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidStatus[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an empty status ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidStatus[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for an inValid status ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidStatus[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for inValid status format ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidStatus[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for undefined image URL ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidImageUrl[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty image URL ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidImageUrl[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for inValid image URL input ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidImageUrl[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for inValid image URL ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidImageUrl[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for undefined video URL ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidVideoUrl[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty video URL ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidVideoUrl[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for video URL not a string ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidVideoUrl[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for inValid video URL ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidVideoUrl[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for undefined comment ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidComment[0])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for empty comment ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidComment[1])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for comment not a string', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidComment[2])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 400 status code for comment too short ', (done) => {
      chai.request(app)
        .post(url)
        .send(inValidComment[3])
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
  });
  describe('Tests for getOne/getAll incident API', () => {
    it('Should return 400 status code if incidentId is invalid', (done) => {
      chai.request(app)
        .get(inValidURL)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 404 status code if incidentID is valid but not found', (done) => {
      chai.request(app)
        .get(notFound)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          expect(res.body.success).to.equal(false);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('Should return 200 status code if incident is found', (done) => {
      const incidentLength = db.incident.length;
      chai.request(app)
        .get(foundURL)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.a('string');
          expect(db.incident).to.have.length(incidentLength);
          done();
        });
    });
    it('Should return 200 status code and get all incident in db', (done) => {
      const sameLength = db.incident.length;
      chai.request(app)
        .get(url)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.a('string');
          expect(db.incident).to.have.length(sameLength);
          done();
        });
    });
  });
});
