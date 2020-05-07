import {DISPLAY_DATA} from './constant';

export const getdummyData = () => dispatch => {
  fetch(
    'http://dummy.restapiexample.com/api/v1/employees',
    {
      method: 'GET',
      // headers: {
      //   authorization:
      //     header
      // },
    },
  )
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      dispatch({
        type: DISPLAY_DATA,
        data: responseJson,
      });
    });
};

