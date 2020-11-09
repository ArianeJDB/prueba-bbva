import React, { useState } from 'react';

const ErrorMessage = ({ errorMsg }) => {
    return (
        <>
        <div>{errorMsg}</div>
        </>
    )
}

export default ErrorMessage;