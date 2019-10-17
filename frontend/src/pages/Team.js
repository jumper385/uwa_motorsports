import React from 'react'
import { connect } from 'react-redux'

const Team = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Our Team</h1>
            {props.team.map( ({name}) => (<p key={name}>{name}</p>) )}
        </div>
    )
}

const mapStateToProps = ({team}) => ({
    team: team
})

export default connect(mapStateToProps)(Team)