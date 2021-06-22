import Search from './Search';
import List from './List';
import LoadMoreButton from './LoadMoreButton';
import MovieWrapper from './MovieWrapper';

import viewMode from '../../utils/constants/movieViewModes';

const SavedMovies = () => {
  return (
    <MovieWrapper>
      <Search/>
      <List mode={ viewMode.savedMovie }/>
      <LoadMoreButton/>
    </MovieWrapper>
  );
}

export default SavedMovies;