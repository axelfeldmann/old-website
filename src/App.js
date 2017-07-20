import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import store from './stores/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <div>
      <Header/>
      <Footer/>
    </div>
  </Provider>
);

export default App;
