import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

class PostList extends PureComponent {
  render() {

    const { postList } = this.props;

    return (
      <ul id="postsList" className="row posts-list justify-content-center">
        {
          postList.map((item, idx) => {
            return <Post key={item.id} />
          })
        }
      </ul>
    );
  }
}

PostList.propTypes = {

};

export default PostList;