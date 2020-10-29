import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../Product';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


ProductList.propTypes = {
    ProductList: PropTypes.array,
    onCLickProductCLick: PropTypes.func,
    onProductView: PropTypes.func
};
function ProductList(props) {
    const classes = useStyles();

    const { products, onAddToCartClick, onProductView, onPayment } = props;


    return (
        <div className="container">
            <div className={classes.root} >
                <Grid container spacing={0}>
                    {products.map((product, index) => (
                        <Grid key={index} item xs={3}>
                            <ProductCard
                                product={product}
                                onAddToCartClick={onAddToCartClick}
                                onProductView={onProductView}
                                onPayment={onPayment}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>

    );
}

export default ProductList;