import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Dashboard_C extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='text-center py-3 bg-primary'>Dashboard</h3>
                    <div className='container'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, officia, inventore accusamus nemo
                            in non at mollitia corporis odio fuga a debitis eaque doloremque eos consequuntur
                            cum aspernatur quisquam incidunt deserunt velit? Voluptatibus dolore ducimus, accusantium sed tempora expedita
                        </p>
                        <Link to="/balance" className='btn btn-primary'>Balance</Link>
                    </div>
                </div>
            </div>
        )
    }
}
