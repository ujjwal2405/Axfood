import {createStore,combineReducers,applyMiddleware} from 'redux';
import homeReducer from './Home/reducer';
import datadisplayReducer from './Data/reducer'
import searchDisplayReducer from './Search/reducer'
import conceptdisplayReducer from './Concept/reducer'
import dummydisplayReducer from './Dummy/reducer'
import dummyspecificReducer from './Dummy/reducerSpec'
import thunk from 'redux-thunk';

const reducer=combineReducers({homeReducer,datadisplayReducer,searchDisplayReducer,conceptdisplayReducer,dummydisplayReducer,dummyspecificReducer});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;