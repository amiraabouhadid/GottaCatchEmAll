import comments from '../modules/Comments';

const createCardImg = async (item, cardImg, commentsLink, i) => {
  if (item.url.includes('type') || item.url.includes('ability')) {
    cardImg.src = 'https://i.ibb.co/VV17hyx/download.png';
    cardImg.alt = `${item.name}`;
  } else {
    await fetch(`${item.url}`)
      .then((response) => response.json())
      .then((json) => {
        if (item.url.includes('pokemon')) {
          comments(json, commentsLink, i);
        }

        cardImg.src = `${json.sprites.other.dream_world.front_default}`;
        cardImg.alt = `${item.name}`;
      });
  }
};
export default (createCardImg);