
import React from 'react';
import './login.css';
import CustomHook from './Hooks/CustomHook'

const Login = () => {
    const {handleChange,inp,errors} = CustomHook({},{usernameError:"",passwordError:""})
    return (

        <div className="container">
<div className="form-box">
    <div className="header-form">
        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
        <div className="image">
        </div>
    </div>
    <div className="body-form">
<form>
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-user"></i></span>
        </div>
        <input type="text" onChange={handleChange} name="username" className="form-control" placeholder="Username" />
        {errors.usernameError}
    </div>
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-lock"></i></span>
        </div>
        <input type="text" onChange={handleChange} name="password" className="form-control" placeholder="Password" />
    </div>
    <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
    <div className="message">
        <div><input type="checkbox" /> Remember ME</div>
        <div><a href="#">Forgot your password</a></div>
    </div>
</form>
        <div className="social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
        </div>
    </div>
</div>
        </div>

    );
};

export default Login;