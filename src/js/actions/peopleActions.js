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

export function getPersonDetailData(url) {
  return {
    type: 'GET_PERSON_DATA',
    payload: {
      url
    },
  }
}

export function fetchPlanetData(url){
	return function (dispatch) {
		dispatch({type: "FETCH_DATA"});
	    axios.get(url)
	      .then((response) => {
	      	console.log(response)
	        dispatch({type: "GET_PLANET_DATA_FULFILLED", payload: response.data})
	      })
	      .catch((err) => {
	        dispatch({type: "FETCH_DATA_REJECTED", payload: err})
	      })
  }
}

export function fetchListData(listurl, category){
	return function (dispatch) {
		let listdata = []
		dispatch({type: "FETCH_DATA"});
		console.log(typeof(listurl))
		if(listurl.length){
			listurl.map(url => {
				axios.get(url)
		      .then((response) => {
		        listdata.push(response.data)
		      })
			})
		}

		if(category == "FILMS"){
				dispatch({type: "GET_FILMS_DATA_FULFILLED", payload: listdata})
		} else if (category == "SPECIES") {
				dispatch({type: "GET_SPECIES_DATA_FULFILLED", payload: listdata})
		} else if (category == "VEHICLES"){
				dispatch({type: "GET_VEHICLES_DATA_FULFILLED", payload: listdata})
		} else if (category == "STARSHIPS") {
				dispatch({type: "GET_STARSHIPS_DATA_FULFILLED", payload: listdata})
		}
  }
}
