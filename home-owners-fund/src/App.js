import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import SearchBar from './SearchBar';
import Home from './Home';
import Campaign from './Campaign';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SearchBar />
      <Route path="/" exact component={Home} />
      <Route path="/campaign" component={Campaign} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
