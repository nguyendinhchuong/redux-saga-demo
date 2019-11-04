import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import imageSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

const appMiddleware = applyMiddleware(sagaMiddleware)

//build store
const store = createStore(reducer,
    window.__REDUX_DEVTOOLs_EXTENSION__ &&
    window.__REDUX_DEVTOOLs_EXTENSION__(),
    appMiddleware)

//run saga
const rootTask = sagaMiddleware.run(imageSaga);
// rootTask.done.catch((error) => { throw error });


export default store;
