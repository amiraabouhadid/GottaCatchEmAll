const populateType = async () => {
  const typesContainer = document.getElementById('container');
  typesContainer.innerHTML = '';
  const requestURL = 'https://pokeapi.co/api/v2/type';
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => json.results.forEach((type) => {
      const typeCard = document.createElement('div');
      typeCard.classList = 'card m-5 p-5';

      const typeCardBody = document.createElement('div');
      typeCardBody.classList = 'card-body text-center';
      const typeTitle = document.createElement('h4');
      typeTitle.innerHTML = `${type.name.toUpperCase()}`;
      typeTitle.classList = 'card-title';
      typeCard.style = 'width: 18rem;';

      typeCardBody.appendChild(typeTitle);
      typeCard.appendChild(typeCardBody);
      typesContainer.appendChild(typeCard);
    }));
};
export default (populateType);
