import React, { useState } from 'react';
import './login.scss';
import { Link } from "react-router-dom";
import Input from '../../../components/form/Input';
import SubmitButton from '../../../components/form/SubmitButton';

const Login = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [showResetPassword, setShowResetPassword] = useState(false);

    const handleForgotPasswordClick = () => {
        setShowLogin(false);
        setShowResetPassword(true);
    };

    const handleCancelClick = () => {
        setShowLogin(true);
        setShowResetPassword(false);
    };
    return (
        <div className="w-full">
            <div className="row">
                <div className="col-md-6 col-xs-12 d-flex align-items-center justify-content-center">
                    <h1>Đăng nhập</h1>
                </div>
                <div className="col-md-6 col-xs-12">
                    {showLogin && (
                        <form className='form-login'>
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
                            <div className="action-account d-flex align-items-center">
                                <SubmitButton text="ĐĂNG NHẬP" />
                                <div className="reg_pass">
                                    <Link className='custom-link' onClick={handleForgotPasswordClick}>Quên mật khẩu?</Link> <br /> <span className='text-muted'>hoặc </span>
                                    <Link to='/register' className='custom-link'>Đăng ký</Link>
                                </div>
                            </div>
                        </form>
                    )}
                    {showResetPassword && (
                        <form className='reset-password'>
                            <h2>Phục hồi mật khẩu</h2>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                            />
                            <div className="action-account d-flex align-items-center">
                                <SubmitButton text="GỬI" className="btn-send"/>
                                <div className="reg_pass">
                                    <Link className='custom-link' onClick={handleCancelClick}>Hủy</Link>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login;