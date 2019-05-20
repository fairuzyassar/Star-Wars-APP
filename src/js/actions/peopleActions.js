import axios from 'axios';

export function fetchData(url){
	return function (dispatch) {
		dispatch({type: "FETCH_DATA"});
	    axios.get(url)
	      .then((response) => {
	      	console.log(response)
	        dispatch({type: "FETCH_DATA_FULFILLED", payload: response.data})
	      })
	      .catch((err) => {
	        dispatch({type: "FETCH_DATA_REJECTED", payload: err})
	      })   
  	}
}