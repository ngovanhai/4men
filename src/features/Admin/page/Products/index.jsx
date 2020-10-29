import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

ProductsAdmin.propTypes = {

};

function ProductsAdmin(props) {
    return (
        <div className="ProductAdmin">
            <div className="ProductAdmin__menu">
                <Button>Them</Button>
            </div>
        </div>
    );
}

export default ProductsAdmin;