import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommandWrapper, RecommandItem } from '../style';
class Recommand extends Component {
    render() {
        return (
            <RecommandWrapper>
                {
                    this.props.recommandList.map((item) => {
                        return <RecommandItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
                    })
                }
            </RecommandWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        recommandList: state.getIn(['home', 'recommandList']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommand);