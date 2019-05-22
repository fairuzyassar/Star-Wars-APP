import axios from 'axios';

export function getPersonData(url){
	return function (dispatch) {
		dispatch({type: "FETCH_PERSON_DATA"});
	    axios.get(url)
	      .then((response) => {
	      	console.log(response)
	        dispatch({type: "FETCH_PERSON_DATA_FULFILLED", payload: response.data})
	      })
	      .catch((err) => {
	        dispatch({type: "FETCH_PERSON_DATA_REJECTED", payload: err})
	      })
  	}
}
