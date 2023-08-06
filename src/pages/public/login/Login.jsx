import React from 'react';
import './login.scss';
import { Link } from "react-router-dom";
import Input from '../../../components/form/Input';
import SubmitButton from '../../../components/form/SubmitButton';

const Login = () => {
    return (
        <div className="w-full">
            <div className="row">
                <div className="col-md-6 col-xs-12 d-flex align-items-center justify-content-center">
                    <h1>Đăng nhập</h1>
                </div>
                <div className="col-md-6 col-xs-12">
                    <form>
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
                            <SubmitButton text="ĐĂNG NHẬP"/>
                            <div className="reg_pass">
                                <Link className='custom-link'>Quên mật khẩu?</Link> <br /> <span className='text-muted'>hoặc </span>
                                <Link to='/register' className='custom-link'>Đăng ký</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login