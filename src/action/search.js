import {ACTION_ITEMS} from './index';
import {store} from '../store';

export const searchUserAction = (username) =>{
  store.dispatch({
    type:ACTION_ITEMS.SEARCH_REQUEST
  })
  // https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc&page=1&per_page=10
  const endpoint = "https://api.github.com/search/users\?q="+username;
  const response = fetch(endpoint)
  .then(data=>data.json())
  .then((data)=>{
    console.log(data)
    console.log(data.items)
    if(data.items.length >0 ) {
      store.dispatch({
        type:ACTION_ITEMS.SEARCH_SUCCESS,
        payload: data.items,
      });
    }
    else {
        store.dispatch({
          type:ACTION_ITEMS.SEARCH_FAILURE,
          payload:"User Not Found,Please search different user"
        })
        const msg = store.getState().searchReducer.ErrorMessage;
        alert(msg)
      }
  })
  .catch((errors) =>{
    console.log(errors,"sorry");
  })
    // .catch((e)=>{
    //   alert("soerr")
    // }   )
    // else {
    //   store.dispatch({
    //     type:ACTION_ITEMS.SEARCH_FAILURE,
    //     payload:"user not found"
    //   })
    //   const msg = store.getState().searchReducer.ErrorMessage;
    //   alert(msg)
    // }
  
  
  
}