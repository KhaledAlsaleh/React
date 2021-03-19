const DogPhoto = ({ dogUrl }) => {
  return (
    <div>
      <img className='dogImage' src={dogUrl} alt='dogPicture' />
    </div>
  );
};

export default DogPhoto;
