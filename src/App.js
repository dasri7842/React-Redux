import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
