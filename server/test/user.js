import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import { validSignUp, inValidSignUp, inValidSignIn, validSignIn } from '../test/mockDb/user';

