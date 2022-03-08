import { createCard } from "../utils/createCard";
import Item from "../modules/Item";
import { getLikes } from "../utils/getLikes";
const populatePage = async (requestURL, cName) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const appId = "FK4BafgXZ3oaEOpMgby6";
  const likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  let likesArr;
  await fetch(likesURL)
    .then((response) => response.json())
    .then((json) => {
      likesArr = json;
    });
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) =>
      json.results.forEach((entity, i) => {
        let item = new Item(entity.name, entity.url, `${entity.name + i}`, 0);

        let itemsLikes = likesArr.filter(
          (el) => el.item_id == `${entity.name + i}`
        );
        if (itemsLikes.length > 0) {
          item.likes = itemsLikes[0].likes;
        }

        createCard(item, container);
      })
    );
};
export default populatePage;
