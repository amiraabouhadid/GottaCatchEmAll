const populatAbilities = async () => {
  const abilitiesContainer = document.getElementById('container');
  abilitiesContainer.innerHTML = '';
  const requestURL = 'https://pokeapi.co/api/v2/ability';
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => json.results.map((ability) => {
      const abilityCard = document.createElement('div');
      abilityCard.classList = 'card m-5 p-5';

      const abilityCardBody = document.createElement('div');
      abilityCardBody.classList = 'card-body text-center';
      const abilityTitle = document.createElement('h4');
      abilityTitle.innerHTML = `${ability.name.toUpperCase()}`;
      abilityTitle.classList = 'card-title';
      abilityCard.style = 'width: 18rem;';

      abilityCardBody.appendChild(abilityTitle);
      abilityCard.appendChild(abilityCardBody);
      abilitiesContainer.appendChild(abilityCard);
    }));
};
export default (populatAbilities);
