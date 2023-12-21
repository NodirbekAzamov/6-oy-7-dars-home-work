import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div className="header_menuu">
        <div className='container'>
          <div className="header">
            <h1>logo</h1>

            <input type="text" placeholder='Search' className='form-control w-25' />

            <ul>
              <Link to="https://www.youtube.com/">Youtube</Link>
              <Link to="https://aliexpress.ru/">Aliexpress</Link>
              <Link to="https://www.alibaba.com/">Alibaba</Link>
              <Link to="https://www.lokiusa.com/collections/all">Product</Link>
            </ul>

            <div>
              <h4>Menu</h4>
            </div>

          </div>

          <Link to="/product" className='btn btn-primary'>Product</Link>
          <Link to="/cabinet" className='btn btn-primary'>Cabinet</Link>

        </div>
      </div>
    )
  }
}
