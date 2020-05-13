import {SPECIFIC_DATA} from './constantSpec';
import {UPDATE_DATA} from './constantSpec'
import {DELETE_DATA} from './constantSpec'


export const specificdummyData = (username,email,name,phone_number) => dispatch => {
    console.log(username,email,name,phone_number)
   
    fetch(
      'http://ab10054d.ngrok.io/api/users',
      {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            email: email,
            name:name,
            phone_number:phone_number
          })
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
          console.log(responseJson)
        dispatch({
          type: SPECIFIC_DATA,
          data: responseJson,
        });
      });
  };

  export const updatedummyData = (username,email,name,phone_number,id) => dispatch => {
    fetch(
      'http://dummy.restapiexample.com/api/v1/update/'+id,
      {
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            email: email,
            name:name,
            phone_number:phone_number
          })
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
          console.log(responseJson)
        dispatch({
          type: UPDATE_DATA,
          data: responseJson,
        });
      });
  };

  export const deletedummyData = (id) => dispatch => {
    fetch(
      'http://dummy.restapiexample.com/api/v1/delete/'+id,
      {
        method: 'DELETE',
      },
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson)
        dispatch({
          type: DELETE_DATA,
          data: responseJson,
        });
      });
  };