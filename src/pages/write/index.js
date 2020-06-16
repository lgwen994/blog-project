import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
class Write extends PureComponent {

    render() {
        const { loginStatus } = this.props;
        if (loginStatus) {
            return (
                <div>
                    write a new article
                </div>
            )
        } else {
            return <Redirect to='/login' />
        }

    }
}
const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})
const mapDispatchToProps = (dispatch) => ({
    // handleLogin(account, password) {
    //     dispatch(actionCreators.login(account.value, password.value));
    // }

});
export default connect(mapStateToProps, mapDispatchToProps)(Write);