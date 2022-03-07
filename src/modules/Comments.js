export const comments =  (pokemon,commentLink,i) => {
  const container = document.getElementById("container");
  const commentPopup = document.createElement('div');
  commentPopup.className = 'modal fade';
  commentPopup.setAttribute('id',`modal${i}`)
  commentLink.setAttribute('data-bs-toggle','modal');
  commentLink.setAttribute('data-bs-target',`#modal${i}`);
  const types = [];
  pokemon.types.map(type =>{
    types.push(type.type.name);
  })
  const abilities = [];
  pokemon.abilities.map(ability =>{
    abilities.push(ability.ability.name);
  })
  commentPopup.innerHTML = `<div class="modal-dialog modal-xl">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center p-5">
                                  <div class="">
                                    <img src="${pokemon.sprites.front_shiny}" width="300rem" alt="${pokemon.forms[0].name}" />
                                    <h3 class="modal-title my-4" id="exampleModalLabel">${pokemon.forms[0].name.toUpperCase()}</h3>   
                                  </div>
                                  <div class="text-center mx-auto justify-content-md-center">
                                    <div class="row">
                                      <div class="col-6 types">
                                        <p>Weight: ${pokemon.weight}kg</p>
                                      </div>
                                      <div class="col-6 types">
                                        <p>Height: ${pokemon.height}m</p>
                                      </div>
                                      <div class="col-6 types">
                                        <p>Types: ${types.join(", ")}</p>
                                      </div>
                                      <div class="col-6 types">
                                        <p>Abilities: ${abilities.join(", ")}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div id="comments" class="my-4">
                                    <h4>
                                        Comments (2)
                                    </h4>
                                  </div>
                                  <div class="my-4">
                                    <h4>
                                      Add a comment
                                    </h4>
                                    <form class="text-left">
                                      <div class="mb-3">
                                        <input type="text" id="name" placeholder="Your name">
                                      </div>
                                      <div class="mb-3">
                                        <textarea id="insight" placeholder="Your insight"></textarea>
                                      </div>
                                      <button type="submit">Comment</button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>`;
  container.appendChild(commentPopup);
}