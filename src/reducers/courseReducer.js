import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    // just returning our new courses array since it will
    // replace everything that was in courses state before

    default:
      return state;
  }
}
