import { createCard } from "../utils/createCard";
const populatePage = async (requestURL, cName) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) =>
      json.results.forEach((entity, i) => {
        createCard(entity, i, container);
      })
    );
};
export default populatePage;
