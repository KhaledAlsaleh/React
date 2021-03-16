

const Button = ({onClickHandler}) => {
    return (
        <>
            <button className='btn' onClick={onClickHandler}>Get a joke!</button>
        </>
    );
};

export default Button;