import React from 'react'
import './App.css'

function Parent(){
    var cendrol = '01'
    return cendrol
}

class Increment extends React.Component {
    constructor(){
        super()
        this.state = {
            count: Parent() 
        }
    }
    handleChange = () =>{
        this.setState((prevState) => {
            let val = parseInt(prevState.count)
            return {
                count: val + 10
            }
        })
    }

    render(){
        return (
            <div>
                <button className="incBtn" onClick={this.handleChange}> {this.state.count} <br />
                <p style={{fontSize: "20px", }}> <u> Click to Increment Counter </u></p> </button>
            </div>
        )
    }
}


export default Increment