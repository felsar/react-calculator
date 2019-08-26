import React, {component} from 'react';
import KeyPadComponent from './KeyPadComponent'
import Result from './Result'

class Calculator extends component{
    constructor(){
        super();

        this.state={
            result:""
        }
    }

    render(){
        <div>
            <div className="calculator-body">
                <h1>Calculator</h1>
                <Result result={this.state.result}/>
                <KeyPadComponent onClick={this.onClick}/>
            </div>
        </div>
    }
    
}

export default Calculator;