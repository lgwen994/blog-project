import styled from 'styled-components';
import logPic from '../../logo.svg'
export const HeaderWrapper = styled.div`
position:relative;
height: 60px;
`

export const Logo = styled.div`
//  background：url(${logPic});
background-size:container;
position : absolute;
display:block;
top:0;
left:0;
width:100px;
height:100%;
background:black;
`

export const Nav = styled.div`
width: 60%;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin: 0 auto;
// background:blue;
`
export const NavItem = styled.div`
&.left {
    float : left
}
&.right {
    float : right
}
height:100%;
line-height:60px;
padding: 0 15px;
font-size:17px;
`
export const SearchWrapper = styled.div`
position: relative;
float: left;
.slide-enter {
    transition : all .4s ease-out;
}
.slide-enter-active{
    width:300px;
}
.slide-exit {
    transition : all .4s ease-out;
}
.slide-exit-active{
    width:160px;
}
.zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
        background: #777;
        color: #fff;
    }
}
`
export const SearchInfo = styled.div`
z-index:1;
position:absolute;
left:0;
top:56px;
width:300px;
padding:0 20px;
background:#FFF;
box-shadow:0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom :15px;
line-height:20px;
font-size:14px;
color:#969696;
`

export const SearchInfoSwitch = styled.span`
float: right;
font-size:13px;
cursor:pointer;
.spinner {
    margin-right:5px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
}
`

export const SearchInfoItemList = styled.div`
overflow:hidden;
`

export const SearchInfoItem = styled.a`
display:block;
float: left;
padding:5px 10px;
margin:0 10px 10px 0;
font-size:12px;
line-height:20px;
border:solid 1px #ddd;
color: #787878;
border-radius : 5px;

`


export const NavSearch = styled.input.attrs({ placeholder: 'search' })`
width:160px;
height : 38px;
border:none;
border-radius : 19px;
margin-top: 9px;
padding: 0 20px;
font-size:14px;
background: #eee;
&.focused {
    width:300px;
}
`
export const Addition = styled.div`
position : absolute;
right:0;
top:0;
height:60px;
`
export const Button = styled.div`
float: right;
line-height:38px;
border-radius:19px;
margin-top: 9px;
margin-right:20px;
border: 1px solid #ec6149;
padding: 0 20px;
font-size:14px;
&.reg {
    color : red;
}
&.written {
    color : white;
    background:red;
}
`