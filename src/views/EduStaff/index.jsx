import React, { useEffect, useState } from 'react';
import StaffLayout from "./StaffLayout";
import StaffContext from "./staffContext";
import { connect } from "react-redux";
import { DicActions, StaffActions } from '../../store'

let EduStaff = ({ dicInit, jobList, staffList, stfInit }) => {
    useEffect(() => {
        dicInit();
        stfInit(model);
    }, []);
    const [model, setModel] = useState({
        stf_category: 0, stf_name: '', begin: 0, pageSize: 10
    })
    return (
        <StaffContext.Provider value={{ jobList, model, setModel, staffList }}>
            <StaffLayout/>
        </StaffContext.Provider>
    )
}
const mapStateToProps = ({ dictionary, staff }) => {
    return {
        jobList: dictionary.jobList,
        staffList: staff.list,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        dicInit: () => dispatch(DicActions.init()),
        stfInit: (model) => dispatch(StaffActions.init(model)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EduStaff)
