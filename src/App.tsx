import React, { FunctionComponent, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import CarouselBasic from './components/carousel/carousel';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Login } from './components/login/login';
import { Registration } from './components/register/register';
import Home from './views/home/home';
import './App.css';
import { UserProvider } from './provider/userProvider';

const App: FunctionComponent = () => {

  return (
    <UserProvider>
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
          <div className="my-3 ">
            <CarouselBasic />
          </div>
          <Switch>
            <Route path="/register" exact component={Registration} />
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Redirect path="/" to={'/login'}/>
          </Switch>
        </header>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
