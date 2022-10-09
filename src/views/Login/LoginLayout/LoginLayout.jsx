import React from "react";
import style from './LoginLayout.module.css';
import { Button, Form, Input } from 'antd';
import logo from './logo.jpg';
import LoginContext from "../LoginContext";

let LoginLayout = () => {

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <LoginContext.Consumer>
            { ({ model, setModel, login }) =>
                (
                    <div className={style['container']}>
                        <Form className={style['antForm']}  onFinish={login}
                              onFinishFailed={onFinishFailed}>
                            <Form.Item className={style['form-item']}>
                                <img src={logo} alt=""/>
                            </Form.Item>
                            <Form.Item label="账号：" hasFeedback name="username" rules={[
                                {
                                    required: true,
                                    message: 'Please input your username !',
                                },
                            ]}>
                                <Input value={model.user_name} onInput={e => setModel({ ...model, user_name: e.target.value})}/>
                            </Form.Item>
                            <Form.Item label="密码：" name="password" hasFeedback rules={[
                                {
                                    required: true,
                                    message: 'Please input your password !',
                                },
                            ]}>
                                <Input.Password value={model.user_pwd} onInput={e => setModel({ ...model, user_pwd: e.target.value})} />
                            </Form.Item>
                            <Form.Item className={style['login']}>
                                <Button type='primary' htmlType="submit">登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                )
            }
        </LoginContext.Consumer>
    )
}

export default LoginLayout
