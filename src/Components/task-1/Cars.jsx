import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cars extends Component {

  state = {
    cars: [
      { id: 1, name: "Gentra", price: "$20000", color: "black", year: "2023", position: "3", number: 777 },
      { id: 2, name: "Cobolt", price: "$10000", color: "white", year: "2020", position: "1", number: 555 },
      { id: 3, name: "Monza", price: "$15000", color: "black", year: "2023", position: "3", number: "060" },
    ],
  }

  render() {
    const { cars } = this.state
    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-10 offset-1">
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>R/N</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>color</th>
                  <th>Year</th>
                  <th>Position</th>
                  <th>Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cars.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.color}</td>
                        <td>{item.year}</td>
                        <td>{item.position}</td>
                        <td>{item.number}</td>
                        <td><Link to={`/single_car/${index}`} className='btn btn-info'>open</Link></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
