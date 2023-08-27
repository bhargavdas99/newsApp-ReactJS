import React from 'react'
import loading from './spinner.gif'

export const Spinner = () => {
    const myStyle = {
        height: "4em",
        width: "4em"
    }
    return(
        <div>
        <img style={myStyle} src={loading} alt="loading" />

        </div >
    )
}



export default Spinner