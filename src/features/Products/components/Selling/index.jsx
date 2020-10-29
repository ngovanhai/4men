import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import ProductCard from '../Product';
import Products from 'features/Products';
import { Container } from '@material-ui/core';

Selling.propTypes = {

};

function Selling(props) {

    const { products, onProductView, onAddToCartClick, onPayment } = props;
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Container>
            <Slider {...settings}>
                {products.map((product) => (
                    <ProductCard
                        product={product}
                        onProductView={onProductView}
                        onAddToCartClick={onAddToCartClick}
                        onPayment={onPayment}
                    />
                ))}
            </Slider>
        </Container>
    );
}

export default Selling;