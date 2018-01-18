import { combineReducers } from 'redux';
import DataReducer from './DataReducer';
import SelectionReducer from './SelectionReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  data: DataReducer,
  selectedLibraryId: SelectionReducer,
  user: UserReducer
});
