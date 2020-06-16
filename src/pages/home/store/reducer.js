import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS(
    {
        topicList: [],
        articleList: [],
        recommandList: [],
        articlePage: 1,
        showScroll: false
    }
);
export default (state = defaultState, action) => {
    // return state;
    switch (action.type) {
        case actionTypes.INITIAL_HOME_LIST:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommandList: fromJS(action.recommandList)
            })
        case actionTypes.MORE_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.articleList),
                articlePage: action.nextPage
            })
        case actionTypes.CHANGE_SCROLL_TOP_SHOW:
            return state.set('showScroll', action.showScroll);
        default:
            return state;
    }
}