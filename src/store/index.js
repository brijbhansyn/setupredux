import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import sampleReducer from './reducer/sampleReducer.js'
const rootReducers = combineReducers({
	sampleReducer
})

const store = createStore(
	rootReducers,
	applyMiddleware(thunk))

export default store;