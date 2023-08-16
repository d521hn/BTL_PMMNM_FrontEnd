import React, { useState } from 'react';
import './login.scss';
import { Link } from "react-router-dom";
import Input from '../../../components/form/Input';
import SubmitButton from '../../../components/form/SubmitButton';
import LoginApi from '../../../services/LoginApi';

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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleOnSubmitLogin = async (event) => {
        event.preventDefault();
        try {
            const result = await LoginApi.login(email, password);
            console.log(result);
            if (result.role === "CUSTOMER") {
                alert("Đăng nhập thành công");
                sessionStorage.setItem("username", result.userName);
                window.location.href = "/";
            }
            else{
                window.location.href = "http://localhost:3001/";
            }
        }
        catch {
            alert("Đăng nhập thất bại");
        }
    }

    return (
        <div className="w-full">
            <div className="row">
                <div className="col-md-6 col-xs-12 d-flex align-items-center justify-content-center">
                    <h1>Đăng nhập</h1>
                </div>
                <div className="col-md-6 col-xs-12">
                    {showLogin && (
                        <form className='form-login' onSubmit={handleOnSubmitLogin}>
                            <Input
                                type="text"
                                id="email"
                                placeholder="Username"
                                onChange={handleEmailChange}
                            />
                            <Input
                                type="password"
                                id="password"
                                placeholder="Mật khẩu"
                                onChange={handlePasswordChange}
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
                                <SubmitButton text="GỬI" className="btn-send" />
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