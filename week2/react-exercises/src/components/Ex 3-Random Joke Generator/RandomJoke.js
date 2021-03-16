import {useState,useEffect} from 'react';
import Joke from './Joke';
import Button from './Button';

const RandomJoke = () => {
    const [joke, setJoke] = useState({});
    const [hasError, setHasError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await fetch('https://official-joke-api.appspot.com/random_joke');
                const data = await response.json();
                setJoke(data);
                setLoading(false);
                }
            catch(error){
                setHasError(true);
                setLoading(false);
            }
        }
        fetchData();
    }, [fetching]);

    return (
        <div className='exerciseBlock'>
            <h2>Exercise 3</h2>
            <Button onClickHandler={() => setFetching(!fetching)}/>
            {!hasError && isLoading && <p id='loading'>Loading....</p>}
            {!hasError && <Joke props={joke}/>}
            {hasError && <p id='error'>Something Went Wrong!</p>}
        </div>
    );
};

export default RandomJoke;
