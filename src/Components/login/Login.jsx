import React, { useState } from 'react';
import styled from 'styled-components';
import './Login.css'




const Login = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginBtnClick = () => {
        setShowLogin(true);
    };

    const handleLoginCloseClick = () => {
        setShowLogin(false);
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        const userData = {
            username,
            password
        };
        setUser(userData);
        setUsername('');
        setPassword('');
    };

    return (
        <TelaLogin>
            <div id="login" className={showLogin ? 'show-login' : ''}>
                <form action="" className="login__form" style={{ backgroundColor: 'lightgray', padding: '20px', borderRadius: '5px' }}>
                    <h2 className="login__title">Log In</h2>

                    <div className="login__group">
                        <div>
                            <label htmlFor="email" className="login__label">Email</label>
                            <input type="email" placeholder="Write your email" id="email" className="login__input" value={username} onChange={handleUsernameChange} />
                        </div>

                        <div>
                            <label htmlFor="password" className="login__label">Password</label>
                            <input type="password" placeholder="Enter your password" id="password" className="login__input" value={password} onChange={handlePasswordChange} />
                        </div>
                    </div>

                    <div>
                        <p className="login__signup">
                            You do not have an account? <a href="#">Sign up</a>
                        </p>

                        <a href="#" className="login__forgot">
                            You forgot your password
                        </a>

                        <button id="login-btn" className="login__button" onClick={handleLoginBtnClick}>Log In</button>
                    </div>
                </form>
                <i className="ri-close-line login__close" id="login-close" onClick={handleLoginCloseClick}></i>

            </div>
        </TelaLogin>
    );
};

const TelaLogin = styled.div`
    .login {
        opacity: 0;
    }

`
export default Login;


