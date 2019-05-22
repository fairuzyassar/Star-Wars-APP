export default function reducer(state={
	people: {
		count: 0,
		next: null,
		previous: null,
		results: []
	},
	person : {},
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
		case "GET_PERSON_DATA": {
      const { url } = action.payload
      const listofpeople = [...state.people.results]
      const peopleindex = listofpeople.findIndex(person => person.url === url)
      const person = listofpeople[peopleindex];

      return {
        ...state,
        person: person,
      }
    }

		case "GET_PLANET_DATA_FULFILLED":{
			return {...state,
				person: {
					...state.person,
					homeworld: action.payload
				}
			}
		}
		case "GET_FILMS_DATA_FULFILLED":{
			return {...state,
				person: {
					...state.person,
					films: action.payload
				}
			}
		}

		case "GET_SPECIES_DATA_FULFILLED":{
			return {...state,
				person: {
					...state.person,
					species: action.payload
				}
			}
		}
		case "GET_VEHICLES_DATA_FULFILLED":{
			return {...state,
				person: {
					...state.person,
					vehicles: action.payload
				}
			}
		}
		case "GET_STARSHIPS_DATA_FULFILLED":{
			return {...state,
				person: {
					...state.person,
					starships: action.payload
				}
			}
		}
	}
	return state
}
