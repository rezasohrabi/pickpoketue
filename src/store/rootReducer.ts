import { combineReducers } from '@reduxjs/toolkit';
import questionReducer from './question/questionReducer';

export default combineReducers({
  questionReducer,
});
