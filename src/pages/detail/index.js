import React, { Component } from 'react';
import { DetailWrapper, Headline, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
class Detail extends Component {

    componentDidMount() {
        this.props.getDetails(this.props.match.params.id);
    }
    render() {
        return (
            <DetailWrapper>
                <Headline>{this.props.title}</Headline>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </DetailWrapper>
        )
    }
}
const mapStateToProps = (state) => ({

    title: state.get('detail').get('title'),
    content: state.get('detail').get('content')
    // showScroll: state.get('home').get('showScroll')
    // focused: state.get('header').get('focused')
    // focused: state.getIn(['header', 'focused']),
    // recommandList: state.getIn(['home', 'recommandList']),
    // page: state.getIn(['header', 'page']),
    // totalPage: state.getIn(['header', 'totalPage']),
    // mouseIn: state.getIn(['header', 'mouseIn'])

})
const mapDispatchToProps = (dispatch) => ({
    getDetails(id) {
        dispatch(actionCreators.getDetails(id));
    }

});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
// export default connect(mapStateToProps, mapDispatchToProps)(Detail);