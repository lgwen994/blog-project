import axios from 'axios';
import * as actionTypes from './actionTypes';
// import { actionTypes } from '.';
const detailsData = (result) => ({
    type: actionTypes.INITIAL_DETAILS_DATA,
    title: result.title,
    content: result.content
})
export const getDetails = (id) => {
    return (dispatch) => {
        axios.get('/api/details.json?id=' + id).then((res) => {
            const action = detailsData(res.data.data);
            dispatch(action);
        })
    }
}