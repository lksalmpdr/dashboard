
import React from 'react';
import Logo from '../../imagens/logo_caixa.png';
import { Navbar, NavItem } from 'react-materialize';

const logoStyle = {
    paddingTop: "15px",
    paddingLeft: "15px"
};

const fixedTop = {
    //position: "fixed",
    left: "0",
    top: "0",
    width: "100%",
    color: "white",
}

const Header = () => (
    <div style={fixedTop}>
        <Navbar
            alignLinks="right"
            className="blue accent-3"
            brand={<img src={ Logo } style={ logoStyle } alt="CAIXA" />}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavItem href="/">Home</NavItem>
            <NavItem href="/contact">Contato</NavItem>
            </Navbar>
        </div>

);

export default Header;