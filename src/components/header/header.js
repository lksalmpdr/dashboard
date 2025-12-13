import React, { useEffect, useState } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Logo from '../../imagens/logo_caixa.png';

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

const Header = () => {
    const [mReady, setMReady] = useState(false);
    
    useEffect(() => {
        const checkM = () => {
            if (typeof window !== 'undefined' && typeof window.M !== 'undefined') {
                setMReady(true);
                return true;
            }
            return false;
        };
        
        if (checkM()) {
            return;
        }
        
        const checkInterval = setInterval(() => {
            if (checkM()) {
                clearInterval(checkInterval);
            }
        }, 50);
        
        setTimeout(() => {
            clearInterval(checkInterval);
            if (!mReady) {
                setMReady(true);
            }
        }, 5000);
        
        return () => clearInterval(checkInterval);
    }, [mReady]);
    
    if (!mReady) {
        return (
            <div style={fixedTop}>
                <div className="blue accent-3" style={{ height: '64px' }}></div>
            </div>
        );
    }
    
    return (
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
};

export default Header;