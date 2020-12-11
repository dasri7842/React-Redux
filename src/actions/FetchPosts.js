export const FetchPosts = () => (dispatch) => {
  const Search = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsdata = await res.json();
    dispatch({
      type: "FETCH_POSTS",
      payload: postsdata,
    });
  };
  Search();
};
