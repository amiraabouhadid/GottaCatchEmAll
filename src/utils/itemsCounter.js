const itemsCounter = (itemsCount, requestURL) => {
  const homeLink = document.getElementById('home');
  const typesLink = document.getElementById('types');
  const abilitiesLink = document.getElementById('abilities');
  if (requestURL.includes('pokemon')) {
    homeLink.innerHTML = `Pokemons (${itemsCount})`;
    homeLink.style.textDecoration = 'underline';
    abilitiesLink.style.textDecoration = 'none';
    typesLink.style.textDecoration = 'none';
    typesLink.innerHTML = 'Types';
    abilitiesLink.innerHTML = 'Abilities';
  } else if (requestURL.includes('type')) {
    homeLink.innerHTML = 'Pokemons';
    typesLink.innerHTML = `Types (${itemsCount})`;
    typesLink.style.textDecoration = 'underline';
    homeLink.style.textDecoration = 'none';
    abilitiesLink.style.textDecoration = 'none';
    abilitiesLink.innerHTML = 'Abilities';
  } else {
    homeLink.innerHTML = 'Pokemons';
    typesLink.innerHTML = 'Types';
    abilitiesLink.innerHTML = `Abilities (${itemsCount})`;
    abilitiesLink.style.textDecoration = 'underline';
    typesLink.style.textDecoration = 'none';
    homeLink.style.textDecoration = 'none';
  }
};
export default (itemsCounter);