import React from "react"
import { connect } from "react-redux"
import queryString from "query-string"


import { getPersonDetailData } from "../actions/peopleActions"
import { fetchPlanetData, fetchListData, getPersonalData  } from "../actions/peopleActions"


@connect((store) => {
  return {
    person: store.people.person
  };
})

export default class PersonDetail extends React.Component {

  render(){
    const { person } = this.props
    const listoffilm = person.films.map((film, index) => <li key={index}><small>{film.title}({film.episode_id}) - {film.release_date}</small></li>)
    const listofspecies = person.species.map((species, index) => <li key={index}><small>{species.name} - {species.classification}</small></li>)
    const listofvehicles = person.vehicles.map((vehicle, index) => <li key={index}><small>{vehicle.name} - {vehicle.model}</small></li>)
    const listofstarships = person.starships.map((starship, index) => <li key={index}><small>{starship.name} - {starship.model}</small></li>)
    return(
      <div class="card" style={{ width: '35rem'}}>
        <div class="card-body">
          <h2>{person.name}</h2>
          <div class="row">
            <div class="col-sm">
              <p><small>Height : {person.height}</small></p>
              <p><small>Mass : {person.mass}</small></p>
              <p><small>Hair Color : {person.hair_color}</small></p>
            </div>
            <div class="col-sm">
              <p><small>Skin Color : {person.skin_color}</small></p>
              <p><small>Eye Color : {person.eye_color}</small></p>
              <p><small>Birth Year : {person.birth_year}</small></p>
            </div>
            <div class="col-sm">
              <p><small>Gender : {person.gender}</small></p>
            </div>
          </div>

          <h5><strong># Planet</strong></h5>
          <div class="row">
            <div class="col-sm">
              <p><small>Name : {person.homeworld.name}</small></p>
              <p><small>Rotation Period : {person.homeworld.rotation_period}</small></p>
              <p><small>Orbital Period : {person.homeworld.rotation_period}</small></p>
            </div>
            <div class="col-sm">
                <p><small>Diameter : {person.homeworld.diameter}</small></p>
                <p><small>Climate : {person.homeworld.climate}</small></p>
                <p><small>Gravity : {person.homeworld.gravity}</small></p>
            </div>
            <div class="col-sm">
              <p><small>Terrain : {person.homeworld.terrain}</small></p>
              <p><small>Surface Water : {person.homeworld.surface_water}</small></p>
              <p><small>Population : {person.homeworld.population}</small></p>
            </div>
          </div>
          <h5><strong># Films</strong></h5>
          <div class="row">
            <ul>
              {listoffilm}
            </ul>
          </div>
          <h5><strong># Species</strong></h5>
          <div class="row">
            <ul>
              {listofspecies}
            </ul>
          </div>
          <h5><strong># Vehicles</strong></h5>
          <div class="row">
            <ul>
              {listofvehicles}
            </ul>
          </div>
          <h5><strong># Startships</strong></h5>
          <div class="row">
            <ul>
              {listofstarships}
            </ul>
          </div>
        </div>
      </div>)
  }
}
