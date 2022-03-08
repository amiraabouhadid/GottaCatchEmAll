import createCard from './createCard';
import Item from '../modules/Item';

const populatePage = async (requestURL) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  const appId = 'FK4BafgXZ3oaEOpMgby6';
  const likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  let likesArr;
  await fetch(likesURL)
    .then((response) => response.json())
    .then((json) => {
      likesArr = json;
    });
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => json.results.forEach((entity, i) => {
      const item = new Item(entity.name, entity.url, `${entity.name + i}`, 0);

      const itemsLikes = likesArr.filter(
        (el) => el.item_id === `${entity.name + i}`,
      );
      if (itemsLikes.length > 0) {
        item.likes = itemsLikes[0].likes;
      }

      createCard(item, container);
    }));
};
export default populatePage;
