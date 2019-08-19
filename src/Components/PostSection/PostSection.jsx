import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PostList from '../PostList/PostList';
import "./PostSection.css";
import postApi from '../../api/postApi';

class PostSection extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      postList: []
    }
  }

  async componentDidMount() {
    try {
      const posts = await postApi.getAll();
      this.setState({
        postList: posts
      })
    } catch (e) {
      console.log(e);
    }
  }


  render() {

    const { postList } = this.state;

    return (
      <section className="posts-section">
        <div className="container">
          <h1 className="with-underline text-center">Latest posts</h1>

          <PostList postList={postList} />

          <nav className="posts-nav" aria-label="Posts navigation">
            <ul id="postsPagination" className="pagination justify-content-center">
              <li className="page-item">
                <a id="paginationDown" className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a id="paginationUp" className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

PostSection.propTypes = {

};

export default PostSection;