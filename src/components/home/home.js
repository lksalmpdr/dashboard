import React, { Component } from 'react';
import Painel from '../painel/painel';

import { Row, Col } from 'react-materialize';
import FlashCard from '../flashcard/flashcard';

const dataGrafDnt = {
    labels : [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets : [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
}

const dataHorBar = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

const dataTabela = {
    "info" : [
        {"cod_ibge":1718659,"ente":"Rio da Conceição","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":2130,"cnpj":"33262536000134"},
        {"cod_ibge":1718709,"ente":"Rio dos Bois","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":2834,"cnpj":"37420932000101"},
        {"cod_ibge":1718758,"ente":"Rio Sono","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":6478,"cnpj":"00000729000168"},
        {"cod_ibge":1718808,"ente":"Sampaio","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":4711,"cnpj":"25086828000135"},
        {"cod_ibge":1718840,"ente":"Sandolândia","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":3375,"cnpj":"37344355000108"},
        {"cod_ibge":1718865,"ente":"Santa Fé do Araguaia","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":7512,"cnpj":"25063918000100"},
        {"cod_ibge":1718881,"ente":"Santa Maria do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":3434,"cnpj":"37421039000192"},
        {"cod_ibge":1718899,"ente":"Santa Rita do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":2365,"cnpj":"01613127000149"},
        {"cod_ibge":1718907,"ente":"Santa Rosa do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":4829,"cnpj":"24851503000139"},
        {"cod_ibge":1719004,"ente":"Santa Tereza do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":2866,"cnpj":"25086844000128"},
        {"cod_ibge":1720002,"ente":"Santa Terezinha do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":2529,"cnpj":"01634030000112"},
        {"cod_ibge":1720101,"ente":"São Bento do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":5324,"cnpj":"25063983000136"},
        {"cod_ibge":1720150,"ente":"São Félix do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":1585,"cnpj":"26753145000157"},
        {"cod_ibge":1720200,"ente":"São Miguel do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":12139,"cnpj":"25064007000106"},
        {"cod_ibge":1720259,"ente":"São Salvador do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":3082,"cnpj":"37344371000109"},
        {"cod_ibge":1720309,"ente":"São Sebastião do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":4805,"cnpj":"00766733000131"},
        {"cod_ibge":1720499,"ente":"São Valério","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":3960,"cnpj":"25043449000168"},
        {"cod_ibge":1720655,"ente":"Silvanópolis","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":5403,"cnpj":"00114819000180"},
        {"cod_ibge":1720804,"ente":"Sítio Novo do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":9029,"cnpj":"00766717000149"},
        {"cod_ibge":1720853,"ente":"Sucupira","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":1966,"cnpj":"37344439000141"},
        {"cod_ibge":1720903,"ente":"Taguatinga","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":16683,"cnpj":"02306900000197"},
        {"cod_ibge":1720937,"ente":"Taipas do Tocantins","capital":"0  ","regiao":"CO","uf":"TO","esfera":"M","exercicio":2020,"populacao":2148,"cnpj":"33261694000170"}
    ]
}


class Home extends Component{
    render(){

        return(
            <div className="container-fluid">
                <Row>
                    <Col m={3} s={3}>
                        <FlashCard nome="Informação 1" valor="10.000" />
                    </Col>
                    <Col m={3} s={3}>
                        <FlashCard nome="Informação 2" valor="1.000" />
                    </Col>
                    <Col m={3} s={3}>
                        <FlashCard nome="Informação 3" valor="100" />
                    </Col>
                    <Col m={3} s={3}>
                        <FlashCard nome="Informação 4" valor="10" />
                    </Col>
                </Row>
                <Row>
                    <Col m={6} s={12}>
                        <div>
                            <Painel key='0' visual="grafico" tipo="dnt" titulo="Admitidos por Ano" fonte="SISAD" dados={ dataGrafDnt } />
                        </div>
                    </Col>
                    <Col m={6} s={12}>
                        <div>
                            <Painel key='2' visual="grafico" tipo="hb" titulo="Admitidos Judicialmente" fonte="SISRH" dados={ dataHorBar } />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col m={6} s={12}>
                        <div>
                            <Painel key='3' visual="tabela" titulo="Unidades" fonte="SIPSI" dados={ dataTabela.info } />
                        </div>
                    </Col>
                </Row>
            </div>)
    }
}


export default Home;