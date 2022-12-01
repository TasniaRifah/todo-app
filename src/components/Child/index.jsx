import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    const data="I am from child component";
    this.props.onChildData(data);
    return (
      <div>
        <h1>I am child </h1>
        <h2>{this.props.data2}</h2>
      </div>
    )
  }
}
