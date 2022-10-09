import React from 'react'
import Product from "../product/Product";
import "./productList.css"
import { products } from "../../data";
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
            <h1 className="pl-title">Create & inspire. It's Ayush</h1>
        <p className="pl-desc">
         I Have created projects like a Ecommerce Site with php backend and it have all the features and Created Salon Website with php to manage a partcular salon ,I have created Netflix clone and Spotify Clone with React js and Context APIs.
         In Past I have completed my Internship in Web Development and Created REST API with Asp.Net core & mongo db .
        </p>
            </div>
            <div className="pl-list">
            {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
            </div>
        </div>
    )
}

export default ProductList
