import React, { Component } from 'react';
import { Card, Button, Icon } from 'react-materialize';
import { Doughnut, HorizontalBar } from 'react-chartjs-2';
import DataTable from 'react-data-table-component';

class Painel extends Component{
    constructor(props){
        super(props);

        this.estadoInicial = {
            tipo : '',
            visual : '',
            titulo : '',
            fonte : '',
            dados : {}
        }

        this.state = this.estadoInicial;
        this.changeVisual = this.changeVisual.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        return {
            tipo : props.tipo,
            visual : props.visual,
            titulo : props.titulo,
            fonte : props.fonte,
            dados : props.dados
        }
    }

    changeVisual = (tipo) =>{
        let _visual;
        let _tipo;
        let _dados;

        switch(tipo){
            case('t'):
                _visual = 'tabela';
                _dados = this.state.dados.principal;
                _tipo = '';
                break;
            case('g'):
                _visual = 'grafico';
                _dados = this.state.dados;
                _tipo = this.state.tipo;
                break;
            default:
                _visual = '';
                _dados = [];
                _tipo = ''
        }

        this.setState({tipo : _tipo, visual : _visual, dados : _dados})
    }

    render(){
        const { tipo, visual, titulo, fonte, dados } = this.state;
        let elemento;

        if( visual === 'grafico'){
            switch(tipo){
                case('dnt') :
                    elemento = <Doughnut data={ dados } />;
                    break;
                case('hb') :
                    elemento = <HorizontalBar data={ dados } />;
                    break;
                default:
                    elemento = <div><p>Deu em nada</p></div>
            }
        }else if(visual === 'tabela'){
            elemento = <DataTable data={ dados } />
        }

        return(
            <Card
            actions={[
                <Button waves="light" key="1" className="light-blue accent-4" onClick={ this.changeVisual('g') }>Gráfico<Icon right>show_chart</Icon></Button>,
                <Button waves="light" key="2" className="orange accent-3" onClick={ this.changeVisual('t') }>Tabela<Icon right>toc</Icon></Button>,
                <p className="right">Fonte: { fonte }</p>
                ]}
            className="white"
            textClassName="indigo-text darken-3-text strong"
            title={ titulo }
            >
                { elemento }   
            </Card>
        )}
}

export default Painel;