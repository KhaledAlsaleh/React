import React from 'react';
import HobbyList from './components/HobbyList';
import GuaranteeList from './components/GuaranteeList';
import Counter from './components/Counter';

function App() {
  return (
    <div className="container">
      <HobbyList />
      <GuaranteeList />
      <Counter />
    </div>
  );
}

export default App;
