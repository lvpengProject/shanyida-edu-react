import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { ClassroomActions } from '../../store';
import ClassroomContext from './classroomContext'
import ClassroomUI from "./ClassroomUI";
import { message, Modal, Space } from 'antd';

let EduClassroom = ({ list, init, removeClsr, updateClsr, addClsr }) => {
    const [isEdit,setIsEdit] = useState(false);
    const [model, setModel] = useState({
        clsr_id: 0, clsr_name: '', clsr_occupy: 0
    })
    useEffect(() => {
        init()
    }, []);
    const removeHandler = (data) => {
        Modal.confirm({
        title: `确认要删除“${data.clsr_name}”教室吗`,
        cancelText: '取消',
        okText: '确定',
        okType: 'primary',
            onOk: async function () {
                await removeClsr(data.clsr_id);
                message.success(`"${data.clsr_name}"删除成功！`)
            },
            onCancel() {}
    });

    }
    const beginAdd = () => {
        model.clsr_id = 0;
        model.clsr_name = '';
        model.clsr_occupy = 0;
        setModel({ ...model });
        setIsEdit(true)
    };
    const beginUpdate = (data) => {
        model.clsr_id = data.clsr_id;
        model.clsr_name = data.clsr_name;
        model.clsr_occupy = data.clsr_occupy;
        setModel({ ...model });
        setIsEdit(true)
    };
    const save = async () => {
        if(model.clsr_id === 0) {
            await addClsr(model);
            message.success(`"${model.clsr_name}"添加成功！`).then(r => {})
        }else {
            await updateClsr(model)
            message.success(`"${model.clsr_name}"编辑成功！`).then(r => {})
        }
            setIsEdit(false)

    }
    return (
        <ClassroomContext.Provider value={{
            list, removeHandler, isEdit, beginAdd, setIsEdit,beginUpdate,
            model, setModel, save
        }}>
            <ClassroomUI />
        </ClassroomContext.Provider>
    )
}
const mapStateToProps = ({ classroom }) => {
    return {
        list:classroom.list,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        init: () => dispatch(ClassroomActions.init()),
        removeClsr: (id) => dispatch(ClassroomActions.remove(id)),
        updateClsr: (data) => dispatch(ClassroomActions.update(data)),
        addClsr: (data) => dispatch(ClassroomActions.add(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EduClassroom)
