import {ClassroomAPI} from '../api'

const initState = {
    list: [],

}
const ActionTypes = {
    CLASSROOM_INIT: 'CLASSROOM_INIT',
    CLASSROOM_REMOVE: 'CLASSROOM_REMOVE',
    CLASSROOM_UPDATE: 'CLASSROOM_UPDATE',
    CLASSROOM_ADD: 'CLASSROOM_ADD'
}
export const Actions = {
    init: () => async (dispatch, getState) => {
        let payload = await ClassroomAPI.get();
        dispatch({ type: ActionTypes.CLASSROOM_INIT, payload })
    },
    remove: (payload) => async (dispatch,getState) => {
        await ClassroomAPI.remove(payload);
        dispatch({ type: ActionTypes.CLASSROOM_REMOVE, payload })
    },
    update: (payload) => async (dispatch,) => {

        await ClassroomAPI.update(payload);
        dispatch({ type: ActionTypes.CLASSROOM_UPDATE, payload })
    },
    add: (payload) => async (dispatch) => {
        payload.clsr_id = await ClassroomAPI.add(payload);
        dispatch({ type: ActionTypes.CLASSROOM_ADD, payload })
    }
}
let reducer = (state = initState, { type, payload } = {}) => {
    let i = -1;
    switch (type) {
        case ActionTypes.CLASSROOM_INIT:
            return { ...state, list: [...payload] };
        case ActionTypes.CLASSROOM_REMOVE:
            i = state.list.findIndex(item => item.clsr_id === payload);
            state.list.splice(i,1);
            return { ...state, list: [...state.list] };
        case ActionTypes.CLASSROOM_UPDATE:
            i = state.list.findIndex(item => item.clsr_id === payload.clsr_id);
            state.list.splice(i,1, { ...payload });
            return { ...state, list: [...state.list] };
        case ActionTypes.CLASSROOM_ADD:
            state.list.push({ ...payload, clsr_id: payload.clsr_id, clsr_occupy: 0 })
            return { ...state, list: [...state.list] }
        default:
            return state;
    }
}
export default reducer
