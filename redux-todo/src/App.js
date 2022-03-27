import './App.css';
import AddForm from './components/AddForm';
import { useSelector } from 'react-redux'

function App() {
  const state = useSelector(state => state.todo)

  return (
    <>
      <h1>Todo List</h1>
      <AddForm state={state}></AddForm>
      {
        state.map((item, index) => (
          <div key={index}>#{item.id}, {item.todo}</div>

        ))
      }
    </>
  );
}

export default App;
