import React, { useEffect, useState } from 'react'
import './checkoutReturn.scss'
import OrderApi from '../../../services/OrderApi';
import ProductOrderApi from '../../../services/ProductOrderApi';
import moment from 'moment';

const getValueFromURLParam = (paramName) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(paramName);
};

const convertDateTimeToString = (date) => {
    const momentDate = moment(date);
    if (momentDate.isValid()) {
        return momentDate.format('DD/MM/YYYY HH:mm:ss');
    } else {
        return 'Invalid Date';
    }
};

const CheckoutReturn = () => {

    const [order, setOrder] = useState([]);
    const [ship, setShip] = useState([]);
    const [products, setProducts] = useState([]);

    const orderId = getValueFromURLParam("vnp_OrderInfo");
    const totalPrice = getValueFromURLParam("vnp_Amount") / 100;

    useEffect(() => {
        const getOrderById = async () => {
            try {
                const result = await OrderApi.getById(orderId);
                setOrder(result);
                setShip(result.ship);
            }
            catch {

            }
        }

        const getProductOrderByOrderId = async () => {
            try {
                const result = await ProductOrderApi.getByOrderId(orderId);
                setProducts(result);
            } catch (error) {

            }
        }
        getOrderById();
        getProductOrderByOrderId();
    }, [])


    return (
        <div className="info-container d-flex justify-content-center">
            <div className="info-order">
                <div className="title">
                    <h1 className='text-center'>Thông tin đơn hàng</h1>
                </div>
                <div className="content">
                    <p>
                        <span>Mã đơn hàng: </span>
                        <span>{order.id}</span>
                    </p>
                    <p>
                        <span>Ngày đặt: </span>
                        <span>{convertDateTimeToString(order.createdTime)}</span>
                    </p>
                    <p className='d-flex'>
                        <span>Thông tin giao hàng: </span>
                        <div className="ship-info">
                            <p>
                                <span>Người đặt: </span>
                                <span>{ship.fullName}</span>
                            </p>
                            <p>
                                <span>Email: </span>
                                <span>{ship.email}</span>
                            </p>
                            <p>
                                <span>Số điện thoại: </span>
                                <span>{ship.phoneNumber}</span>
                            </p>
                            <p>
                                <span>Địa chỉ: </span>
                                <span>{ship.address}</span>
                            </p>
                        </div>
                    </p>
                    <p>
                        <span>Danh sách sản phẩm:</span>
                        <div className="list-product">
                            <table class="table table-bordered table-product">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Giá tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length > 0 ? (
                                        products.map((product, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{product.product.name}</td>
                                                <td>{product.quantity}</td>
                                                <td>{(product.price).toLocaleString("vi-VN")}đ</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4">Không có sản phẩm.</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td align='center' colSpan="3" style={{ fontWeight: 'bolder' }}>Tổng tiền</td>
                                        <td style={{ fontWeight: 'bolder' }}>{totalPrice.toLocaleString("vi-VN")}đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </p>
                    <p>
                        <span>Trạng thái đơn hàng: </span>
                        <span>{order.orderStatus}</span>
                    </p>
                    <p>
                        <span>Trạng thái thanh toán: </span>
                        <span>{order.paymentStatus}</span>
                    </p>
                </div>
            </div>
        </div>


    )
}

export default CheckoutReturn