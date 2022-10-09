import React, { useContext } from 'react';
import { Layout,Table } from "antd";
import staffContext from "../staffContext";

let StaffContent = () => {
    const { Content } = Layout;
    const { Column, ColumnGroup } = Table
    const { staffList,jobList } = useContext(staffContext);
    const columns = [
        {
            title: '#',
            dataIndex: '',
            key: 'func_id',
            align: 'center'
        },
        {
            title: '姓名',
            dataIndex: 'stf_name',
            key: 'func_name',
            align: 'center'
        },
        {
            title: '职务类型',
            dataIndex: 'stf_category',
            key: 'stf_category',
            align: 'center'
        },
        {
            title: '备注',
            dataIndex: 'stf_remark',
            key: 'stf_remark',
            align: 'center'
        },
        {
            title: '操作',
            dataIndex: '',
            key: '',
            align: 'center'
        }
    ];
    const stfCategory = (text) => {
        console.log(text)
    }
    return (
        <Content>
            <Table bordered pagination={false} dataSource={staffList}>
                <Column align='center' title='#'/>
                <Column align='center' title='姓名' dataIndex='stf_name'/>
                <Column align='center' title='职务类型' render={stfCategory}/>
                <Column align='center' title='备注' dataIndex='stf_remark'/>
                <Column align='center' title='员工状态'/>
            </Table>
        </Content>
    )
}

export default StaffContent
