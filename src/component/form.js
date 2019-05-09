import React, { useContext } from 'react'
import NextForm from './nextForm';
import { InputContext } from './store'

const Form = () => {
  const { data } = useContext(InputContext)
  return (
    <div>
      {
        data.form.toggle === false ?
          <><table border="1">
            <tbody>
              <tr>
                <td>First Name </td>
                <td>
                  <input type="text" name="firstName" value={data.form.firstName} onChange={data.handleChange} />
                </td>
              </tr>
              <tr>
                <td> Last Name</td>
                <td>
                  <input type="text" name="lastName" value={data.form.lastName} onChange={data.handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
            <button onClick={data.handleClick}>Next >></button>
          </> : <NextForm />
      }
    </div>
  )
}
export default Form