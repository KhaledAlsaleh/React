import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className='routePage'>
      <h2>Page Not Found</h2>
      <Link className='backHome' to='/'>
        Back Home
      </Link>
    </section>
  );
};

export default PageNotFound;
