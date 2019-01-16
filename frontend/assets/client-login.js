const baseUrl = 'https://ireporter-software.herokuapp.com/api/v1';
const loginForm = document.querySelector('#login');
const registerForm = document.querySelector('#register');

/**
 * Assigns an event-listener to loginForm if it exists in the window
 *
 * @param {object} e - The event parameter
 */
const authLogin = () => {
  fetch(`${baseUrl}:/incidentType`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
      'x-access-token': localStorage.token,
    },
  }).then(res => res.json()).then((data) => {
    if (data.status === 404) window.location.replace('createintervention.html');
    if (data.status === 200) {
      if (sessionStorage.getItem('incidentType') === null || sessionStorage.getItem('incidentType') !== data) {
        const incidentType = [];
        incidentType.push(data);
        sessionStorage.setItem('incidentType', JSON.stringify(incidentType));
      } else {
        const incidentType = JSON.parse(sessionStorage.getItem('incidentType'));
        incidentType.push(data);
        sessionStorage.setItem('incidentType', JSON.stringify(incidentType));
      }
      window.location.replace('admin-dashboard.html');
    }
  }).catch((error) => {
    document.querySelector('#error')
      .innerHTML = `<h2>server error<h2/>
          <h3>${error}<h3/>`;
  });
};

/**
 * Assigns an event-listener to loginForm if it exists in the window
 *
 * @param {object} e - The event parameter
 */
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(res => res.json())
      .then((data) => {
        if (data.status === 200) {
          window.localStorage.token = data.token;
          document.querySelector('#login-form')
            .innerHTML = `<h2>Login Successful<h2/>
            <h3>Welcome<h3/> <p>${data.user.fullName}<p/>`;
          setTimeout(() => {
            authLogin();
          }, 5000);
        } else {
          document.querySelector('#login-form')
            .innerHTML = `<h2>${data.errors.form}<h2/>
            <h3>Please check your login details<h3/>`;
        }
      }).catch((error) => {
        document.querySelector('#error')
          .innerHTML = `<h2>server error<h2/>
              <h3>${error}<h3/>`;
      });
  });
}
/**
 * Assigns an event-listener to signupForm if it exists in the window
 *
 * @param {object} e - The event parameter
 */
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const otherNames = document.querySelector('#otherNames').value;
    const email = document.querySelector('#email').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;
    const password = document.querySelector('#password').value;
    const userName = document.querySelector('#username').value;
    const inputValue = {
      firstName,
      lastName,
      otherNames,
      email,
      phoneNumber,
      password,
      userName,
    };
    fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputValue),
    }).then(res => res.json())
      .then((data) => {
        if (data.success === true) {
          window.localStorage.token = data.token;
          document.querySelector('#signup-form')
            .innerHTML = `<h2>Signup successful<h2/>
            <h3>Welcome to iReport<h3/> <p>${data.user.firstName}<p/>`;
          setTimeout(() => {
            window.location.replace('createintervention.html');
          }, 5000);
        } else {
          let output = '<h3>Error<h3/>';
          Object.keys(data).forEach((key) => {
            output += `<p>${data[key]}<p/>`;
          });
          document.querySelector('#signup-form')
            .innerHTML = output;
        }
      }).catch((error) => {
        document.querySelector('#error')
          .innerHTML = `<h2>server error<h2/>
            <h3>${error}<h3/>`;
      });
  });
}
