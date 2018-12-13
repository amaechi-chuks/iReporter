import validator from 'validator';
// import geolocation from 'geolocation';

const checkItem = (inputValue) => {
  const errors = {};
  Object.keys(inputValue).forEach((key) => {
    if (!inputValue[key] || (validator.isEmpty(inputValue[key]))) {
      errors[key] = `${key} field is required`;
    } else {
      /*
      *incident validation
      */

      if (key === 'imageUrl') {
        if (!(validator.isURL(inputValue[key]))) {
          errors[key] = `${key} Valid Image is required`;
        }
      }
      if (key === 'status') {
        if (!(validator.isAscii(inputValue[key]))) {
          errors[key] = `${key} Valid Image is required`;
        }
      }
      if (key === 'videoUrl') {
        if (!(validator.isURL(inputValue[key], { min: 5, max: 1000 }))) {
          errors[key] = `${key} Valid video is required`;
        }
      }
      if (key === 'comment') {
        if (!(validator.isAscii(inputValue[key], { min: 5, max: 1000 }))) {
          errors[key] = `${key} must be between 5 to 1000 characters`;
        }
      }
      if (key === 'location') {
        if (!(validator.isAscii(inputValue[key], { min: 5, max: 1000 }))) {
          errors[key] = `${key} must be between 5 to 1000 characters`;
        }
      }
      /*
      *User Validation
      */
      if (key === 'firstName' || key === 'lastName' || key === 'otherNames') {
        if (inputValue[key].search(/[^A-Za-z\s]/) !== -1) {
          errors[key] = `${key} can only be alphabetical`;
        }
      }
      if (key === 'email') {
        if (!validator.isEmail(inputValue[key])) {
          errors[key] = `Invalid ${key}`;
        }
      }
      if (key === 'password') {
        if (!validator.isLength(inputValue[key], { min: 8, max: 50 })) {
          errors[key] = `${key} must between 8 and 50 characters`;
        }
      }
      if (key === 'phoneNumber') {
        if (!validator.isLength(inputValue[key], { min: 4, max: 20 })) {
          errors[key] = `${key} must between 8 and 50 characters`;
        }
      }
      if (key === 'username') {
        if (!validator.isLength(inputValue[key], { min: 4, max: 20 })) {
          errors[key] = `${key} must between 8 and 50 characters`;
        }
      }
    }
  });

  return errors;
};
export default checkItem;
