import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item, index) => {
                        return <TopicItem key={item.get('id')}>
                            <img className='topicItemImg' src={item.get('imgUrl')} />
                            {item.get('title')}
                        </TopicItem>
                    })
                }
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topic);