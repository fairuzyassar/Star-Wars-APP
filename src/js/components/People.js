import React from "react"
import { connect } from "react-redux"

import { fetchData } from "../actions/peopleActions"

@connect((store) => {
  return {
    people: store.people.people,
  };
})

export default class People extends React.Component {
	// componentWillMount(){
	// 	this.props.dispatch(fetchData("https://swapi.co/api/people/?page=1"))
	// }

	fetchPrevNextData(url, e){
		this.props.dispatch(fetchData(url))
	}

	render(){
		const { people } = this.props
		console.log(people.results.length)

		if(!people.results.length){
			return <button onClick={this.fetchPrevNextData("https://swapi.co/api/people/?page=1")}>load people</button>
		}

		const listofpeople = people.results.map((person, index) => <li key={index}>{person.name}</li>)

    console.log(people.next)
    return (
    <div class="card" style={{ width: '18rem'}}>
      <ul>{listofpeople}</ul>
      <button onClick={this.fetchPrevNextData.bind(this, people.previous)}>Prev</button>
  		<button onClick={this.fetchPrevNextData.bind(this, people.next)}>Next</button>
    </div>)
	}
}
