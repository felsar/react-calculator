import React, {Component} from 'react'

class Number extends Component{
    constructor(props){
        super(props)
        this.state={
            keyValue:this.props.value
        }
    }

    render(){
        return(
            <div>
                <button>{this.props.value}</button>
            </div>
        )
    }

}

export default Number