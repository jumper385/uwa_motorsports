import React from 'react'
import { connect } from 'react-redux'

class Car extends React.Component{
    render(){
        return(
            <div>
                <h1>The Car</h1>
                <h2>The Parts</h2>
                {this.props.car.map( ({part, description}, index) => {
                    return(
                    <div>
                        <h3>{part}</h3>
                        <p>{description}</p>
                    </div>)
                } )}
            </div>
        )
    }
}

const mapStateToDispatch = state => ({
    car: state.car
})

export default connect(mapStateToDispatch)(Car)