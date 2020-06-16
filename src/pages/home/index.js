import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js'
import Topic from './components/Topic'
import Articles from './components/Articles'
import Recommand from './components/Recommand'
import Writer from './components/Writer'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import bannerbg from '../../assets/img/bannerbg.png';

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={bannerbg} />
                    
                    <Topic></Topic>
                    <Articles></Articles>
                </HomeLeft>
                <HomeRight>
                    <Recommand></Recommand>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll === true ? <BackTop onClick={this.handleScrollTop}>Back top</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }

}
const mapStateToProps = (state) => {
    return {
        showScroll: state.get('home').get('showScroll')
        // focused: state.get('header').get('focused')
        // focused: state.getIn(['header', 'focused']),
        // recommandList: state.getIn(['home', 'recommandList']),
        // page: state.getIn(['header', 'page']),
        // totalPage: state.getIn(['header', 'totalPage']),
        // mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        
        if(document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleScrollTopShow(true));
        } else {
            dispatch(actionCreators.toggleScrollTopShow(false))
        }

    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
