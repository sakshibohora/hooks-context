import React from 'react';

const defaultValue = {
  value: '',
  name:'',
  type:'',
  onChange: () => { },
  onSubmit: () => { },
  placeholder: ''
}

export default React.createContext(defaultValue);