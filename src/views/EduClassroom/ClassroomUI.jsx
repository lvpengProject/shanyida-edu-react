import React, { useContext } from 'react';
import {Col, Form, Input, Layout, Modal, Row, Space} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import style from './ClassroomUI.module.css';
import ClassroomContext from "./classroomContext";
import { PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import ClassroomEdit from "./ClassroomEdit";

const ClassroomUI = () => {
    const { list, removeHandler, isEdit, beginAdd, beginUpdate } = useContext(ClassroomContext)
    return (
        <Layout>
            <Header className={style['header']}>
                <div className={style['free-wrapper']}>
                    <span className={style['free']}>空闲：</span>
                    <i className={style['clsr-free']}/>
                </div>
                <div className={style['occupy-wrapper']}>
                    <span className={style['occupy']}>占用：</span>
                    <i className={style['clsr-occupy']}/>
                </div>
            </Header>
            <Content className={style['content']}>
                    <Row justify="start" gutter={[16,16]} className={style['row-container']}>
                        { list.map(item => (
                             item.clsr_occupy === 0? (
                                    <Col className={style['clsr-col-free']} key={item.clsr_id} offset={1} span={6}>
                                        {item.clsr_name}
                                        <div className={style['clsr-free-edit']}>
                                            <Space>
                                                <FormOutlined style={{ marginRight: '20px' }} onClick={() => beginUpdate(item)} />
                                                <DeleteOutlined onClick={() => removeHandler(item)} />
                                            </Space>
                                        </div>
                                    </Col>
                                ) : (<Col className={style['clsr-col-occupy']} key={item.clsr_id} style={{ backgroundColor: '#F56C6C' }} offset={1} span={6}>
                                 { item.clsr_name }
                                 <div className={style['clsr-occupy-edit']}>
                                     <Space>
                                         <FormOutlined onClick={() => beginUpdate(item)} />
                                     </Space>
                                 </div>
                             </Col>)

                        )) }
                        <Col className={style['clsr-add']} offset={1} span={6}>
                            <Space>
                                <PlusOutlined onClick={beginAdd}/>
                            </Space>
                        </Col>
                    </Row>
                </Content>
            <ClassroomEdit style={{ display: isEdit? 'block' : 'none' }}/>
        </Layout>
    )
}

export default ClassroomUI
