import { connect } from "react-redux";
import { FetchPosts } from "../actions/FetchPosts";
import { Component } from "react";
class Posts extends Component {
  componentWillMount() {
    this.props.FetchPosts();
  }
  render() {
    const PostItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>This is Posts component.</h1>
        {PostItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.post.posts,
});
export default connect(mapStateToProps, { FetchPosts })(Posts);
