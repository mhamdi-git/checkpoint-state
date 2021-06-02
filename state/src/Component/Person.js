import React, { Component } from 'react'

export class Person extends Component {
 constructor(props) {
  console.log("constructor()");
  super(props);
  this.state = {
   intervall: null,
   timer:0
  };
 }
 /* state = {

  isVisible: false
 } */
 componentDidMount() {
  console.log("componentDidMount()");
  this.setState({
   intervall: setInterval(() => {
    this.setState({ timer: this.state.timer +1})
   }, 1000),
  })
 }
 componentDidUpdate() {
  console.log("componentDidUpdatet()");
 }
 personne = [
 "imen",
  "bio",
  "profession"
 ]

 toggleVisibility = () => {
  this.setState({
   isVisible : this.state.isVisible
  })
 }
 render() {
  console.log("render()");
  return (
   <div>
    <ul className="List">
     {this.personne.map((personne, i) => (
      <li key={i}>{personne}</li>
     ))}
    </ul>
    <h2>{this.state.timer}</h2>
   </div>
  )
 }
}

export default Person
