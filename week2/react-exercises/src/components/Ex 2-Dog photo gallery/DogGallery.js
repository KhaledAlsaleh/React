import {useState} from 'react';
import DogPhoto from './DogPhoto';
import Button from './Button';

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const getDogPhoto = async () => {
        try{
            setLoading(true);
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDogPhotos([...dogPhotos,data.message]);                
            setLoading(false);
            
        } catch(error){
            setHasError(true);
            setLoading(false);
        };
    };
    // console.log(dogPhotos);
    // dogPhotos.forEach(dogPhoto =>console.log(dogPhoto));
    return (
        <div className='exerciseBlock'>
            <h2>Exercise 2</h2>
            <Button onClickHandler={getDogPhoto}/>
            <div>
                {!hasError && isLoading && <p id='loading'>Loading....</p>}
                <div id='dogBox'>
                    {!hasError && dogPhotos.length > 0 ? dogPhotos.map((dogPhoto,index) => <DogPhoto key={index} dogUrl={dogPhoto}/>) : <p className='initialDog'>Get your first dog by clicking the button!</p>}
                </div>
                {hasError && <p id='error'>Something Went Wrong!</p>}
            </div>
        </div>
    );
};

export default DogGallery;
