import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
class Login extends PureComponent {

    render() {
        const { handleLogin, loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='username' ref={(input) => { this.account = input }}></Input>
                        <Input placeholder='password' type='password' ref={(input) => { this.password = input }}></Input>
                        <Button onClick={() => handleLogin(this.account, this.password)}>Login</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }

    }
}
const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})
const mapDispatchToProps = (dispatch) => ({
    handleLogin(account, password) {
        dispatch(actionCreators.login(account.value, password.value));
    }

});
export default connect(mapStateToProps, mapDispatchToProps)(Login);