import React, { useState } from 'react'
export const InputContext = React.createContext()
const Store = ({ children }) => {

  const [form, setValue] = useState({
    firstName: '',
    lastName: '',
    mangoes: '',
    toggle: false,
  })
  const handleChange = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = (e) => {
    e.preventDefault()
    setValue({
      toggle:true
    })
    console.log(form.firstName)
    console.log("hello")
  }
  const data = {
    form: form,
    handleChange: handleChange,
    handleClick: handleClick
  }
  return (
    <InputContext.Provider value={{ data }}>
      {children}
    </InputContext.Provider>
  )
}
export default Store