export default function reducer(state={
	people: {
		count: 0,
		next: null,
		previous: null,
		results: []
	},
	fetching: false,
	fetched: true,
	error: null,
	}, action){

	switch(action.type){
		case "FETCH_DATA": {
			return {...state, fetching:true}
		}
		case "FETCH_DATA_REJECTED": {
			return {...state, fetching:false, error:action.payload}
		}
		case "FETCH_DATA_FULFILLED": {
			return{
				...state,
				fetching: false,
				fetched: true,
				people: {
					count: action.payload.count,
					next: action.payload.next,
					previous: action.payload.previous,
					results: action.payload.results
				},
			}
		}
	}

	return state

}