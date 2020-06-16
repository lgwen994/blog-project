import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ArticlesWrapper, Article, ArticleInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
class Articles extends Component {
    render() {
        const { list, getMore, page } = this.props;
        return (
            <ArticlesWrapper>
                {
                    list.map((article, index) => {
                        return (
                            <Link to={'/detail/' + article.get('id')}>
                                <Article key={article.get('id')}>
                                    <img className='listItemImg' src={article.get('imgUrl')} />
                                    <ArticleInfo>
                                        <h3 className="title">
                                            {article.get('title')}
                                        </h3>
                                        <p className="summary">
                                            {article.get('content')}
                                        </p>
                                    </ArticleInfo>
                                </Article>
                            </Link>)
                    })
                }
                <LoadMore onClick={() => getMore(page)}>Read More</LoadMore>
            </ArticlesWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = (dispatch) => ({
    getMore(page) {
        dispatch(actionCreators.getMoreArtiles(page));
    }
})
// export default List;
export default connect(mapStateToProps, mapDispatchToProps)(Articles);