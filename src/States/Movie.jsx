import React, { Component } from 'react'
import JSON from './movielist.json';
import Details from './Details';


export default class Movie extends Component {

    constructor() {
        super()
        this.state={
            json:JSON
        }
    }
  render() {
    return (
      <div>
         <Details data={this.state.json}/>
      </div>
    )
  }
}
