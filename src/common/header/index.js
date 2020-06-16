import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoItemList
} from './style';

class Header extends Component {

    getListArea() {
        const { focused, itemList, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
        const listjs = itemList.toJS();
        const pageList = [];
        if (listjs.length) {
            for (let i = page * 5; i < Math.min((page + 1) * 5, listjs.length); i++) {
                pageList.push(<SearchInfoItem key={i + listjs[i]}>{listjs[i]}</SearchInfoItem>);
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>hot stops
                            <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage) }}>
                            <FontAwesomeIcon className='spinner' icon={faSpinner} />switch
                            </SearchInfoSwitch>

                    </SearchInfoTitle>
                    <SearchInfoItemList>
                        {/* {itemList.map((item, index) => {
                            return <SearchInfoItem key={index + item}>{item}</SearchInfoItem>
                        })
                        } */}
                        {pageList}
                    </SearchInfoItemList>
                </SearchInfo>
            )
        } else {

        }
    }

    render() {
        const { focused, itemList, handleOnFocus, handleOnBlur, login, handleLogout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    {login ? <NavItem className='right' onClick={handleLogout}>Logout</NavItem>
                        : <Link to='/login'><NavItem className='right'>Login</NavItem></Link>}
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={400} classNames="slide">
                            <NavSearch className={focused ? 'focused' : ''}
                                onFocus={() => handleOnFocus(itemList)} onBlur={handleOnBlur} />
                        </CSSTransition>
                        <FontAwesomeIcon className={focused ? 'focused zoom' : 'zoom'} icon={faSearch} size="2x" />
                        {this.getListArea(focused)}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className='reg'><FontAwesomeIcon icon={faCoffee} />Register</Button>
                    <Link to='/write'><Button className='written'>Write New</Button></Link>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        itemList: state.getIn(['header', 'itemList']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnFocus(itemList) {
            if (itemList.size === 0) {
                dispatch(actionCreators.getItemList());
            }
            dispatch(actionCreators.handleOnFocus());

        },
        handleOnBlur() {
            dispatch(actionCreators.handleOnBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.handleMouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.handleMouseLeave());
        },
        handleChangePage(page, totalPage) {
            if (page + 1 === totalPage) {
                dispatch(actionCreators.handleChangePage(0));
            } else {
                dispatch(actionCreators.handleChangePage(page + 1));
            }
        },
        handleLogout() {
            dispatch(loginActionCreators.logout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);