import React, { useState } from 'react'
import NextForm from './nextForm';
import MyContext from './MyContext';
import InputText from './InputText'
const Form = () => {
  const [form, setValue] = useState({
    firstName: '',
    lastName: '',
    toggle: false,
  })
  
  const onChange = (e) => {
      setValue({
        ...form,
        [e.target.name]: e.target.value
      })
  }
  const handleClick = () => {
    setValue({
      ...form,
      toggle: true
    })
    console.log("firstName", form.firstName, form.lastName)
  }
  return (
    <div>
      {
        form.toggle === false ?
          <><table border="1">
            <tbody>
              <tr>
                <td>First Name </td>
                <td>
                  <MyContext.Provider value={{
                    editConfig: {
                      name:"firstName",
                      value: form.firstName,
                      onChange: onChange,
                      placeholder: "First Name"
                    }
                  }}>
                    <InputText />
                  </MyContext.Provider>
                </td>
              </tr>
              <tr>
                <td> Last Name</td>
                <td>
                  <MyContext.Provider value={{
                    editConfig: {
                      name:"lastName",
                      value: form.lastName,
                      onChange: onChange,
                      placeholder: "Last Name"
                    }
                  }}>
                    <InputText />
                  </MyContext.Provider>
                </td>
              </tr>
            </tbody>
          </table>
            <button onClick={handleClick}>Next >></button>
          </> : <NextForm data={form}/>
      }
    </div>
  )
}
export default Form