import React, {Component} from 'react';

class Result extends Component{
    render(){
        console.log("updateResult")
        let {result} =this.props;
        return(
            <div className="result">
                <p>{result}</p>
            </div>
        )
    }
}

export default Result;