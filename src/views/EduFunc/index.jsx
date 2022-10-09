import React from 'react';
import {Menu, Tree} from "antd";
import { connect } from "react-redux";
import { PlusOutlined,FormOutlined } from '@ant-design/icons'


let EduFunc = ({menuItem}) => {
    const _root = [{func_id:0,func_name: 'Root',children:menuItem}]
    const replaceMenu = {
        children:'children',
        key:'func_id',
        title: 'func_name',
    }
    return (
        <Tree
            draggable
            blockNode
            autoExpandParent={true}
            showIcon
            showLine
            fieldNames={replaceMenu}
            treeData={_root}
        >

        </Tree>
    )
}
const mapStateToProps = ({ dashboard }) => {
    return{ menuItem: dashboard.menuTree }
}
export default connect(mapStateToProps, null)(EduFunc)
