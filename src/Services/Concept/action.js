import {CONCEPT_DATA} from './constant';

export const getConceptdata = (header) => dispatch => {
  fetch(
    'https://admin-rel.priskoll.occdev.axfood.se/axfood/axfood-product-scan/concepts?',
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
        type: CONCEPT_DATA,
        data: responseJson,
      });
    });
};