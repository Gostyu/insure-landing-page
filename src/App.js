import React from 'react';
//import logo from './logo.svg';
import './stylesheets/App.scss';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Content from './components/Content.js';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
