import axios from 'axios';

export function fetchData(url){
	return function (dispatch) {
		dispatch({type: "FETCH_DATA"});
	    axios.get(url)
	      .then((response) => {
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
	    axios.get(url)
	      .then((response) => {
	        dispatch({type: "GET_PLANET_DATA_FULFILLED", payload: response.data})
	      })
	      .catch((err) => {
	        dispatch({type: "FETCH_DATA_REJECTED", payload: err})
	      })
  }
}

export function fetchListData(listurl, category){
	return function (dispatch) {
		console.log(listurl)
		const listdata = listurl.map(url => {
					return axios.get(url)
			      .then((response) => {
							return response.data
			      })
				})

		Promise.all(listdata).then(data => {
			if(category == "FILMS"){
					dispatch({type: "GET_FILMS_DATA_FULFILLED", payload: data})
			} else if (category == "SPECIES") {
					dispatch({type: "GET_SPECIES_DATA_FULFILLED", payload: data})
			} else if (category == "VEHICLES"){
					dispatch({type: "GET_VEHICLES_DATA_FULFILLED", payload: data})
			} else if (category == "STARSHIPS") {
					dispatch({type: "GET_STARSHIPS_DATA_FULFILLED", payload: data})
			}
		})



  }
}
