import populateHome from './Home';
import populateType from './Type';
import populateAbilities from './Ability';

const Nav = () => {
  populateHome();
  const homeLogo = document.getElementById('home-logo');
  homeLogo.onclick = (e) => {
    e.preventDefault();
    populateHome();
  };
  const homeLink = document.getElementById('home');
  homeLink.onclick = (e) => {
    e.preventDefault();

    populateHome();
  };
  const typeLink = document.getElementById('types');
  typeLink.onclick = (e) => {
    e.preventDefault();
    populateType();
  };
  const abilityLink = document.getElementById('abilities');
  abilityLink.onclick = (e) => {
    e.preventDefault();

    populateAbilities();
  };
};

export default (Nav);
