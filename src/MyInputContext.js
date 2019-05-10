import React from 'react';

const defaultValue = {
    value: '',
    onChange: () => {},
    placeholder: ''
}

export default React.createContext(defaultValue);