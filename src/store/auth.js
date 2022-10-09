
import { UserAPI } from "../api";
let initState = {
    isInit: false,
    model: {
        user_name: '',
        user_pwd: ''
    }
}

const ActionType = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}
export const Actions = {
    eduLogin: (payload) => async (dispatch, getState) => {
        const state = getState();
        if(state.auth.isInit) return;
        let token = await UserAPI.login(payload);
        dispatch({ type: ActionType.LOGIN, payload: { payload, token } })
    }
}
let reducer = (state = initState, { type, payload } = {}) => {
    switch(type) {
        case ActionType.LOGIN:
            sessionStorage.setItem('token', payload.token);
            sessionStorage.setItem('name', payload.payload.user_name);
            state.isInit = true;
            return { model: { ...payload }, isInit: true }
        default:
            return state;
    }
}

export default reducer
