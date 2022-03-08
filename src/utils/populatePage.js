import createCard from './createCard';
import Item from '../modules/Item';

const populatePage = async (requestURL) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  const appId = 'FK4BafgXZ3oaEOpMgby6';
  const likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  let likesArr;
  let itemsCount;
  const homeLink = document.getElementById('home');
  const typesLink = document.getElementById('types');
  const abilitiesLink = document.getElementById('abilities');
  await fetch(likesURL)
    .then((response) => response.json())
    .then((json) => {
      likesArr = json;
    });
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => {
      itemsCount = json.results.length;
      if(requestURL.includes('pokemon')){
        homeLink.innerHTML = `Pokemons (${itemsCount})`;
        homeLink.style.textDecoration ='underline';
        abilitiesLink.style.textDecoration ='none';
        typesLink.style.textDecoration ='none';
        typesLink.innerHTML = `Types`;
        abilitiesLink.innerHTML = `Abilities`;
      }else if (requestURL.includes('type')){
        homeLink.innerHTML = `Pokemons`;
        typesLink.innerHTML = `Types (${itemsCount})`;
        typesLink.style.textDecoration ='underline';
        homeLink.style.textDecoration ='none';
        abilitiesLink.style.textDecoration ='none';
        abilitiesLink.innerHTML = `Abilities`;
      }else{
        homeLink.innerHTML = `Pokemons`;
        typesLink.innerHTML = `Types`;
        abilitiesLink.innerHTML = `Abilities (${itemsCount})`;
        abilitiesLink.style.textDecoration ='underline';
        typesLink.style.textDecoration ='none';
        homeLink.style.textDecoration ='none';

      }
      console.log(itemsCount);
      json.results.forEach((entity, i) => {
        const item = new Item(entity.name, entity.url, `${entity.name + i}`, 0);
        const itemsLikes = likesArr.filter(
          (el) => el.item_id === `${entity.name + i}`,
        );
        if (itemsLikes.length > 0) {
          item.likes = itemsLikes[0].likes;
        }
  
        createCard(item, container, i, requestURL);
        
      })
    });
};
export default populatePage;
