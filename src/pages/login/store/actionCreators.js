import axios from 'axios';
import * as actionTypes from './actionTypes';

// const detailsData = (result) => ({
//     type: actionTypes.INITIAL_DETAILS_DATA,
//     title: result.title,
//     content: result.content
// })
export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?id=' + account + '&password=' + password).then((res) => {
            const action = {
                type: actionTypes.LOGIN_FLAG,
                login: res.data.login
            };
            dispatch(action);
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        const action = {
            type: actionTypes.LOGOUT_FLAG,
            login: false
        };
        dispatch(action);
    }
}
