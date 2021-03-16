

const Joke = ({props}) => {
    
    return (
        <div id='jokeInfo'>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    );
};

export default Joke;

// // We can create a components called (JokeDetails) and use it instead of p (like what we did in week1 homework)


