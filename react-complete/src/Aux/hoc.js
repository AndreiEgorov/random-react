import React from 'react'


const hoc = (WrappedComponent, className) => {
    return (props) => {
        console.log("PROPS from HOC", props)
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default hoc