const appId = 'FK4BafgXZ3oaEOpMgby6';
const likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

const addLike = async (item) => {
  await fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${item.id}` }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text());
    window.location.reload()
};
export default (addLike);
