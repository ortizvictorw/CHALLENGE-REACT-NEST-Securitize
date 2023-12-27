import logo from './IEPE.svg';
import './App.css';
import { Login } from './components/login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Registration } from './components/register/register';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header App">
        <img src={logo} className="App-logo my-4" alt="logo" />
        <Switch>
          <Route path="/register" exact component={Registration} />
          <Route path="/" exact component={Login} />
        </Switch>
      </header>
    </BrowserRouter>
  );
}

export default App;
