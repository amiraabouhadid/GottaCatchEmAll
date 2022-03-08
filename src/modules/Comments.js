const appId = "OJhoS4niRmFdRpqldNlB";
const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

export const addComment = async (comment) => {
  await fetch(commentsURL, {
    method: 'POST',
    body: JSON.stringify(comment), 
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }, 
  })
};

const comments = (pokemon, commentLink, i) => {
  const container = document.getElementById('container');
  const commentPopup = document.createElement('div');
  commentPopup.className = 'modal fade';
  commentPopup.setAttribute('id', `modal${i}`);
  commentLink.setAttribute('data-bs-toggle', 'modal');
  commentLink.setAttribute('data-bs-target', `#modal${i}`);
  const types = [];
  pokemon.types.forEach((type) => {
    types.push(type.type.name);
  });
  const abilities = [];
  pokemon.abilities.forEach((ability) => {
    abilities.push(ability.ability.name);
  });
  commentPopup.innerHTML = `<div class="modal-dialog modal-xl">
                              <div class="modal-content">
                                <div class="modal-header border-0">
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center">
                                  <div class="">
                                    <img src="${pokemon.sprites.other['official-artwork'].front_default}" width="200rem" alt="${pokemon.forms[0].name}" />
                                    <h3 class="modal-title mb-2" id="exampleModalLabel">${pokemon.forms[0].name.toUpperCase()}</h3>   
                                  </div>
                                  <div class="d-flex justify-content-center">
                                    <div class="row">
                                      <div class="col-6 col-md-8 align-left characteristics">
                                        <p><b>Weight:</b> ${pokemon.weight}kg</p>
                                      </div>
                                      <div class="col-6 col-md-4 align-left characteristics">
                                        <p><b>Height:</b> ${pokemon.height}m</p>
                                      </div>
                                      <div class="col-6 col-md-8 align-left characteristics">
                                        <p><b>Types:</b> ${types.join(', ')}</p>
                                      </div>
                                      <div class="col-6 col-md-4 align-left characteristics">
                                        <p><b>Abilities:</b> ${abilities.join(', ')}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="my-4">
                                    <h4>
                                        Comments (2)
                                    </h4>
                                  </div>
                                  <div class="my-4 w-70">
                                    <h4>
                                      Add a comment
                                    </h4>
                                    <form class="comments-form">
                                      <div class="mb-3">
                                        <input type="text" id="name${i}" placeholder="Your name">
                                      </div>
                                      <div class="mb-3">
                                        <textarea id="insight${i}" placeholder="Your insight"></textarea>
                                      </div>
                                      <div class="d-flex flex-column">
                                        <small id="status${i}" class="py-2"></small>
                                        <div d-grid gap-2 d-md-block>
                                          <button class="btn btn-outline-primary m-1" type="button" id="button${i}" ml-2>Comment</button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>`;
  container.appendChild(commentPopup);
  const button = document.getElementById(`button${i}`);
  button.addEventListener('click', () => {
    const name = document.getElementById(`name${i}`);
    const insight = document.getElementById(`insight${i}`);
    const status = document.getElementById(`status${i}`)
    if (name.value === '' || insight.value === '') {
      status.innerHTML = 'Please fill both fields before submitting.';
      status.classList.add('red');
          setTimeout(() => { 
            status.innerHTML = '';
            status.classList.remove('red');
          }, 2400);
    } else {
      const comment = {
        "item_id": "item"+i,
        "username": name.value,
        "comment": insight.value
      }
      addComment(comment,status).then(
        () => {
          status.innerHTML = 'Your comment was successfully submitted.';
          status.classList.add('green');
          setTimeout(() => { 
            status.innerHTML = '';
            status.classList.remove('green');
          }, 2400);
          name.value = '';
          insight.value = '';
        },
        () => {
          const error = 'An error occurred while adding your comment, please try again shortly.';
          status.innerHTML = error;
          status.classList.add('red');
          setTimeout(() => { 
            status.innerHTML = '';
            status.classList.remove('red');
          }, 2400);
        },
      );
    }
  });
};

export default (comments);