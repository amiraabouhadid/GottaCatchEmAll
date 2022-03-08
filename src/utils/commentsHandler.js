import commentsCounter from './commentsCounter';

const appId = "OJhoS4niRmFdRpqldNlB";
const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const addComment = async (comment) => {
  await fetch(commentsURL, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const getComments = async (i) => {
  const commentsContainer = document.getElementById(`comments${i}`);
  commentsContainer.innerHTML = "";
  let myPromise = new Promise((resolve, reject) => {
      fetch(`${commentsURL}?item_id=item${i}`)
        .then((response) => {
          console.log(response);
          if (response.ok){
            resolve(response.json());
          }
        })
        .catch( () => {console.log(err)})
    });
    myPromise.then(
      function(value) { 
        value.forEach((comment) => {
        const commentText = document.createElement("p");
        commentText.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        commentsContainer.appendChild(commentText);
        }); 
        commentsCounter(i);
      }
    );

};

export { addComment, getComments };
