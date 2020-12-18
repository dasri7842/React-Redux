const initState = {
  posts: [],
  post: {},
  count: 0,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default postReducer;
