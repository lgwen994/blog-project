import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'

const homeData = (result) => ({
    type: actionTypes.INITIAL_HOME_LIST,
    topicList: result.topicList,
    articleList: result.articleList,
    recommandList: result.recommandList

})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('api/home.json').then((res) => {
            const action = homeData(res.data.data);
            dispatch(action);
        })
    }
}

const moreData = (result, nextPage) => ({
    type: actionTypes.MORE_ARTICLE_LIST,
    articleList: fromJS(result.articleList),
    nextPage: nextPage
})

export const getMoreArtiles = (page) => {
    return (dispatch) => {
        axios.get('api/getmore.json?page=' + page).then((res) => {
            const action = moreData(res.data.data, page + 1);
            dispatch(action);
        })
    }
}


export const toggleScrollTopShow = (showScroll) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CHANGE_SCROLL_TOP_SHOW,
            showScroll: showScroll
        });
    }
}

// export const handleOnFocus = () => ({
//     type: actionTypes.SEARCH_FOCUS
// });

// export const handleOnBlur = () => ({
//     type: actionTypes.SEARCH_BLUR
// });


// export const handleMouseEnter = () => ({
//     type: actionTypes.MOUSE_ENTER
// });

// export const handleMouseLeave = () => ({
//     type: actionTypes.MOUSE_LEAVE
// });
// export const handleChangePage = (page) => ({
//     type: actionTypes.CHANGE_PAGE,
//     page: page
// });

// const changeList = (data) => ({
//     type: actionTypes.CHANGE_LIST,
//     data: fromJS(data),
//     totalPage: Math.ceil(data.length / 5)
// })