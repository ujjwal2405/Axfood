import {TOGGLE_FLAG,LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL} from './constant';

const initialState={
    loading:false,
    loginSuccess:false,
    loginFailure:false,
    header:'',
}

const homeReducer = (state=initialState , action ={}) =>{
    console.log(action)
    switch(action.type){
        case LOGIN_START:{
            return {...state,loading:true}
        }
        case LOGIN_SUCCESS:{
            return{...state,loginSuccess:true,header:action.data}
        }
        case LOGIN_FAIL:{
            return{...state,loginSuccess:false}
        }
        default:
            return state;
    }
}

export default homeReducer