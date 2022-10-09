import { StaffAPI } from '../api'

const initState = {
    list: [],
    total: 0
}
const ActionTypes = {
    INIT_STAFF: 'INIT_STAFF',
    ADD_STAFF: 'ADD_STAFF',
    UPDATE_STAFF: 'UPDATE_STAFF',
    DIMISSION_STAFF: 'DIMISSION_STAFF',
    REINSTATE_STAFF: 'REINSTATE_STAFF'
};
export const Actions = {
    init: (data) => async (dispatch) => {
        let allList = await StaffAPI.get(data);
        const { total, list } = allList;
        dispatch({ type: ActionTypes.INIT_STAFF, payload: { total, list } })
    }
}
export default function reducer( state = initState, { type, payload } = {} ){
    switch (type) {
        case ActionTypes.INIT_STAFF:
            return { ...state, list: payload.list, total: payload.total }
        default:
            return state
    }
}
