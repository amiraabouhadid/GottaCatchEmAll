const appId = 'PfRyX3juJZOX1bJq7Kel';
const likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

export const addLike = async (i) => {
  await fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${i}` }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((text) => console.log(text));
};
