import { createCardImg } from "./createCardImg";
import { addLike } from "./addLike";
import { getLikes } from "./getLikes";
export const createCard = async (item, container) => {
  /// create card
  const card = document.createElement("div");
  card.id = item.id;
  card.classList = "card m-4";
  // create card img
  const cardImg = document.createElement("img");
  cardImg.classList = "card-img-top p-4";
  cardImg.height = "150";

  createCardImg(item, cardImg);

  /// create card text
  const cardText = document.createElement("div");
  cardText.classList = "card-body text-center";
  /// create card title
  const cardTitle = document.createElement("h5");
  const header = document.createElement("div");
  header.classList = " card-title row ";
  cardTitle.innerHTML = `${item.name.toUpperCase()}`;
  cardTitle.classList = "col-10";
  /// create comments
  const commentsLink = document.createElement("a");
  commentsLink.classList = "btn btn-primary my-1";
  commentsLink.innerHTML = "Comments";
  /// create like Button
  const likeButton = document.createElement("a");
  likeButton.innerHTML = "<i class='far fa-heart'></i>";
  likeButton.classList = "col-2 text-dark";
  likeButton.onclick = (e) => {
    e.preventDefault();
    addLike(item);
  };
  /// create likes Count
  const likesCount = document.createElement("div");
  const likesNum = document.createElement("p");
  likesNum.classList = "likes-count";
  likesCount.classList = " my-1";
  likesNum.innerHTML = `${item.likes} likes`;
  ///append children
  likesCount.appendChild(likesNum);
  header.appendChild(cardTitle);
  header.appendChild(likeButton);

  cardText.appendChild(header);
  cardText.appendChild(likesCount);

  cardText.appendChild(commentsLink);
  card.appendChild(cardImg);
  card.appendChild(cardText);
  card.style = "width: 18rem;";
  container.appendChild(card);
};
