import React from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
    people: store.people.people,
    person: store.people.person
  };
})

export default class PersonDetail extends React.Component {
  render(){
    console.log(this.props)
    const { people, person } = this.props

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

          <h5><strong>#Planet</strong></h5>
          <div class="row">
            <div class="col-sm">
              <p>Name :  </p>
              <p>Mass : {person.mass}</p>
              <p>Hair Color : {person.hair_color}</p>
            </div>
            <div class="col-sm">
              <p>Skin Color : {person.skin_color}</p>
              <p>Eye Color : {person.eye_color}</p>
              <p>Birth Year : {person.birth_year}</p>
            </div>
            <div class="col-sm">
              <p>Gender : {person.gender}</p>
            </div>
          </div>
        </div>
      </div>)
  }
}
