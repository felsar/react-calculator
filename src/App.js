import React, {Component} from 'react';
import './App.css';
//import Number from './component/Number';
import KeyPad from './component/KeyPad'
import Result from './component/Result'

class App extends Component{
  constructor(){
      super();

      this.state={
          result:" ",
          isEmpty:true
      }
  }

  onClick = (button) =>{
    if(button ==="=")
        this.calculate()
    else if(button==="C")
        this.reset()
    else if(button === "CE")
        this.backspace()
    else
        this.setState({
            result:this.state.result+button
        })
  }

  useButton(button){
      console.log("button")
    if(this.state.isEmpty){
        console.log("IsEmpty")
        this.setState({
            result:"",
            isEmpty: (this.state.isEmpty && false)
        })
    }
        
    if(button ==="=")
        this.calculate()
    else if(button==="C")
        this.reset()
    else if(button === "CE")
        this.backspace()
    else
        this.setState({
            result:this.state.result+button
        })
  }

  calculate =() =>{
      try{
        this.setState({
            result:(eval(this.state.result) || "") + ""
        })
    }
    catch(e){
        this.setState({
            result: "error"
        })
    }
    
  }

  reset = () =>{
      this.setState({
          result:""
      })
  }

  backspace = ()=>{
      this.setState({
          result:this.state.result.slice(0,-1)
      })
  }

  render() {
    return (
        <div id="calculator">
            <div className="calculator-body">
                <h1>Calculator</h1>
                <Result result={this.state.result} other="1"/>
                {/*<KeyPadComponent onClick={this.onClick}/>*/}
                <KeyPad onClick={(b) =>this.useButton(b)} />

            </div>
        </div>
    )
}
  
}

export default App;
