import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'
export const handleOnFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const handleOnBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const getItemList = () => {
    return (dispatch) => {
        axios.get('/api/headerlist.json').then((res) => {
            dispatch(changeList(res.data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const handleMouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const handleMouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});
export const handleChangePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page: page
});

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 5)
})