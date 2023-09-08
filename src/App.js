import './App.css';
import React from 'react';
import First from './components/first';
import Counter from './components/Counter';
import List from './components/List';

function App() {
  return (
    <>
     <First name="Alok"/>
     <Counter value="0"/>
     <List />
     
    </>
  );
}

export default App;
