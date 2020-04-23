import {createStore,combineReducers,applyMiddleware} from 'redux';
import homeReducer from './Home/reducer';
import datadisplayReducer from './Data/reducer'
import searchDisplayReducer from './Search/reducer'
import conceptdisplayReducer from './Concept/reducer'
import thunk from 'redux-thunk';

const reducer=combineReducers({homeReducer,datadisplayReducer,searchDisplayReducer,conceptdisplayReducer});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;