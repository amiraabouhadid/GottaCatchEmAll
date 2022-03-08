export const getLikes = async () => {
  const appId = 'PfRyX3juJZOX1bJq7Kel';
  const likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  await fetch(likesURL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
};
