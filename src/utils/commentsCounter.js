const commentCounter = (index) => {
  const commentsContainer = document.getElementById(`comments${index}`);
  const commentTitle = document.getElementById(`comments-title-${index}`);
  commentTitle.innerHTML = `Comments (${commentsContainer.childNodes.length})`;
};

export default (commentCounter);