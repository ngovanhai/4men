import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { Grid, Button } from '@material-ui/core';
import { Input, Form, Row, Col } from 'antd';

import './FormAdress.scss';
import ItemCartPayment from '../../ItemCartPayment';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProductToCart } from 'features/Cart/cartSlice';


FormAdress.propTypes = {

};

function FormAdress(props) {
    const { control, register, handleSubmit, setValue } = useForm();

    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const oder = [...products]
    const onSubmit = (values) => {

        const oders = {
            oder, ...values
        }
        alert("mua hang thanh cong");
        console.log(oders);
    }

    const NameInput = (
        <Form.Item>
            <Input
                className="FormAdress__input"
                type="text"
                placeholder=""
                onChange={e => setValue("name", e.target.value, true)}
                onBlur={e => setValue("name", e.target.value, true)}
            />
        </Form.Item>
    )
    const EmailInput = (
        <Form.Item>
            <Input
                className="FormAdress__input"
                type="email"
                placeholder=""
                onChange={e => setValue("email", e.target.value, true)}
                onBlur={e => setValue("email", e.target.value, true)}
            />
        </Form.Item>
    )
    const PhoneInput = (
        <Form.Item>
            <Input
                className="FormAdress__input"
                type="text"
                placeholder=""
                onChange={e => setValue("phone", e.target.value, true)}
                onBlur={e => setValue("phone", e.target.value, true)}
            />
        </Form.Item>
    )
    const AdressInput = (
        <Form.Item>
            <Input
                className="FormAdress__input"
                type="text"
                placeholder=""
                onChange={e => setValue("phone", e.target.value, true)}
                onBlur={e => setValue("phone", e.target.value, true)}
            />
        </Form.Item>
    )

    const num = () => {
        let gia;
        if (products.length) {
            gia = products.map(x => +(x.gia * parseInt(x.slmua))).reduce((a, b) => a + b).toLocaleString()
        }
        else {
            gia = 0;
        }
        return gia;
    }
    const handleDelete = (product) => {
        const deleteItemCartId = product.id;
        const action = DeleteProductToCart(deleteItemCartId);
        dispatch(action);
    }
    return (
        <Row className="FormPayment">
            <Col span={12}>
                <div className="FormPayment__FormAdress">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="FormPayment__FormAdress__title">Thông tin giao hàng liên hệ</div>
                        <div className="FormPayment__FormAdress__line"></div>
                        <Row>
                            <Col span={10} className="FormPayment__FormAdress__label">Họ và tên *</Col>
                            <Col span={14} offset={0}>
                                <Controller
                                    as={NameInput}
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: true
                                    }}

                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10} className="FormPayment__FormAdress__label">Email*</Col>
                            <Col span={14} offset={0}>
                                <Controller
                                    as={EmailInput}
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: true
                                    }}

                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10} className="FormPayment__FormAdress__label">Số điện thoại *</Col>
                            <Col span={14} offset={0}>
                                <Controller
                                    as={PhoneInput}
                                    name="phone"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10} className="FormPayment__FormAdress_label"> <p>Địa chỉ giao hàng*</p> </Col>
                            <Col span={14} offset={0}>
                                <Controller
                                    as={AdressInput}
                                    name="adress"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                        </Row>

                    </form>
                </div >
            </Col>
            <Col span={12}>
                <div className="__FormPayment__FormCart">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="FormPayment__FormAdress__title">Thông tin giao hàng liên hệ</div>
                        <div className="FormPayment__FormAdress__line"></div>
                        <Row>
                            <Col span={4}><strong> Hình ảnh</strong></Col>
                            <Col span={6}><strong>Tên sản phẩm</strong></Col>
                            <Col span={4}><strong> Số lượng </strong></Col>
                            <Col span={4}><strong> Giá</strong></Col>
                            <Col span={4}><strong> Tổng </strong></Col>
                            <Col span={2}><strong>Xóa</strong></Col>
                        </Row>
                        {products.map((product) => (
                            <ItemCartPayment
                                product={product}
                                onCLickDelete={handleDelete}
                            />
                        ))}
                        < div className="FormPayment__FormAdress__title">Tổng</div>
                        <div className="FormPayment__FormAdress__line"></div>
                        <div className="FormPayment__FormAdress__price">
                            <p>Số tiền mua hàng : {num()} VND</p>
                        </div>
                        <Button type="submit" className="FormPayment__FormAdress__oder" >Gửi Đơn Hàng</Button>
                    </form>
                </div>

            </Col>
        </Row >

    );
}

export default FormAdress;