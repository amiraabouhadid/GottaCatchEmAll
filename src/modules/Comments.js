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
                                  <div id="comments" class="my-4">
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
                                        <input type="text" id="name" placeholder="Your name">
                                      </div>
                                      <div class="mb-3">
                                        <textarea id="insight" placeholder="Your insight"></textarea>
                                      </div>
                                      <button class="btn btn-primary" type="submit">Comment</button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>`;
  container.appendChild(commentPopup);
};

export default (comments);