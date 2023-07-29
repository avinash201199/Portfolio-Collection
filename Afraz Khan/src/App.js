import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import  JSONView from './components/JSONView';
import React from 'react';

function App() {

  return (
    <div>
      <Header />
      <JSONView />
      <Footer />
    </div>
  );
}

export default App;
