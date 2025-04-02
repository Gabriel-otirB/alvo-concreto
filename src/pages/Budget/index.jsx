import Line from '../../components/Line';
import LogoTitle from '../../components/LogoTitle';
import CalculatorTitle from './components/CalculatorTitle';
import CalculatorInputNumber from './components/CalculatorInputNumber';
import CalculatorInputText from './components/CalculatorInputText';
import CalculatorButton from './components/CalculatorButton';

import { BudgetArea } from './styles';

const Budget = () => {
  return (
    <>
      <BudgetArea id='budget'>
        <div className="bg-default">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <LogoTitle animation='slide-down' />
              </div>

              <div className="col-md-12">
                <CalculatorTitle title='primary'>Calculadora de Concreto</CalculatorTitle>
              </div>
              
              <div className="col-md-6">
                <div className='left-wrapper'>
                  <div className="icon-wrapper">
                    <div className="icon-container">
                      <div className="icon-row">
                        <div className="icon-item">
                          <i className="fas fa-kaaba laje" title="Laje"></i>
                          <small>Laje</small>
                        </div>
                        <div className="icon-item">
                          <i className="fa-regular fa-square piso" title="Piso"></i>
                          <small>Piso</small>
                        </div>
                      </div>
                      <div className="icon-row">
                        <div className="icon-item">
                          <i className="fas fa-archway viga" title="Viga"></i>
                          <small>Viga</small>
                        </div>
                        <div className="icon-item" title="Calçada">
                          <i className="fas fa-square muro"></i>
                          <small>Muro</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CalculatorInputText label='outro' placeholder='Outra concretagem...'>Outra concretagem? Digite-a abaixo:</CalculatorInputText>
                </div>
              </div>

              {/* <!-- Coluna para o formulário de cálculo --> */}
              <div className="col-md-6">
                <div className='wrapper-inputs'>
                  <CalculatorInputNumber label='espessura' placeholder='Insira a espessura...'>Espessura (m):</CalculatorInputNumber>
                  <CalculatorInputNumber label='largura' placeholder='Insria a largura...'>Largura (m):</CalculatorInputNumber>
                  <CalculatorInputNumber label='comprimento' placeholder='Digite a espessura...'>Comprimento (m):</CalculatorInputNumber>
                </div>
                <div className="result-container"></div>
              </div>
              <CalculatorButton />
            </div>
          </div>
        </div>
      </BudgetArea>
      <Line />
    </>
  )
}

export default Budget