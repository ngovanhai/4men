import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonBase, Container, Grid, MenuItem, TextField } from '@material-ui/core';
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import ProductList from 'features/Products/components/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import "./Item.scss";
import { SIZE_QUAN_AO, SIZE_SHOES } from 'contants/size';
import { AMOUNT } from 'contants/amount';
import { ADDRESS } from 'contants/address';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import { addProductToCart } from 'features/Cart/cartSlice';

SelectProduct.propTypes = {

};
const defaultValues = {

    size: "",
    amount: ""
};

function SelectProduct(props) {
    const match = useRouteMatch();
    const dispatch = useDispatch();
    const history = useHistory();

    const { register, handleSubmit, setValue } = useForm();
    let { productId } = useParams();
    const products = useSelector(state => state.products);
    const product = products.find(product => product.id === +productId);

    const [click, setClick] = useState(1);
    const [amount, setAmount] = useState({});
    const [size, setSize] = useState({});
    const handleMultiChangeSize = (selectedOption) => {
        setValue("size", selectedOption);
        setSize({ selectedOption });
    };
    const handleMultiChangeAmount = (select) => {
        setValue("amount", select);
        setAmount({ select });
    };

    useEffect(() => {
        register({ name: "size" });
        register({ name: "amount" });
    }, [register]);

    const newProducts = [...products];
    const newProduct = newProducts.filter(newProduct => newProduct.phanloai === product.phanloai);



    const onSubmit = data => {
        if (click == 1) {
            const action = addProductToCart({ ...product, ...data });
            dispatch(action);
            history.push('/')
        } else {
            const action = addProductToCart({ ...product, ...data });
            dispatch(action);
        }
    }

    return (

        <div className="GroupProduct">
            <Breadcrumb>
                <div className="GroupProduct__brumb">
                    <Container fixed className="GroupProduct__brumbsitem">
                        <Breadcrumb.Item ><Link to="/">4 MEN</Link></Breadcrumb.Item>
                        <Breadcrumb.Item ><Link to={`/category/${product.phanloai}`}> {product.phanloai}</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={`/${productId}`}>{product.tittle}</Link></Breadcrumb.Item>
                    </Container>
                </div>
            </Breadcrumb>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <img src={product.image.image1} alt="" className="GroupProduct__image" />
                    </Grid>
                    <Grid item xs={7}>
                        <h2>{product.tittle}</h2>
                        <p>Giá bán : {product.gia.toLocaleString()} Vnđ</p>
                        <p>Tình trạng : {(product.gia === 0) ? "Hết Hàng" : "Còn Hàng"}</p>
                        <hr />
                        <h4>Danh Mục :<Link to={`/category/${product.phanloai}`}> {product.phanloai}</Link></h4>
                        <p>Điểm nổi bật : </p>
                        <p>Áo Len Xanh Đen AL123 chất liệu len cao cấp, mềm mịn, độ chảy tự nhiên, khả năng đàn hồi tốt và đặc biệt là giữ ấm tốt hơn len thường nhưng lại xốp nhẹ. Kiểu dáng cổ tròn, tay dài đơn giản dễ mặc, dễ phối trang phục.</p>
                        <hr />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="GroupProduct__option">
                                <div className="GroupProduct__select">
                                    <p>Size *</p>
                                    <Select
                                        className="GroupProduct__item"
                                        name="size"
                                        value={size.selectedOption}
                                        options={SIZE_QUAN_AO}
                                        onChange={handleMultiChangeSize}
                                    />
                                </div>
                                <div className="GroupProduct__select">
                                    <p>Số lượng *</p>
                                    <Select
                                        className="GroupProduct__item"
                                        name="amount"
                                        value={amount.select}
                                        options={AMOUNT}
                                        onChange={handleMultiChangeAmount}
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className="GroupProduct__action">
                                <Button className="GroupProduct__btnBuy" variant="contained" onClick={() => setClick(1)} color="secondary" type="submit"><ShoppingCartIcon /> Đăng kí mua</Button>
                                <Button className="GroupProduct__btnAdd" variant="outlined" onClick={() => setClick(2)} color="secondary" type="submit" > + Thêm vào giỏ hàng</Button>
                            </div>
                        </form>
                        <div className="GroupProduct__Address">
                            <h4>Địa chỉ showroom đang bán sản phẩm này:</h4>
                            {ADDRESS.map(adress => (
                                <p className="GroupProduct__AddressItem"> <li>{adress}</li></p>
                            ))}
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <div className="GroupProduct__description">
                            <h3>Mô tả sản phẩm</h3>
                            <h4>{product.tittle}</h4>
                            <p>{product.mota}</p>
                        </div>
                    </Grid>
                    <Grid item xs={4} className="GroupProduct__endow">
                        <Grid container>
                            <Grid item xs={2}>
                                <p><strong> 4MEN<sup>TM </sup></strong></p>
                            </Grid>
                            <Grid item xs={10}>
                                <div className="GroupProduct__line"></div>
                            </Grid>
                        </Grid>
                        <li><span className="GroupProduct__so">1 </span> Giao hàng TOÀN QUỐC</li>
                        <li><span className="GroupProduct__so">2 </span>Thanh toán khi nhận hàng</li>
                        <li><span className="GroupProduct__so">3 </span>Đổi trả trong 15 ngày</li>
                        <li><span className="GroupProduct__so">4 </span>Chất lượng đảm bảo</li>
                        <li><span className="GroupProduct__so">5 </span>Hàng luôn sẵn có</li>
                        <li><span className="GroupProduct__so">6 </span>MIỄN PHÍ vận chuyển:</li>
                        <p>» Đơn hàng trên 1 triệu đồng</p>
                    </Grid>
                </Grid>
                <div className="GroupProduct__more">
                    <Grid container>
                        <Grid item xs={4}>
                            <h1>SẢN PHẨM CÙNG DANH MỤC</h1>
                        </Grid>
                        <Grid item xs={8}>
                            <div className="GroupProduct__line"></div>
                        </Grid>
                    </Grid>

                    <ProductList
                        products={newProduct}
                    />
                </div>
            </Container>

        </div>

    );
}

export default SelectProduct;