import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import store from './stores/store';
import { Provider } from 'react-redux';

import Tabs from './components/tabs';
import TabPane from './components/tab-pane';

import About from './components/tab-contents/about';
import Projects from './components/tab-contents/projects';
import Thoughts from './components/tab-contents/thoughts';

const App = () => (
  <Provider store={store}>
    <div>
      <Header/>
      <Tabs>
        <TabPane label='About Me'><About/></TabPane>
        <TabPane label='Projects'><Projects/></TabPane>
        <TabPane label='Thoughts'><Thoughts/></TabPane>
      </Tabs>
      <Footer/>
    </div>
  </Provider>
);

export default App;
