// components/Alert.js

import React, { useEffect } from 'react';

const Alert = ({ message }) => {
    useEffect(() => {
        if (message) {
            alert(message); // Display the alert message
        }
    }, [message]);

    return null; // Alert component doesn't render any visible UI
};

export default Alert;
