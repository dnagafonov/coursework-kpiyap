import React from 'react';
import './App.scss';
import Header from '../header/header';
import ListGood from '../list-good/list-good';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        {[{ name: "Notebook", price: 1000 }, { name: "Laptop", price: 2000 }].map(el => <ListGood name={el.name} price={el.price} />)}
      </main>
    </div>
  );
}

export default App;
