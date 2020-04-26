import {TOGGLE_FLAG,LOGIN_FAIL,LOGIN_START,LOGIN_SUCCESS} from './constant'
import AsyncStorage, {AsyncStorageStatic} from '@react-native-community/async-storage'




export const toggleFlag = (username,password) => dispatch =>{
     dispatch({
        type:LOGIN_START
    })
    fetch('https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-security/login',
    {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    },
  ).then(response => {
    if (!(response.status === 200)) {
      dispatch({
        type: LOGIN_FAIL,
      });
    } else {
        var token=response.headers.map.authorization
        token=token.slice(7)
        console.log(token)
    dispatch({
        type: LOGIN_SUCCESS,
        data:token
      });
    }
  });
};



