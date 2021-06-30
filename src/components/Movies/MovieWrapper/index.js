import './index.css';

const MovieWrapper = ({ children }) => {
  return (
    <main className='movies'>
      {children}
    </main>
  );
}

export default MovieWrapper;