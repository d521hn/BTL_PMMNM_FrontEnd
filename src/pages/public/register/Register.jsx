import React, {useState} from 'react';
import './register.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Input from '../../../components/form/Input';
import RadioButton from '../../../components/form/RadioButton';
import SubmitButton from '../../../components/form/SubmitButton';
import UserApi from '../../../services/UserApi';

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleOnSubmitRegister = async (event) => {
        event.preventDefault();
        try {
            await UserApi.create(firstName, lastName, userName, email, password);
            alert("Đăng kí thành công");
            window.location.href = "/login";
        } catch {
            alert("Đăng kí thất bại");
        }
    }

    return (
        <div className="w-full">
            <div className="row">
                <div className="col-md-6 col-xs-12 d-flex align-items-center justify-content-center">
                    <h1>Tạo tài khoản</h1>
                </div>
                <div className="col-md-6 col-xs-12">
                    <form className='form-register' onSubmit={handleOnSubmitRegister}>
                        <Input
                            type="text"
                            id="firstName"
                            placeholder="Họ"
                            onChange={handleChangeFirstName}
                        />
                        <Input
                            type="text"
                            id="lastName"
                            placeholder="Tên"
                            onChange={handleChangeLastName}
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
                            type="text"
                            id="username"
                            placeholder="Username"
                            onChange={handleChangeUserName}
                        />
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email"
                            onChange={handleChangeEmail}
                        />
                        <Input
                            type="password"
                            id="password"
                            placeholder="Mật khẩu"
                            onChange={handleChangePassword}
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