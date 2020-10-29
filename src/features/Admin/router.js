import React from 'react';

const Dashboard = React.lazy(() => import('./page/Dashboard'));
const ProductAdmin = React.lazy(() => import('./page/Products'));
const AddEditProduct = React.lazy(() => import('./page/AddEditProducts'));
const Oder = React.lazy(() => import('./page/Oder'));

const routers = [
    { path: '/admin', name: 'Dashboard', component: ProductAdmin },
    { path: '/admin/products', name: 'Dashboard', component: ProductAdmin },
    { path: '/admin/oder', name: 'Dashboard', component: ProductAdmin },
    { path: '/admin/addproduct', name: 'Dashboard', component: AddEditProduct },
    { path: '/admin/addproduct/:productId', name: 'Dashboard', component: AddEditProduct },

]


export default routers;