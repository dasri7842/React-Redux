import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {increment,decremnt} from './actions/index'
function App() {
  const count = useSelector(state => state.CounterReducer.count)
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <PostForm/>
      <hr/>
      <Posts/> */}
      <h1>Hello! count is {count} </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decremnt(5))}>-</button>
    </div>
  );
}

export default App;
