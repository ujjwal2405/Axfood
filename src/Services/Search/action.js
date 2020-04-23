import {BRING_DATA} from './constant';

export const searchdata = (header,product) => dispatch => {
  fetch(
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/searchResults/'+product+'?',
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
      console.log(responseJson);
      dispatch({
        type: BRING_DATA,
        data: responseJson,
      });
    });
};