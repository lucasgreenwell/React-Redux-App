import {
  FETCHING_DOG_START,
  FETCHING_DOG_SUCCESS,
  FETCHING_DOG_FAILURE
} from "../actions/actions";

const initialState = {
  isLoading: false,
  dog: null,
  error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCHING_DOG_START:
        return {
            ...state,
            isLoading: true
        }
        case FETCHING_DOG_SUCCESS:
        return {
            ...state, 
            isLoading: false,
            dog: action.payload.message
        }
        case FETCHING_DOG_FAILURE:
        return {
            ...state, 
            isLoading: false,
            dog: action.payload
        }
        default: 
            return state;
    }
}