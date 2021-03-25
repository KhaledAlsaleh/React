// We can use the same Button component from Ex1, since only the text change we can pass it as a props
// But I am going to create a new component

const Button = ({ onClickHandler }) => {
  return (
    <button className='btn' onClick={onClickHandler}>
      Get a dog!
    </button>
  );
};

export default Button;
