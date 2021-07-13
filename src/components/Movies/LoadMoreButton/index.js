import './index.css';

const LoadMoreButton = ({ handleClick }) => {
  return (
    <button className='movies__more-btn'
      onClick={() => handleClick()}>
      Еще
    </button>
  );
};

export default LoadMoreButton;