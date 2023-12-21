import React, { Component } from 'react'
import "./style.scss";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
export default class SingleCar extends Component {
  state = {
    cars: [
      { rasm: img1, name: "Gentra", price: "$20000", color: "black", year: "2023", position: "3", number: 777 },
      { rasm: img2, name: "Cobolt", price: "$10000", color: "white", year: "2020", position: "1", number: 555 },
      { rasm: img3, name: "Monza", price: "$15000", color: "black", year: "2023", position: "3", number: "060" },
    ],
  };


  render() {
    const url = window.location.href.split("/");
    let index = Number(url[4])
    const { cars } = this.state

    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-10 offset-1">
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>Rasm</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>color</th>
                  <th>Year</th>
                  <th>Position</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='rasm'><img src={cars[index].rasm} alt="rasm" /></td>
                  <td>{cars[index].name}</td>
                  <td>{cars[index].price}</td>
                  <td>{cars[index].color}</td>
                  <td>{cars[index].year}</td>
                  <td>{cars[index].position}</td>
                  <td>{cars[index].number}</td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    )
  }
}

// 50:34
