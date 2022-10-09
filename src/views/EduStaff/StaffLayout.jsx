import React from 'react';
import StaffHeader from "./StaffHeader/StaffHeader";
import StaffContent from "./StaffContent/StaffContent";
import StaffFooter from "./StaffFooter/StaffFooter";
import { Layout } from "antd";
import style from './StaffLayout.module.css'

let StaffLayout = () => {
    return (
       <Layout className={style['staff_layout']}>
           <StaffHeader className={style['staff_header']}/>
           <StaffContent className={style['staff_content']}/>
           <StaffFooter className={style['staff_footer']}/>
       </Layout>
    )
}

export default StaffLayout
