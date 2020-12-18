import { connect } from "react-redux";
import { FetchPosts, Increment } from "../actions/FetchPosts";
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
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.Increment()}>Inc</button>
        {PostItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.post.posts,
  count: state.post.count,
});
export default connect(mapStateToProps, { FetchPosts, Increment })(Posts);
