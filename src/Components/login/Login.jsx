// import React, { useState } from 'react';
// import '../index'
// // import HomePage from './Homepage';
// import styled from 'styled-components';
// // import { Link } from 'react-router-dom';


// const Login = () => {
//     const [showLogin, setShowLogin] = useState(false);

//     const handleLoginBtnClick = () => {
//         setShowLogin(true);
//     };

//     const handleLoginCloseClick = () => {
//         setShowLogin(false);
//     };

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [user, setUser] = useState(null);

//     const handleUsernameChange = (e) => {
//         setUsername(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const submitForm = (e) => {
//         e.preventDefault();
//         const userData = {
//             username,
//             password
//         };
//         setUser(userData);
//         setUsername('');
//         setPassword('');
//     };

//     return (
//         <TelaLogin>
//             <div id="login" className={showLogin ? 'show-login' : ''}>
//                 <form action="" className="login__form" style={{ backgroundColor: 'lightgray', padding: '20px', borderRadius: '5px' }}>
//                     <h2 className="login__title">Log In</h2>

//                     <div className="login__group">
//                         <div>
//                             <label htmlFor="email" className="login__label">Email</label>
//                             <input type="email" placeholder="Write your email" id="email" className="login__input" value={username} onChange={handleUsernameChange} />
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="login__label">Password</label>
//                             <input type="password" placeholder="Enter your password" id="password" className="login__input" value={password} onChange={handlePasswordChange} />
//                         </div>
//                     </div>

//                     <div>
//                         <p className="login__signup">
//                             You do not have an account? <a href="#">Sign up</a>
//                         </p>

//                         <a href="#" className="login__forgot">
//                             You forgot your password
//                         </a>

//                         <button id="login-btn" className="login__button" onClick={handleLoginBtnClick}>Log In</button>
//                     </div>
//                 </form>
//                 <i className="ri-close-line login__close" id="login-close" onClick={handleLoginCloseClick}></i>

//             </div>
//         </TelaLogin>
//     );
// };

// const TelaLogin = styled.div`
//     .login {
//         position: fixed;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         z-index: var(--z-modal);
//         background-color: hsla(230, 75%, 15%, .1);
//         backdrop-filter: blur(24px);
//         -webkit-backdrop-filter: blur(24px);
//         padding: 8rem 1.5rem 0;
//         opacity: 0;
//         pointer-events: none;
//         transition: opacity .4s;
//     }

//     input, button {
//         border: none;
//         outline: none;
//     }

//     .login__form, 
//     .login__group {
//         display: grid;
//     }
//     .login__form {
//         background-color: hsl(230, 100%, 97%);
//         padding: 2rem 1.5rem 2.5rem;
//         box-shadow: 0 8px 32px hsla(230, 75%, 15%, .2);
//         border-radius: 1rem;
//         row-gap: 1.25rem;
//         text-align: center;
//         transform: translateY(-1rem);
//         transition: transform .4s;
//     }

//     .login__title {
//         font-size: 1.25rem;
//         color: hsl(230, 75%, 15%);
//     }

//     .login__group {
//         row-gap: 1rem;
//     }

//     .login__label {
//         display: block;
//         text-align: initial;
//         color: hsl(230, 75%, 15%);
//         font-weight: 500;
//         margin-bottom: .25rem;
//     }

//     .login__input {
//         width: 100%;
//         background-color: hsl(230, 100%, 97%);
//         border: 2px solid hsl(230, 25%, 80%);
//         padding: 1rem;
//         border-radius: .5rem;
//         color: hsl(230, 12%, 40%);
//     }

//     .login__input:focus {
//         border-color: #7f00ff;
//         color: hsl(230, 12%, 40%);
//     }

//     .login__signup {
//         margin-bottom: .5rem;
//     }
      
//     .login__signup a {
//         color: hsl(230, 75%, 56%);
//     }
      
//     .login__forgot {
//         display: inline-block;
//         color: hsl(230, 75%, 56%);
//         margin-bottom: 1.25rem;
//     }

//     .login__button {
//         display: inline-block;
//         background-color: hsl(230, 75%, 56%);
//         width: 100%;
//         color: #fff;
//         font-weight: 600;
//         padding: 1rem;
//         border-radius: .5rem;
//         cursor: pointer;
//         transition: box-shadow .4s;
//     }

//     .login__button:hover {
//         box-shadow: 0 4px 24px hsla(230, 75%, 40%, .4);
//     }

//     .login__close {
//         position: absolute;
//         top: 2rem;
//         right: 2rem;
//         font-size: 1.5rem;
//         color: hsl(230, 75%, 15%);
//         cursor: pointer;
//     }

//     .show-login {
//         opacity: 1;
//         pointer-events: initial;
//     }
      
//     .show-login .login__form {
//         transform: translateY(0);
//     }

//     @media screen and (min-width: 576px) {
//         .login {
//             padding-top: 10rem;
//         }

//         .login__close {
//             width: max-content;
//             top: 5rem;
//             left: 0;
//             right: 0;
//             margin-inline: auto;
//             font-size: 2rem;
//         }

//         .login__form {
//             max-width: 400px;
//             margin-inline: auto;
//         }
//     }

//     @media screen and (min-width: 1023px) {
//         .login__form {
//             padding: 3rem 2rem 3.5rem;
//         }
//     }

// `
// export default Login;


