import { Provider } from 'react-redux';
import './App.css';
import InputField from './components/InputField';
import TodosList from './components/TodosList';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ textDecoration: 'underline' }}>Todos Application</h1>
        <InputField />
        <TodosList />
      </div>
    </Provider>
  );
}

export default App;
