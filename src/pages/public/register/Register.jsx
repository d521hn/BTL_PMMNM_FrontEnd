import React from 'react';
import './register.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Input from '../../../components/form/Input';
import RadioButton from '../../../components/form/RadioButton';
import SubmitButton from '../../../components/form/SubmitButton';

const Register = () => {
    return (
        <div className="w-full">
            <div className="row">
                <div className="col-md-6 col-xs-12 d-flex align-items-center justify-content-center">
                    <h1>Tạo tài khoản</h1>
                </div>
                <div className="col-md-6 col-xs-12">
                    <form className='form-register'>
                        <Input
                            type="text"
                            id="firstName"
                            placeholder="Họ"
                        />
                        <Input
                            type="text"
                            id="lastName"
                            placeholder="Tên"
                        />
                        <div className="form-group d-flex">
                            <RadioButton
                                id="rbMale"
                                lableName="Nam"
                            />
                            <RadioButton
                                id="rbFemale"
                                lableName="Nữ"
                            />
                        </div>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email"
                        />
                        <Input
                            type="password"
                            id="password"
                            placeholder="Mật khẩu"
                        />
                        <SubmitButton text="ĐĂNG KÝ" />
                    </form>
                    <div className="come-back d-flex align-items-center">
                        <Link to="/" className='custom-link'>
                            <FontAwesomeIcon icon={faArrowLeft} className='custom-icon' />
                            Quay lại trang chủ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register