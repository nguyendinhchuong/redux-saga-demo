import { call, put, takeLatest, all } from 'redux-saga/effects'
import { fetchImageSuccess, fetchImageFail, FETCH_IMAGE } from './actions'
import axios from 'axios'


function* fetchImage() {    
    try {
        const url = "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=15603b70416231f15fa32e9ee8beb2b7&format=json&nojsoncallback=1&auth_token=72157711633717332-65b3ecc5c6d1b2ab&api_sig=e5c128511b6c73de9158a8099c56613a"
        const data = yield call(axios.get, url)
        yield put(fetchImageSuccess(data.data.photos.photo))
    } catch (error) {
        yield put(fetchImageFail(error))
    }
}

//saga watcher

function* watcherFetchImage() {
    yield takeLatest(FETCH_IMAGE, fetchImage);
}

export default function* imageSaga() {
    yield all([
        watcherFetchImage(),
    ])
}