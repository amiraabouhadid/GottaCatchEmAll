import populatePage from '../utils/populatePage';

const Nav = (baseURL, homeURL,typeURL, abilityURL) => {


  populatePage(homeURL);
  const homeLogo = document.getElementById('home-logo');
  homeLogo.onclick = (e) => {
    e.preventDefault();
    populatePage(homeURL);
  };
  const homeLink = document.getElementById('home');
  homeLink.onclick = (e) => {
    e.preventDefault();
    populatePage(homeURL);
  };
  const typeLink = document.getElementById('types');
  typeLink.onclick = (e) => {
    e.preventDefault();
    populatePage(typeURL);
  };
  const abilityLink = document.getElementById('abilities');
  abilityLink.onclick = (e) => {
    e.preventDefault();
    populatePage(abilityURL);
  };
};

export default Nav;
