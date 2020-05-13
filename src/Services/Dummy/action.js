import {DISPLAY_DATA} from './constant';

export const getdummyData = () => dispatch => {
  fetch(
    'http://ab10054d.ngrok.io/api/users',
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

