import React, { useState, useEffect } from 'react'
import './checkout.scss'
import { Link } from 'react-router-dom'
import Input from '../../../components/form/checkout/Input'
import RadioButton from '../../../components/form/checkout/RadioButton'
import SubmitButton from '../../../components/form/SubmitButton';
import ProductCheckout from '../../../components/itemProductCheckout/ProductCheckout'
import ProductCartApi from '../../../services/ProducCartApi'
import OrderApi from '../../../services/OrderApi'
import PaymentApi from '../../../services/PaymentApi'
import ProductOrderApi from '../../../services/ProductOrderApi'

const Checkout = () => {
    const [showTransferDetail, setShowTransferDetail] = useState(false);

    const [paymentMethod, setPaymentMethod] = useState("");

    const handleRadioButtonClick = (event) => {
        setShowTransferDetail(event.target.id === "transfer" ? true : false);
        setPaymentMethod(event.target.value);
    };

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAdrress] = useState("");

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAdrress(event.target.value);
    };

    const [productsCheckout, setProductsCheckout] = useState([]);

    useEffect(() => {
        const getProductCheckout = async () => {
            try {
                const result = await ProductCartApi.getByCartId();
                setProductsCheckout(result);
            }
            catch {

            }
        }
        getProductCheckout();
    }, [])

    let sumPrice = 0
    productsCheckout.map(item =>
        sumPrice += (item.product.price * item.quantity)
    )
    let totalPrice = sumPrice + 40000;

    const handleSubmitCheckout = async (event) => {
        event.preventDefault();
        try {
            //Tạo order mới
            await OrderApi.create(1, 1, "pending", paymentMethod, "Chưa thanh toán");
            alert("Đặt hàng thành công");

            //Lấy mã order vừa tạo
            const orders = await OrderApi.getByShipId(1);
            let orderId = orders[0].id;

            console.log(productsCheckout);

            //Thêm sản phẩm
            for (const item of productsCheckout) {
                await ProductOrderApi.create(item.id.productId, orderId, item.quantity, item.product.price);
            }

            if (paymentMethod !== "MOMO") {
                window.location.href = `/checkoutReturn?vnp_OrderInfo=${orderId}&vnp_Amount=${totalPrice}`;
            }
            else {

                //Thanh toán
                const result = await PaymentApi.create(orderId, totalPrice);
                window.location.href = result.url;
            }


        } catch (error) {

        }
    }
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
                <form className='form-checkout' onSubmit={handleSubmitCheckout}>
                    <div className="delivery-info">
                        <h3>Thông tin giao hàng</h3>
                        <div className="form-group row">
                            <div class="col-md-12">
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Họ và tên"
                                    onChange={handleFullNameChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div class="col-md-8 pr-0">
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div class="col-md-4">
                                <Input
                                    type="tel"
                                    id="tel"
                                    placeholder="Số điện thoại"
                                    onChange={handlePhoneChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div class="col-md-12">
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Địa chỉ"
                                    onChange={handleAddressChange}
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
                                    value="COD"
                                    onClick={handleRadioButtonClick}
                                />
                                <RadioButton
                                    id="transfer"
                                    lableName="Chuyển khoản ngân hàng"
                                    linkImg="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=4"
                                    value="BANKING"
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
                                    value="MOMO"
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
                    {productsCheckout.map(item => (
                        <ProductCheckout info={item} />
                    ))}
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
                        <span>{sumPrice.toLocaleString("vi-VN")}₫</span>
                    </div>
                    <div className="shipping-price d-flex justify-content-between">
                        <span>Phí vận chuyển</span>
                        <span>40.000₫</span>
                    </div>
                </div>
                <div className="total-price d-flex justify-content-between align-items-center">
                    <span>Tổng cộng</span>
                    <span>{totalPrice.toLocaleString("vi-VN")}₫</span>
                </div>
            </div>
        </div>

    )
}

export default Checkout