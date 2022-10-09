import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk  from 'redux-thunk';
import auth, { Actions as AuthAction } from './auth';
import dashboard,{ Actions as DashActions }  from "./dashboard";
import classroom, { Actions as ClassroomActions } from "./classroom";
import staff, { Actions as StaffActions } from './staff';
import dictionary, { Actions as DicActions } from './dictionary'


export { AuthAction, DashActions, ClassroomActions,DicActions, StaffActions }


export default createStore(
    combineReducers({ auth, dashboard, classroom, staff, dictionary }),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
