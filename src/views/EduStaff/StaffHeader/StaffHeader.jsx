import React, { useContext } from 'react';
import style from './StaffHeader.module.css'
import {Layout, Form, Input, Select, Button} from "antd";
import { PlusOutlined } from '@ant-design/icons'
import StaffContext from "../staffContext";

let StaffHeader = () => {
    const { Header } = Layout;
    const { Option } = Select;
    const { model, setModel, jobList } = useContext(StaffContext)
    return (
        <Header className={style['staff-header']}>
            <Form layout={"inline"}>
                <Form.Item label='员工名称'>
                    <Input value={model.stf_name} onInput={e => setModel({ ...model, stf_name: e.target.value })}/>
                </Form.Item>
                <Form.Item label='员工类型：'>
                    <Select style={{ width: 200 }} defaultValue={0}>
                        <Option value={0}>- 请选择 -</Option>
                        { jobList.map(item => (
                            <Option value={item.dic_id}>{item.dic_name}</Option>
                        )) }
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' style={{ color: '#fff', width: '150px' }} icon={<PlusOutlined />}>新增</Button>
                </Form.Item>
            </Form>
        </Header>
    )
}

export default StaffHeader
