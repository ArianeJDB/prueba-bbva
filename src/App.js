import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login/Login'
import Counter from './components/counter/Counter'


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact render={() =>
        <Login />
      } />
      <Route path="/counter" exact render={() =>
        <Counter />
      } />
    </BrowserRouter>
  );
}

export default App;
