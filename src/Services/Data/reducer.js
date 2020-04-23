import {DISPLAY_DATA} from './constant';

const initialState={
   datastore:[]
}

const datadisplayReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case DISPLAY_DATA:{
            return {...state, datastore : action.data}
        }
     
        default:
            return state;
    }
}

export default datadisplayReducer