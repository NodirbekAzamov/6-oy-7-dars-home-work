import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Cabinet extends Component {
  render() {
    return (
      <div>
        <div>
          <h3 className='text-center py-3 bg-primary'>Cabinet</h3>
        </div>

        <div className='container'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et veritatis sequi atque reiciendis eos laudantium
            quod deleniti quis fugit deserunt incidunt omnis, maxime consequatur quae labore aliquid ex. Distinctio animi, unde
            asperiores est rerum qui culpa accusantium voluptate? Totam ullam ab exercitationem recusandae ducimus
          </p>
          <Link to="/settings" className='btn btn-primary'>Settings</Link>
          <Link to="/dashboard" className='btn btn-primary'>Dashboard</Link>
        </div>
      </div>
    )
  }
}
