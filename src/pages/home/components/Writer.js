import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem } from '../style';
class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                {/* <WriterItem>

                </WriterItem> */}
                Writer</WriterWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        // focused: state.getIn(['header', 'focused']),
        // itemList: state.getIn(['header', 'itemList']),
        // page: state.getIn(['header', 'page']),
        // totalPage: state.getIn(['header', 'totalPage']),
        // mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
// export default Writer;
export default connect(mapStateToProps, mapDispatchToProps)(Writer);