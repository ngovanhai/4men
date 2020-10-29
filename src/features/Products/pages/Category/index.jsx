import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from 'features/Cart/cartSlice';
import ProductList from 'features/Products/components/ProductsList';
import { Container, Grid, ListItem, ListItemIcon } from '@material-ui/core';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Breadcrumb } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from 'features/Products/components/Product';
import "./Category.scss";
import Content from 'features/Products/components/Content';

Category.propTypes = {

};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

function Category(props) {
    const classes = useStyles();

    const match = useRouteMatch();
    const products = useSelector(state => state.products);
    const { category } = useParams();
    console.log(match);
    const dispatch = useDispatch();
    const history = useHistory();
    const newProduct = [...products];
    let brums = "";
    let filterData;

    if (category === "moi-nhat") {
        brums = "Mới Nhất";
        filterData = newProduct.sort((a, b) => {
            return b.time.localeCompare(a.time);
        });
        console.log("data", filterData);
    }
    else if (category === "khuyen-mai") {
        brums = "Khuyến Mãi";
        filterData = newProduct.filter(
            product => product.sale !== 0
        )
    }
    else {
        switch (category) {
            case "quan":
                brums = "Quần Nam";
                break;
            case "thatlung":
                brums = "Phụ Kiện";
                break;
            case "giay":
                brums = "Giày Dép Nam"
            default:
                break;
        }
        filterData = newProduct.filter(
            product => product.phanloai === category,
        );
    }
    function handleClickAddCart(product) {
        const action = addProductToCart(product);
        console.log("action", action);
        dispatch(action);

    }

    const handleClickView = (product) => {
        const urlView = `/4MEN/${product.id}`;
        history.push(urlView);
    }
    function handleCLickPayment(product) {
        dispatch(addProductToCart(product));
        history.push("/");
    }
    return (
        <div className="GroupProduct">
            <Breadcrumb className=" GroupProduct__brumb">
                <Container fixed>
                    <div className="GroupProduct__item">
                        <Breadcrumb.Item ><Link to="/">4 MEN</Link></Breadcrumb.Item>
                        <Breadcrumb.Item ><Link to={`/category/${category}`}>{brums}</Link></Breadcrumb.Item>
                    </div>
                </Container>
            </Breadcrumb>
            <Container fixed>
                <p className="GroupProduct__nameGroup"><strong>{brums}</strong></p>
                <h3 className="GroupProduct__filter" >lọc sản phẩm : </h3>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <p className="GroupProduct__CartList"><ArrowForwardIosIcon className="GroupProduct__icon" />Quần áo nam</p>
                        <p className="GroupProduct__CartList"><ArrowForwardIosIcon className="GroupProduct__icon" />Túi xách nam</p>
                        <p className="GroupProduct__CartList"><ArrowForwardIosIcon className="GroupProduct__icon" />Thời Trang hot nhất</p>

                    </Grid>
                    <Grid item xs={4}>
                        <p className="GroupProduct__CartList"><ArrowForwardIosIcon className="GroupProduct__icon" />Túi xách nam</p>
                        <p className="GroupProduct__CartList"><ArrowForwardIosIcon className="GroupProduct__icon" />Thời Trang hot nhất</p>
                    </Grid>
                </Grid>
                <div className="GroupProduct__line"></div>
                <div className="GroupProduct__ProductList">
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <Grid container spacing={3}>
                                {filterData.map((product, index) => (
                                    <Grid key={index} item xs={4}>
                                        <ProductCard
                                            product={product}
                                            onAddToCartClick={handleClickAddCart}
                                            onProductView={handleClickView}
                                            onPayment={handleCLickPayment}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Content
                                onClickView={handleClickView}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div >
    );
}

export default Category;