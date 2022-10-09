
import React, { useState } from "react";
import LoginLayout from '../Login/LoginLayout/LoginLayout'
import LoginContext from "./LoginContext";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { AuthAction } from '../../store';
import { message  } from 'antd'


let Login = ({ isLogin }) => {

    const navigate = useNavigate();
    const [model, setModel] = useState({
        user_name: '', user_pwd: ''
    });
    const login = async () => {
        await isLogin(model);
        message.success(`"${model.user_name}"登录成功！`).then(r => { console.log(r) })
        setTimeout(() => {
            navigate('/home', {replace: true});
        }, 500)
    }
    return  (
        <LoginContext.Provider value={{ model, setModel, login }}>
            <LoginLayout />
        </LoginContext.Provider>
    )
}

const mapDispatchToProps = (dispatch) => ({
    isLogin: model => dispatch(AuthAction.eduLogin(model))
})
export default connect(null, mapDispatchToProps)(Login)
