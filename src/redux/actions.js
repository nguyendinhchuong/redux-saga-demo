export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAIL = 'FETCH_IMAGE_FAIL';

export const fetchImage = () => {
    return {
        type: FETCH_IMAGE
    }
}
export const fetchImageSuccess = (images) => {
    return {
        type: FETCH_IMAGE_SUCCESS,
        images
    }
}
export const fetchImageFail = (error) => {
    return {
        type: FETCH_IMAGE_FAIL,
        error
    }
}