/* eslint-disable linebreak-style */
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
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 9.0820, lng: 8.6753 },
    zoom: 8,
  });
}
initMap();
