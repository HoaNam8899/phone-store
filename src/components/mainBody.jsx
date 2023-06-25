import React, { Component } from 'react'
import Product from './product'
export default class MainBody extends Component {
    render() {
        return (
            <>
                <div className="single-product-area">
                    <div className="zigzag-bottom" />
                    <div className="container">
                        <div className="row">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
