export const addLike = async (L) => {
  const appId = "RN2gEdvHit0u88PW0Y0i";
  const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RN2gEdvHit0u88PW0Y0i/likes';
  await fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({'item_id': 'item2'}),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;  charset=UTF-8'
      }
   
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
