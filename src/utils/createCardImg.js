const createCardImg = async (item, cardImg) => {
  if (item.url.includes('type') || item.url.includes('ability')) {
    cardImg.src = 'https://i.ibb.co/VV17hyx/download.png';
    cardImg.alt = `${item.name}`;
  } else {
    await fetch(`${item.url}`)
      .then((response) => response.json())
      .then((json) => {
        cardImg.src = `${json.sprites.other.dream_world.front_default}`;
        cardImg.alt = `${item.name}`;
      });
  }
};
export default (createCardImg);