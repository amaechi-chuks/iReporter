import UserValidator from './user';
import VerifyRole from './auth';
import IncidentValidator from './incident';

const middlewares = {
  UserValidator, VerifyRole, IncidentValidator,
};

export default middlewares;
