import React from 'react';
import { Footer } from 'react-materialize';

const fixedBottom = {
    /*position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "white",
    textAlign: "right",
    height: "80px"*/
}

function Rodape(){
    return (
        <div style= { fixedBottom }>
            <Footer className="blue accent-3">
                <p className="grey-text text-lighten-4 align-left">
                    CAIXA ECONÔMICA FEDERAL
                </p>
            </Footer>
        </div>
    );
}

export default Rodape;