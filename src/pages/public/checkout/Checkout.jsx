import React, { useState } from 'react'
import './checkout.scss'
import { Link } from 'react-router-dom'
import Input from '../../../components/form/checkout/Input'
import RadioButton from '../../../components/form/checkout/RadioButton'
import SubmitButton from '../../../components/form/SubmitButton';
import ProductCheckout from '../../../components/itemProductCheckout/ProductCheckout'

const Checkout = () => {
    const [showTransferDetail, setShowTransferDetail] = useState(false);

    const handleRadioButtonClick = (event) => {
        setShowTransferDetail(event.target.id === "transfer" ? true : false);
    };

    return (
        <div className="row">
            <div className="col-md-7 col-xs-12 col-checkout-left">
                <div className="header">
                    <Link to='/'>
                        <h2>Toyshop</h2>
                    </Link>
                </div>
                <div className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/cart' className='back-to-cart'>Giỏ hàng</Link>
                    </li>
                    <li className="breadcrumb-item">Thông tin giao hàng</li>
                </div>
                <form className='form-checkout'>
                    <div className="delivery-info">
                        <h3>Thông tin giao hàng</h3>
                        <div className="form-group row">
                            <div class="col-md-12">
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Họ và tên"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div class="col-md-8 pr-0">
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div class="col-md-4">
                                <Input
                                    type="tel"
                                    id="tel"
                                    placeholder="Số điện thoại"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div class="col-md-12">
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Địa chỉ"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="payment-method">
                        <h3>Phương thức thanh toán</h3>
                        <div className="content-box">
                            <div className="content-box-row">
                                <RadioButton
                                    id="cod"
                                    lableName="Thanh toán khi giao hàng (COD)"
                                    linkImg="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                                    onClick={handleRadioButtonClick}
                                />
                                <RadioButton
                                    id="transfer"
                                    lableName="Chuyển khoản ngân hàng"
                                    linkImg="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=4"
                                    onClick={handleRadioButtonClick}
                                />
                                {showTransferDetail && (
                                    <div class="transfer-detail">
                                        Vui lòng chuyển khoản thanh toán theo thông tin dưới đây:
                                        <br /> <br />
                                        Ngân hàng Thương mại Cổ phần Á Châu (ACB) <br />
                                        Chi nhánh Đa Kao - TP.HCM <br />
                                        Tên tài khoản: CTY CP NHUNG TRE EM VANG <br />
                                        Số tài khoản: 127998079 <br />
                                        <br /> <br />
                                        Ngân hàng TMCP Ngoại thương Việt Nam (VIETCOMBANK) <br />
                                        Chi nhánh Hồ Chí Minh - TP.HCM <br />
                                        Tên tài khoản: CTY CP NHUNG TRE EM VANG <br />
                                        Số tài khoản: 0071000762352 <br />
                                        <br /> <br />
                                        Nội dung chuyển khoản: TÊN KHÁCH HÀNG + SỐ ĐIỆN THOẠI + MÃ ĐƠN HÀNG <br />
                                        Ví dụ: Nguyễn Văn A 0912345678 FLO-100000
                                    </div>
                                )}

                                <RadioButton
                                    id="momo"
                                    lableName="Ví MoMo"
                                    linkImg="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=4"
                                    onClick={handleRadioButtonClick}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="submit-wrap d-flex justify-content-between align-items-center">
                        <Link to='/cart' className='back-to-cart'>Giỏ hàng</Link>
                        <SubmitButton text="Hoàn tất đơn hàng" className="btn-complete" />
                    </div>
                </form>


            </div>
            <div className="col-md-5 col-xs-12 col-checkout-right">
                <div className="list-product">
                    <ProductCheckout />
                    <ProductCheckout />
                    <ProductCheckout />
                </div>
                <form className='form-discount'>
                    <div className="row">
                        <div className="col-md-8 p-0">
                            <Input
                                type="text"
                                id="discount"
                                placeholder="Mã giảm giá"
                            />
                        </div>
                        <div className="col-md-4">
                            <SubmitButton text="Sử dụng" className="btn-use" />
                        </div>
                    </div>
                </form>
                <div className="price">
                    <div className="subtotal d-flex justify-content-between pb-3">
                        <span>Tạm tính</span>
                        <span>6,504,000₫</span>
                    </div>
                    <div className="shipping-price d-flex justify-content-between">
                        <span>Phí vận chuyển</span>
                        <span>40,000₫</span>
                    </div>
                </div>
                <div className="total-price d-flex justify-content-between align-items-center">
                    <span>Tổng cộng</span>
                    <span>6,544,000₫</span>
                </div>
            </div>
        </div>

    )
}

export default Checkout