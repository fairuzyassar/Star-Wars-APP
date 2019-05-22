import React from "react"
import { connect } from "react-redux"

import { Redirect } from 'react-router-dom';
import { fetchData } from "../actions/peopleActions"
import { getPersonDetailData } from "../actions/peopleActions"
import { fetchPlanetData, fetchListData  } from "../actions/peopleActions"

@connect((store) => {
  return {
    people: store.people.people,
    person: store.people.person
  };
})

export default class People extends React.Component {
	// componentWillMount(){
	// 	this.props.dispatch(fetchData("https://swapi.co/api/people/?page=1"))
	// }

	fetchPrevNextData(url, e){
		this.props.dispatch(fetchData(url))
	}

  getPersonData(url, e){
    this.props.dispatch(getPersonData(url))
  }

  getPersonDetailData(individual, e){
    this.props.dispatch(getPersonDetailData(individual.url))
    this.props.dispatch(fetchPlanetData(individual.homeworld))
    this.props.dispatch(fetchListData(individual.films, "FILMS"))
    this.props.dispatch(fetchListData(individual.species, "SPECIES"))
    this.props.dispatch(fetchListData(individual.vehicles, "VEHICLES"))
    this.props.dispatch(fetchListData(individual.starships, "STARSHIPS"))
    const url = "/people?url=" + individual.url
    console.log(this.props)
    this.props.history.push("/person")
  }


	render(){
		const { people, person } = this.props

    console.log(this.props)

		if(!people.results.length){
			return <button onClick={this.fetchPrevNextData("https://swapi.co/api/people/?page=1")}>load people</button>
		}

		const listofpeople = people.results.map((individual, index) => <button type="button" key={index} onClick={this.getPersonDetailData.bind(this, individual)}  class="list-group-item list-group-item-action">{individual.name}</button>)

    return (
      <div class="container">
        <div class="row">
          <div class="col col-lg-6">
            <div class="card" style={{ width: '30rem'}}>
              <div class="card-body">
                <div class="list-group">
                  <button type="button" class="list-group-item list-group-item-primary list-group-item-action active">Stars Wars Cast</button>
                  {listofpeople}
                </div>
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item"><button type="button" class="btn btn-outline-primary" onClick={this.fetchPrevNextData.bind(this, people.previous)}>&laquo;</button></li>
                    <li class="page-item"><button type="button" class="btn btn-outline-primary" onClick={this.fetchPrevNextData.bind(this, people.next)}>&raquo;</button></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>)
	}
}
