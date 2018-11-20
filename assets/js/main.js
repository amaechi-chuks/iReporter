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
    }, 8000);
  });
}
window.onload = loadIntroTexts();

