import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorInfo: ''
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            hasError: true,
            errorInfo: errorInfo
        })
    }

    render(){
        if(this.state.hasError){
            return(
                <h1>{this.state.errorInfo}</h1>
            )
        } else {
            return this.props.children
        }
        
    }
}
export default ErrorBoundary
