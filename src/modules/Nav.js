import populatePage from '../utils/populatePage';

const Nav = () => {
  const baseURL = 'https://pokeapi.co/api/v2/';
  const homeURL = `${baseURL}pokemon?offset=20&limit=20`;
  const typeURL = `${baseURL}type`;
  const abilityURL = `${baseURL}ability`;
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
