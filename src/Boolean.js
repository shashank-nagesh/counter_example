import React from 'react'

class ColorChange extends React.Component {
    constructor(){
        super()
        this.state = {
            booleanVal: true,
            color: 'red'
        }
    }
    handleChange = () => {
        console.log(this.state.booleanVal)
        this.setState((prevState) => {
            if(prevState.booleanVal){
                return {
                    booleanVal: false,
                    color: 'blue'
                }
            }
            else{
                return {
                    booleanVal: true,
                    color: 'red'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className="colorChangeBtn" style={{background: this.state.color}}onClick={this.handleChange}> Change Color</button>
            </div>
        )
    }
}



export default ColorChange