import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {footer} = this.props
    return (
      <div className='footer_text'>
        <h4>{footer}</h4>
      </div>
    )
  }
}
