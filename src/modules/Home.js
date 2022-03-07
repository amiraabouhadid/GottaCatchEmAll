const populateHome = async () => {
  const container = document.getElementById("container");
  const requestURL = "https://pokeapi.co/api/v2/pokemon?limit=48";
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) =>
      json.results.map(async (poke, i) => {
        const card = document.createElement("div");
        card.classList = "card my-5";
        const cardImg = document.createElement("img");
        cardImg.classList = "card-img-top";
        cardImg.width = "2px";
        await fetch("${poke.url}")
          .then((response) => response.json())
          .then((json) => {
            cardImg.src = "${json.sprites.back_default}";
            cardImg.alt = "${poke.name}";
          });
        const cardText = document.createElement("div");
        cardText.classList = "card-body text-center";
        const cardTitle = document.createElement("h5");
        const header = document.createElement("div");
        header.classList = " card-title row ";
        cardTitle.innerHTML = "${poke.name.toUpperCase()}";
        cardTitle.classList = "col-10";
        const commentsLink = document.createElement("a");
        commentsLink.classList = "btn btn-primary my-3";
        commentsLink.innerHTML = "Comments";

        const likeButton = document.createElement("p");
        likeButton.innerHTML = `<i class='fa fa-heart' aria-hidden='true'></i>`;
        likeButton.classList = "col-2";

        const likesCount = document.createElement("div");
        const likesNum = document.createElement("p");
        likesNum.innerHTML = "5 likes";

        likesNum.classList = "likes-count";
        likesCount.classList = "py-2 my-3";
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
export default { populateHome };
