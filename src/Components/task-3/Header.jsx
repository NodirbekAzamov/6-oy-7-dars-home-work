import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { header} = this.props
    return (
      <div className='header_text'>
        <h4>{header}</h4>
      </div>
    )
  }
}
