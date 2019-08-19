import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Post extends PureComponent {
  render() {
    return (
      <li className="col-12 col-md-6 col-lg-4">
        <div id="postItem" className="post-item mb-4">
          <div className="card">
            <img id="postItemImage" src="images/recipe.jpg" className="card-img-top" />

            <div className="card-body">
              <h5 id="postItemTitle" className="card-title">Card title</h5>

              <p id="postItemDescription" className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </p>

              <p className="card-text">
                <small className="text-muted">by </small>
                <small id="postItemAuthor" className="text-muted font-weight-bold">Hau Nguyen</small>
                <small id="postItemTimeSpan" className="text-muted">- 3 mins ago</small>
              </p>
            </div>
          </div>

          <div className="post-item-menu">
            <div id="postItemEdit" className="menu-item rounded-circle"><i className="fas fa-pen"></i></div>
            <div id="postItemRemove" className="menu-item rounded-circle"><i className="fas fa-trash"></i></div>
          </div>
        </div>
      </li>
    );
  }
}

Post.propTypes = {

};

export default Post;