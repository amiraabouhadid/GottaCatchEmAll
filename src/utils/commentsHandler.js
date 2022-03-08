const appId = 'OJhoS4niRmFdRpqldNlB';
const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const addComment = async (comment) => {
  await fetch(commentsURL, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getComments = async (i) => {
  const commentsContainer = document.getElementById(`comments${i}`);
  commentsContainer.innerHTML = '';
  await fetch(`${commentsURL}?item_id=item${i}`)
    .then((response) => response.json())
    .then((comments) => {
      comments.forEach((comment) => {
        const commentText = document.createElement('p');
        commentText.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        commentsContainer.appendChild(commentText);
      });
    });
};

export {addComment, getComments}