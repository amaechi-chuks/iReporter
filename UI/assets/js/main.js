const messageBody = [
     "iReporter is your voice",
     "Get ready to make headlines",
     "Let your voice be heard",
     "What are you waiting for?",
     "Just click the button"
];

const messageFunction= () => {
  messageBody.forEach((intro, index, introArr) => {
    let displayMessage = document.querySelector('.display--message');
    displayMessage.style.direction = "ltr";
    displayMessage.style.fontSize = "large";
    displayMessage.style.fontStyle = "oblique";
    displayMessage.style.fontFamily = "sans-serif";
    displayMessage.style.marginRight = "50px";
    displayMessage.style.textAlign = "center";
    displayMessage.innerHTML = introArr[index++ % introArr.length];
    setInterval(() => {
      displayMessage.innerHTML = introArr[index++ % introArr.length];
    }, 6000);
  });
}
window.onload = messageFunction();

/**
 * @method loadSideBar responsible for the behaviour of the menu on mobile
 * @description loads hamburger menu once the window loads
 */
const app = {};

app.loadSideBar = () => {
    const btns = Array.from(document.getElementsByClassName('js__navbar__toggler'));
    const navBarCollaspe = document.querySelector('.navbar__collapse');
  
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (navBarCollaspe.style.display === 'none') {
          navBarCollaspe.style.display = 'block';
        } else {
          navBarCollaspe.style.display = 'none';
        }
      });
    });
  };
