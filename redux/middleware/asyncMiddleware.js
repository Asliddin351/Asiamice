import axios from 'axios';


// const fetchToursMiddleware = storeAPI => next => action => {
//     if (action.type === GET_TOURS) {
//         axios.get(`http://127.0.0.1:8000/api/v1/tours/?page=${1}`).then(
//             res => res.data.then(response => storeAPI.dispatch({ type: TOURS_LOADED, payload: response.results }))
//         )
//     }
  
//     return next(action)
//   }