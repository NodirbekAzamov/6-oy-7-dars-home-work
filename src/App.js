import React, { Component } from "react";
import { Routes, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Components/task-2/style.scss";
import Home from "./Components/task-2/Home";
import Product from "./Components/task-2/Product";
import ProductID from "./Components/task-2/ProductID";
import Cabinet from "./Components/task-2/Cabinet";
import Settings_C from "./Components/task-2/Settings_C";
import Dashboard_C from "./Components/task-2/Dashboard_C";
import Balance_C_D from "./Components/task-2/Balance_C_D";
import Settings_P from "./Components/task-2/Settings_P";
import Details from "./Components/task-2/Details";
import Header from "./Components/task-3/Header";
import Section from "./Components/task-3/Section";
import Footer from "./Components/task-3/Footer";
import Auth from "./Components/task-1/Auth";
import Cars from "./Components/task-1/Cars";
import SingleCar from "./Components/task-1/SingleCar";


export class App extends Component {


  render() {
    return <div>
      {/* task-1 */}
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="cars" element={<Cars />}/>
        <Route path="single_car/:id" element={<SingleCar />}/>
      </Routes>


      {/* task-2 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="productID" element={<ProductID />} />
        <Route path="cabinet" element={<Cabinet />} />
        <Route path="settings" element={<Settings_C />} />
        <Route path="dashboard" element={<Dashboard_C />} />
        <Route path="balance" element={<Balance_C_D />} />
        <Route path="settingsp" element={<Settings_P />} />
        <Route path="details" element={<Details />} />
      </Routes>

      {/* task-3 */}
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Header header={"header"} />
        <Section nav={"nav"} arr1={["Footer", "Nav", "Article"]} arr2={["Figure", "Figcaption"]} />
        <Footer footer={"Footer"} />
      </div>
    </div>;
  }
}
