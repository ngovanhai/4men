import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import {
    Redirect,
    Route,
    Switch,
    useRouteMatch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

import routers from '../../router';


const Dashboard = React.lazy(() => import('../Dashboard'));
const ProductAdmin = React.lazy(() => import('../Products'));
const AddEditProduct = React.lazy(() => import('../AddEditProducts'));
const Oder = React.lazy(() => import('../Oder'));

const TheContent = () => {

    const match = useRouteMatch();
    console.log(match);

    const loading = (
        <div className="pt-3 text-center">
            <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
    )
    return (
        <main className="c-main">
            <main className="c-main">
                <CContainer fluid>
                    <Suspense fallback={loading}>
                        <Switch>
                            <Route path="/admin/oder" name="Home" render={props => <Oder {...props} />} />
                            <Route path="/admin/dashboard" name="Home" render={props => <Dashboard {...props} />} />
                            <Route path="/admin/product" name="Home" render={props => <ProductAdmin {...props} />} />
                            <Route path="/admin/:productId" name="Home" render={props => <AddEditProduct {...props} />} />
                            <Redirect from="/admin" to="admin/dashboard" />
                        </Switch>
                    </Suspense>
                </CContainer>
            </main>
        </main>
    );
}

export default React.memo(TheContent);