import { NEXT_IMAGE, PREV_IMAGE } from '../actions/actions';
// import {}

/**1. INITIALIZE STATE */
const initialState = {
    currentIndex: 0,
  };
  
  /**2. CREATE REDUCER*/
export  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case NEXT_IMAGE:
        return {
          ...state,
          currentIndex: (state.currentIndex + 1) % 5,
        };
          
      case PREV_IMAGE:
        return {
          ...state,
          currentIndex: (state.currentIndex - 1 + 5) % 5, 
        };
      default:
        return state;
    }
  };



  