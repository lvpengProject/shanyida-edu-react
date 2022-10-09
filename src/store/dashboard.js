import { UserAPI } from "../api";

const initState = {
    menuTotal: [],
    menuTree: [],
    openFuncs: [],
    activeFuncKey: ''
}
const ActionTypes = {
    INIT_DASHBOARD: 'INIT_DASHBOARD',
    OPEN_FUNC: 'OPEN_FUNC',
    CHANGE_ACTIVE: 'CHANGE_ACTIVE',
    REMOVE_TAB: 'REMOVE_TAB',
}
export const Actions = {
    init: () => async (dispatch) => {
        const list = await UserAPI.getMneu();
        function update(node) {
            let children = [];
            list.forEach(item => {
                if(item.func_fid === node.func_id) children.push({ ...item })
            });
            if(children.length === 0) return;
            else {
                node.children = children;
                node.children.forEach(item => update(item))
            }
        }
        let result = [];
        list.forEach(item => {
            if(item.func_fid === 0) result.push({ ...item })
        })
        result.forEach(item => {
            update(item)
        });
        dispatch({ type: ActionTypes.INIT_DASHBOARD, payload: { result, list } })
    },
    openFunc: (e) => (dispatch, getState) => {
        let func_key = e.key;
        const state = getState();
        let openFuncs = state.dashboard.openFuncs;
        let activeFunc = state.dashboard.activeFuncKey;
        if(openFuncs.findIndex(item => item.func_key === func_key) === -1) {
            let target = state.dashboard.menuTotal.find(item => item.func_key === func_key);
            openFuncs.push({ ...target });
        }
        activeFunc = func_key;
        dispatch({ type: ActionTypes.OPEN_FUNC, payload: { openFuncs, activeFunc } })
    },
    changActive: (payload) => (dispatch, getState) => {
        dispatch({ type: ActionTypes.CHANGE_ACTIVE, payload })
    },
    removeTab: (payload) => (dispatch) => {
        dispatch({ type: ActionTypes.REMOVE_TAB, payload })
    }
}
let reducer = (state = initState, { type, payload } = {}) => {
    switch (type) {
        case ActionTypes.INIT_DASHBOARD:
            return { ...state, menuTree: payload.result, menuTotal: payload.list };
        case ActionTypes.OPEN_FUNC:
            return { ...state, openFuncs: [...payload.openFuncs], activeFuncKey: payload.activeFunc };
        case ActionTypes.CHANGE_ACTIVE:
            return { ...state, activeFuncKey: payload };
        case ActionTypes.REMOVE_TAB:
            const i = state.openFuncs.findIndex(item => item.func_key === payload);
            if ( payload !== state.activeFuncKey ) {}
            else if(state.openFuncs.length === 1)
                state.activeFuncKey = '';
            else if(i === state.openFuncs.length - 1)
                state.activeFuncKey = state.openFuncs[i - 1].func_key;
            else
                state.activeFuncKey = state.openFuncs[i + 1].func_key;
            state.openFuncs.splice(i, 1);
            return { ...state, openFuncs:[ ...state.openFuncs] }
        default:
            return state
    }
}

export default reducer
