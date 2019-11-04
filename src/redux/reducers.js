import {  FETCH_IMAGE_FAIL, FETCH_IMAGE_SUCCESS } from './actions';

const initialState = {
    images: [],
    error: ""
}
const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGE_SUCCESS: {
            return {
                ...state,
                images: action.images
            }
        }
        case FETCH_IMAGE_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state
        }
    }
}

export default imageReducer