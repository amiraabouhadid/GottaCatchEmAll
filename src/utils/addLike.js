import app from '../modules/App';

const likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${app.id}/likes`;

const addLike = async (item, likesNum) => {
  await fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${item.id}` }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      item.likes += 1;
      likesNum.innerHTML = `${item.likes} likes`;
    });
};
export default (addLike);
