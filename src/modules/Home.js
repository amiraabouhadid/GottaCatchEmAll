import { addLike, getLikes } from "./Likes";

const populateHome = async () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const requestURL = "https://pokeapi.co/api/v2/pokemon?limit=48";
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) =>
      json.results.map(async (poke, i) => {
        const card = document.createElement("div");
        card.id = i;
        card.classList = "card m-4";
        const cardImg = document.createElement("img");
        cardImg.classList = "card-img-top p-4";
        cardImg.height = "150";
        await fetch(`${poke.url}`)
          .then((response) => response.json())
          .then((json) => {
            cardImg.src = `${json.sprites.other.dream_world.front_default}`;
            cardImg.alt = `${poke.name}`;
          });
        const cardText = document.createElement("div");
        cardText.classList = "card-body text-center";
        const cardTitle = document.createElement("h5");
        const header = document.createElement("div");
        header.classList = " card-title row ";
        cardTitle.innerHTML = `${poke.name.toUpperCase()}`;
        cardTitle.classList = "col-10";
        const commentsLink = document.createElement("a");
        commentsLink.classList = "btn btn-primary my-1";
        commentsLink.innerHTML = "Comments";

        const likeButton = document.createElement("a");
        likeButton.innerHTML = "<i class='far fa-heart'></i>";
        likeButton.classList = "col-2 text-dark";
        likeButton.onclick = (e) => {
          e.preventDefault();
          addLike(i);
        };

        const likesCount = document.createElement("div");
        const likesNum = document.createElement("p");
        getLikes(likesNum,i);

        likesNum.classList = "likes-count";
        likesCount.classList = " my-1";
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
      })
    );
};
export default populateHome;
