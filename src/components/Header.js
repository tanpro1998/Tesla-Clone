import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header() {

    const [navSatus, setNavStatus] = useState(false)

    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt="" />
            </a>
            <Menu>
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model y</a>
                <a href='#'>Model X</a>
                <a href='#'>Solar Roof</a>
                <a href='#'>Solar Panes</a>

            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={() => setNavStatus(true)}/>
            </RightMenu>
            <RightNav show={navSatus}>
                <CloseWrapper>
                    <CloseBtn onClick={() => setNavStatus(false)}/>
                </CloseWrapper>
                <li><a href='#'>Exsisting Inventory</a></li>
                <li><a href='#'>Exsisting Inventory</a></li>
                <li><a href='#'>Exsisting Inventory</a></li>
                <li><a href='#'>Exsisting Inventory</a></li>
                <li><a href='#'>Exsisting Inventory</a></li>
                <li><a href='#'>Exsisting Inventory</a></li>
                <li><a href='#'>Exsisting Inventory</a></li>
                <li><a href='#'>Exsisting Inventory</a></li>
            </RightNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;

    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px
}
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const RightNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    text-align: start;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
`

const CloseBtn = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
