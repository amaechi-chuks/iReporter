const introductions = [
    "iReporter is your voice",
     "It will help you pass your message",
     "across the appropriate authorities and the general public",
    "It guarantees a good and a safer way to report an issue",
    "This is a web application that helps you report any issue",
    "Give a trial by clicking on the button"
];

const loadIntroTexts = () => {
  introductions.forEach((intro, index, introArr) => {
    let appIntro = document.querySelector('.app-intro');
    appIntro.style.direction = "ltr";
    appIntro.style.fontSize = "large";
    appIntro.style.fontStyle = "oblique";
    appIntro.style.fontFamily = "sans-serif";
    appIntro.style.marginRight = "30px";
    appIntro.style.textAlign = "left";
    appIntro.innerHTML = introArr[index++ % introArr.length];
    setInterval(() => {
      appIntro.innerHTML = introArr[index++ % introArr.length];
    }, 3000);
  });
}
window.onload = loadIntroTexts();

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

  