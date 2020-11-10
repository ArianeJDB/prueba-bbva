import React from 'react';
import './errorMessage.css';

const ErrorMessage = ({ errorMsg }) => {
    return (
            <div className="error">{errorMsg}</div>
    )
}

export default ErrorMessage;