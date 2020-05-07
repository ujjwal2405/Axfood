import {SPECIFIC_DATA} from './constantSpec'
import {UPDATE_DATA} from './constantSpec'
import {DELETE_DATA} from './constantSpec'

const initialState={
    specificdata:[],
    updatedata:[],
    deletedata:''

    
 }

 const dummyspecificReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case SPECIFIC_DATA:{
            return{...state, specificdata : action.data}
        }

        case UPDATE_DATA:{
            return{...state, updatedata : action.data}
        }
        case DELETE_DATA:{
            return{...state, deletedata : 'Database Clear'}
        }
            default:
            return state;
    }
}

export default dummyspecificReducer