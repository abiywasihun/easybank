import React from 'react';
import Header from './component/Header';
import './assets/css/style.css'
import Home from './component/Home';
import About from './component/About';
import Articles from './component/Articles';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
