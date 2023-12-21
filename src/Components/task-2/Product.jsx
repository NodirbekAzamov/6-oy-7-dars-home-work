import React, { Component } from 'react'
import img1 from "./images/product_img1.jpg"
import img2 from "./images/product_img2.jpg"
import img3 from "./images/product_img3.jpg"
import { Link } from 'react-router-dom'
export default class Product extends Component {

    state = {
        count: 0,
    }

    pilus = () => {
        const { count } = this.state
        this.setState({
            count: count + 1,
        })
    }
    minus = () => {
        const { count } = this.state
        this.setState({
            count: count - 1,
        })
    }

    render() {
        // const { count } = this.state
        return (
            <div className="product">
                <div className="product_header">
                    <h1 className='text-center'>Product</h1>
                </div>
                <div className='container'>
                    <div className="product_boxs">
                        <div className="product_box">
                            <img src={img1} alt="" />
                            <div className="product_text">
                                <h6>$1200 USD</h6>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <button className='btn btn-info'>Sotib olish</button>
                                {/* {
                                    count.map((item) => {
                                        return (
                                            <>
                                                <button onClick={this.pilus}>+</button>
                                                <span>{item}</span>
                                                <button onClick={this.minus}>-</button>
                                            </>
                                        )
                                    })
                                } */}
                            </div>
                        </div>
                        <div className="product_box">
                            <img src={img2} alt="" />
                            <div className="product_text">
                                <h6>$1000 USD</h6>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <button className='btn btn-info'>Sotib olish</button>
                            </div>
                        </div>
                        <div className="product_box">
                            <img src={img3} alt="" />
                            <div className="product_text">
                                <h6>$1500 USD</h6>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <button className='btn btn-info'>Sotib olish</button>
                            </div>
                        </div>
                        <div className="product_box">
                            <img src={img2} alt="" />
                            <div className="product_text">
                                <h6>$1200 USD</h6>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <button className='btn btn-info'>Sotib olish</button>
                            </div>
                        </div>
                        <div className="product_box">
                            <img src={img3} alt="" />
                            <div className="product_text">
                                <h6>$1200 USD</h6>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <button className='btn btn-info'>Sotib olish</button>
                            </div>
                        </div>
                        <div className="product_box">
                            <img src={img1} alt="" />
                            <div className="product_text">
                                <h6>$1200 USD</h6>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <button className='btn btn-info'>Sotib olish</button>
                            </div>
                        </div>
                    </div>
                    <Link to="/productID" className='btn btn-primary my-5'>Product ID</Link>
                    <Link to="/settingsp" className='btn btn-primary my-5'>Settings</Link>

                </div>
            </div>

        )
    }
}
