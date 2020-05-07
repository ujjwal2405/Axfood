import {DISPLAY_DATA} from './constant';


const initialState={
   dummystore:[],
  
   
}

const dummydisplayReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case DISPLAY_DATA:{
            return {...state, dummystore : action.data}
        }
        
     
        default:
            return state;
    }
}

export default dummydisplayReducer