/**
 * @jest-environment jsdom
 */

import commentsCounter from '../utils/commentsCounter.js';

describe('Tests of the commentsCounter:', () => {
  it('Add one comment then count:', () => {
    document.body.innerHTML = `<div>
                                <h4 id="comments-title-2"></h4>
                                <div id="comments2"><p>2022-03-08 Jane: Hello</p></div>
                              </div>`;
    commentsCounter(2);
    const commentTitle = document.getElementById('comments-title-2');
    expect(commentTitle.innerHTML).toBe('Comments (1)');
  });

  it('Add two comments then count:', () => {
    document.body.innerHTML = `<div>
                                <h4 id="comments-title-2"></h4>
                                <div id="comments2"><p>2022-03-08 Jane: Hello</p><p>2022-03-08 Jane: Hello</p></div>
                              </div>`;
    commentsCounter(2);
    const commentTitle = document.getElementById('comments-title-2');
    expect(commentTitle.innerHTML).toBe('Comments (2)');
  });

  it('Add three comment then count:', () => {
    document.body.innerHTML = `<div>
                                <h4 id="comments-title-2"></h4>
                                <div id="comments2"><p>2022-03-08 Jane: Hello</p><p>2022-03-08 Jane: Hello</p><p>2022-03-08 Jane: Hello</p></div>
                              </div>`;
    commentsCounter(2);
    const commentTitle = document.getElementById('comments-title-2');
    expect(commentTitle.innerHTML).toBe('Comments (3)');
  });
});
