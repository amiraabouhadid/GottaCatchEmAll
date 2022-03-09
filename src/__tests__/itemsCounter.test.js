/**
 * @jest-environment jsdom
 */
import itemsCounter from '../utils/itemsCounter.js';

describe('Tests of the itemsCounter:', () => {
  const baseURL = 'https://pokeapi.co/api/v2/';
  beforeEach(() => {
    document.body.innerHTML = `<div>
                                <a id="home"></a>
                                <a id='abilities'></a>
                                <a id='types'> </a>
                              </div>`;
  });

  it('Add one item to home page then count:', () => {
    const homeURL = `${baseURL}pokemon?offset=20&limit=1`;
    itemsCounter(1, homeURL);
    const homeLink = document.getElementById('home');
    expect(homeLink.innerHTML).toBe('Pokemons (1)');
  });
  it('Add two items to types page then count:', () => {
    const typeURL = `${baseURL}type`;
    itemsCounter(2, typeURL);
    const typesLink = document.getElementById('types');
    expect(typesLink.innerHTML).toBe('Types (2)');
  });
  it('Add zero items to abilities page then count:', () => {
    const abilityURL = `${baseURL}ability`;
    itemsCounter(0, abilityURL);
    const abilitiesLink = document.getElementById('abilities');
    expect(abilitiesLink.innerHTML).toBe('Abilities (0)');
  });
});