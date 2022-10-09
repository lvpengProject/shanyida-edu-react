import React, { useContext } from 'react';
import { Modal,Form, Input } from "antd";
import style from './ClassroomEdit.module.css';
import ClassroomContext from "./classroomContext";


let ClassroomEdit = () => {
    const { isEdit, setIsEdit, model,setModel, save } = useContext(ClassroomContext)
    return (
        <Modal className={style['edit-wrapper']}
               cancelText='取消'
               okText='确定'
               okType='primary'
                onOk={save}
               title='编辑' onCancel={() => setIsEdit(false)}
               open={isEdit} >
           <div className={style['form-item']}>
                <span className={style['clsr-name']}>教室名称：</span>
               <Input value={model.clsr_name} onInput={e => setModel({ ...model, clsr_name: e.target.value })}/>
           </div>
        </Modal>
    )
}
export default ClassroomEdit
