// import React from 'react'; // I don't have to import React since we use a functional component

import HobbyList from './components/HobbyList';
import GuaranteeList from './components/GuaranteeList';
import Counter from './components/Counter';

function App() {
  return (
    <div className='container'>
      <HobbyList />
      <GuaranteeList />
      <Counter />
    </div>
  );
}

export default App;
