// import React from 'react';
import Hobbies from './Hobbies';

const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

const HobbyList = () => {
  return (
    <div className='exerciseBlock'>
      <h2>Exercise 1</h2>
      {hobbies.map((hobby) => (
        <Hobbies key={hobbies.indexOf(hobby)} hobbyName={hobby} />
      ))}
    </div>
  );
};

export default HobbyList;
