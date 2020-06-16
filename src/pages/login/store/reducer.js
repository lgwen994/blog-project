import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS(
    {
        // title: '',
        // content: ''
        login: false
    }
);
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_FLAG:
            console.log(action.login);
            return state.set('login', action.login);
        case actionTypes.LOGOUT_FLAG:
            return state.set('login', action.login);
        default:
            return state;
    }
    return state;
}