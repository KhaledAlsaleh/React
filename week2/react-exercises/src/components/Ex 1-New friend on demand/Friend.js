import {useState} from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';



const Friend = () => {
    const [friend, setFriend] = useState();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    // const [count, setCount] = useState(0)
    
    const getFriend = async () => {
        try{
            setLoading(true);
            const response = await fetch('https://www.randomuser.me/api?results=1');
            const data = await response.json();
            // if(Object.keys(data).length > 0) {
                setFriend(data.results[0]);
                setLoading(false);
            // }
        } catch(error){
            setHasError(true);
            setLoading(false);
        };
    };

    // useEffect(() => {
    //     getFriend();
    // }, [count]);


    return (
        <div className='exerciseBlock'>
            <h2>Exercise 1</h2>
            <Button onClickHandler={getFriend}/>
            {!hasError && isLoading && <p id='loading'>Loading....</p>}
            {!hasError && friend && <FriendProfile props={friend}/>}
            {hasError && <p id='error'>Something Went Wrong!</p>}
        </div>
    );
};

export default Friend;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import { useState, useEffect } from "react";


// const useFetch = url => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Similar to componentDidMount and componentDidUpdate:
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     const [item] = data.results;
//     setData(item);
//     setLoading(false);
//   }, []);

//   return { data, loading };
// };

// const Friend = () => {
//   const [count, setCount] = useState(0);
//   const { data, loading } = useFetch("https://api.randomuser.me/");

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
//     </div>
//   );
// };

// export default Friend;

