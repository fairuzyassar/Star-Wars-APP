export default function reducer(state={
	person: {},
	fetching: false,
	fetched: true,
	error: null,
	}, action){

	switch(action.type){
		case "FETCH_PERSON_DATA": {
			return {...state, fetching:true}
		}
		case "FETCH_PERSON_DATA_REJECTED": {
			return {...state, fetching:false, error:action.payload}
		}
		case "FETCH_PERSON_DATA_FULFILLED": {
			return{
				...state,
				fetching: false,
				fetched: true,
				person: action.payload,
			}
		}
	}
	return state
}
