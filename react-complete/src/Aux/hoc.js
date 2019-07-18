import React from 'react'


const hoc = (WrappedComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent/>
            </div>
        )
    }
}

export default hoc