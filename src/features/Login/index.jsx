import React from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import './style.scss';
import './Login.scss';
import { useForm } from 'react-hook-form';

Login.propTypes = {};

function Login(props) {
    const data = {
        username: "hunter",
        pass: "123"
    }
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();

    const onSubmit = values => {
        const userName = values.username;
        const pass = values.pass
        if (userName === data.username && pass === data.pass) {
            history.push("/");
        } else alert("dang nhap that bai")
    }
    return (
        <body>
            <div className="Login">
                <div className=" w3l-login-form">
                    <h2>Login Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" w3l-form-group">
                            <label>Username:</label>
                            <div className="group">
                                <i className="fas fa-user" />
                                <input name="username" type="text" className="form-control" placeholder="Username" required="required" ref={register({
                                    validate: value => value !== "admin" || "Nice try!"
                                })} />
                            </div>
                        </div>
                        <div className=" w3l-form-group">
                            <label>Password:</label>
                            <div className="group">
                                <i className="fas fa-unlock" />
                                <input name="pass" type="password" className="form-control" placeholder="Password" required="required"
                                    ref={register({
                                        validate: value => value !== "admin" || "Nice try!"
                                    })}
                                />
                            </div>
                        </div>
                        <div className="forgot">
                            <a href="#">Forgot Password?</a>
                            <p><input type="checkbox" />Remember Me</p>
                        </div>
                        <button className="btnSubmit" type="submit">Login</button>
                    </form>
                    <p className=" w3l-register-p">Don't have an account?<a href="#" className="register"> Register</a></p>
                </div>
            </div>
        </body>
    );
}

export default Login;