import React, { Component } from 'react';
import { Card } from 'react-materialize';

class FlashCard extends Component {
    constructor(props){
        super(props);
        
        this.estadoInicial = {
            flashCardName : '',
            flashcardValue : ''
        }

        this.state = this.estadoInicial;
    }

    //componentDidMount(){}

    static getDerivedStateFromProps(props, state){
        return {
            flashCardName : props.nome,
            flashcardValue : props.valor
        }
    }

    render(){
        const { flashCardName, flashcardValue } = this.state;
        return(
            <Card
                className="white"
                textClassName="indigo-text darken-3-text strong"
                title={ flashcardValue.toString() }
            >
                { flashCardName }
            </Card>
        );
    }
}

export default FlashCard;