import Search from './Search';
import List from './List';
import LoadMoreButton from './LoadMoreButton';
import MovieWrapper from './MovieWrapper';

import viewMode from '../../utils/constants/movieViewModes';

const AllMovies = () => {
  return (
    <MovieWrapper>
      <Search/>
      <List mode={ viewMode.default }/>
      <LoadMoreButton/>
    </MovieWrapper>
  );
};

export default AllMovies;