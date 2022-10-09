import { DictionaryAPI } from '../api'
const initState = {
    list: [],
    jobList: [], // 职务
    eduList: [], // 学历
    majorList: [], // 专业
}
const ActionTypes = {
    INIT_DICTIONARY: 'INIT_DICTIONARY'
}
export const Actions = {
    init: () => async (dispatch, getState) => {
        let jobList = [];
        let eduList = [];
        let majorList = [];
        let payload = await DictionaryAPI.get();
        payload.forEach(item => {
            if (item.dic_group_key === 'staff_category')  jobList.push(item)
            else if(item.dic_group_key === 'qualification') eduList.push(item)
            else majorList.push(item)
        });
        dispatch({ type: ActionTypes.INIT_DICTIONARY,payload: {payload, jobList, eduList, majorList } });
    }
}
export default function reducer(state = initState, { type, payload } = {}) {
switch (type) {
    case ActionTypes.INIT_DICTIONARY:
        return { ...state, list: [...payload.payload], jobList: [...payload.jobList], eduList: [...payload.jobList], majorList: [...payload.majorList] }
    default:
        return state;
}
}
