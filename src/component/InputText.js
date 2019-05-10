import React, { useContext } from 'react'
import MyContext from './MyContext';

const InputText = () => {
    const data = useContext(MyContext)
    const { editConfig } = data
    return (
        <input {...editConfig} />
    )
}
export default InputText