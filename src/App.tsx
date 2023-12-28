import { useEffect, useState } from 'react';
import logo from './IEPE.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CarouselBasic from './components/carousel/carousel';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { LocalStorageService } from './services/storage';
import { Login } from './components/login/login';
import { Calendar } from './components/calendar/calendar';
import { Registration } from './components/register/register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storageUpdated, setStorageUpdated] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!LocalStorageService.getData('USER-DATA'));
  }, [storageUpdated]);

  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <header className="App-header App">
        <div className='my-3'>
          <CarouselBasic />
        </div>
        <h1>IEPE<img src={logo} className="App-logo m-3" alt="logo" /></h1>
        <Switch>

          <Route path="/register" exact render={(props) => (
            <Registration {...props} setStorageUpdated={setStorageUpdated} />
          )} />

          {isLoggedIn && <Route path="/home" exact component={Calendar} />}

          {!isLoggedIn && (
            <Route
              path="/"
              exact
              render={(props) => (
                <Login {...props} setStorageUpdated={setStorageUpdated} />
              )}
            />
          )}

          {isLoggedIn && <Redirect to="/home" />}
          
          <Redirect to="/" />
        </Switch>
      </header>
    </BrowserRouter>
  );
}

export default App;
