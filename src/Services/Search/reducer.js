import {BRING_DATA} from './constant';

const initialState={
   sdata:[]
}

const searchDisplayReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case BRING_DATA:
            return {...state, sdata : action.data};
        
     
        default:
            return {...state};
    }
};

export default searchDisplayReducer;