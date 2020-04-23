import {CONCEPT_DATA} from './constant';

const initialState={
   conceptstore:[]
}

const conceptdisplayReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case CONCEPT_DATA:
            return {...state, conceptstore : action.data}
        
     
        default:
            return state;
    }
}

export default conceptdisplayReducer