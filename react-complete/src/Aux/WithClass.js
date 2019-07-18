import React from 'react'

const WithClass = (props) => {
    return (
        <div classes={props.classes}> 
            {props.children}
        </div>
    )
}

export default WithClass