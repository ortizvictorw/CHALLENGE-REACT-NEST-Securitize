import logo from './IEPE.svg';
import './App.css';
import { Login } from './components/login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Registration } from './components/register/register';
import CarouselBasic from './components/carousel/carousel';
import Home from './views/home';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header App">
        <div className='my-3'>
        <CarouselBasic />
        </div>
        <h1>IEPE<img src={logo} className="App-logo m-3" alt="logo" /></h1>
        <Switch>
          <Route path="/register" exact component={Registration} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Login} />
        </Switch>
      </header>
    </BrowserRouter>
  );
}

export default App;
