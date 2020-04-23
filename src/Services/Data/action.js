import {DISPLAY_DATA} from './constant';

export const getdata = (header) => dispatch => {
  fetch(
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
    {
      method: 'GET',
      headers: {
        authorization:
          header
      },
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