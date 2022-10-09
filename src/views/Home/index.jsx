import React, {useEffect} from 'react';
import style from './index.module.css'
import {Layout, Menu, Table, Tabs} from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { DashActions } from '../../store';

//
let Home = ({ init, menuItem, onChange, openFunc, activeFunc, change, remove }) => {
    useEffect(() => {
        init()
    }, []);
    const navigate = useNavigate()
    const { Header, Footer, Sider, Content } = Layout;
    useEffect(() => {
        navigate(`${activeFunc}`);
    }, [activeFunc])
   function tree(data) {
       return data.map((item) => {
           if (item.children === undefined) {
               return (<Menu.Item key={item.func_key} >
                        {item.func_name}
               </Menu.Item>)
           } else {
               return (
                   <>
                       <Menu.SubMenu key={item.func_id} title={item.func_name}>
                           {tree(item.children)}
                       </Menu.SubMenu>
                   </>

               )
           }
       })
   }

   const elements = tree(menuItem);
    return  (
        <>
            <Layout>
                <Sider theme={'light'} width={300} className={style['sider']}>
                    <div style={{height: "20px", margin: "10px",}}/>
                    <Menu mode="inline" onClick={onChange}

                          selectedKeys={[activeFunc]}>{elements}</Menu>
                </Sider>
                <Layout className={style['main-layout']}>
                    <Header className={style['home-header']}>Header</Header>
                    <Content>
                        <Tabs type="editable-card" hideAdd activeKey={activeFunc} onTabClick={change} items={
                            openFunc.map(item => {
                                return {
                                    label: item.func_name,
                                    key: item.func_key,
                                    children: (
                                        <Outlet />
                                    )
                                }
                            })
                        } onEdit={remove}/>

                    </Content>
                    <Footer><span>&copy;</span>2022 山东第一医科大学（山东省医学科学院） 版权所有:202206H5</Footer>
                </Layout>
            </Layout>

        </>
    )
};
const mapStateToProps = ({ dashboard }) => {
    return  {
        menuItem: dashboard.menuTree,
        openFunc: dashboard.openFuncs,
        activeFunc: dashboard.activeFuncKey
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        init: () => dispatch(DashActions.init()),
        onChange: (e) => dispatch(DashActions.openFunc(e)),
        change: (e) => dispatch(DashActions.changActive(e)),
        remove: e => dispatch(DashActions.removeTab(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
