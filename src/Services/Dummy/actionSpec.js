import {SPECIFIC_DATA} from './constantSpec';
import {UPDATE_DATA} from './constantSpec'
import {DELETE_DATA} from './constantSpec'

export const specificdummyData = (name,salary,age) => dispatch => {
    fetch(
      'http://dummy.restapiexample.com/api/v1/create',
      {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            salary: salary,
            age:age
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

  export const updatedummyData = (name,salary,age,id) => dispatch => {
    fetch(
      'http://dummy.restapiexample.com/api/v1/update/'+id,
      {
        method: 'PUT',
        body: JSON.stringify({
            name: name,
            salary: salary,
            age:age
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