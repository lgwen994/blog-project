import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable';
// import Detail from './pages/detail';
import Write from './pages/write';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/*
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
           <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

          <BrowserRouter>
            <Header />
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>

        </header>
      </div>
    </Provider>
  );
}

export default App;
