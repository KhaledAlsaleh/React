import { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

const Friend = () => {
  const [friend, setFriend] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getFriend = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      setFriend(data.results[0]);
      setLoading(false);
    } catch (error) {
      setHasError(true);
      setLoading(false);
    }
  };

  return (
    <div className='exerciseBlock'>
      <h2>Exercise 1</h2>
      <Button onClickHandler={getFriend} />
      {!hasError && isLoading && <p id='loading'>Loading....</p>}
      {!hasError && friend && <FriendProfile props={friend} />}
      {hasError && <p id='error'>Something Went Wrong!</p>}
    </div>
  );
};

export default Friend;
