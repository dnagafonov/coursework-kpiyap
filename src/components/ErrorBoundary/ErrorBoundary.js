import React from 'react';
import { InfoContainer } from '../InfoContainer';
import './error-boundary.scss'

export default class ErrorBoundary extends React.Component {
    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }
    render() {
        if (this.state.errorInfo) {
            return (
                <div className="error-boundary">
                    <InfoContainer>
                        <h2>Oops, JavaScript Error</h2>
                        <h4>try to reload page</h4>
                    </InfoContainer>
                </div>
            )
        }
        return this.props.children;
    }
}