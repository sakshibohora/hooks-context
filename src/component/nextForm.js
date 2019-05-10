import React, { useState } from 'react'
import MyContext from './MyContext';
import InputText from './InputText';

const NextForm = (props) => {
  const [mangoes, setMangoes] = useState();

  const handleChange = (e) => {
    setMangoes({
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Hello " + props.data.firstName +" "+ props.data.lastName )
    console.log(mangoes)
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}>
        <table border="1" >
          <tbody>
            <tr>
              <td>Mango</td>
              <td>Like
                <MyContext.Provider 
                value={{
                editConfig: {
                  type: "radio",
                  name:"mangoes",
                  value: "like",
                  onChange: handleChange,
                }
              }}>
                <InputText />
              </MyContext.Provider>
                Not Like
                  <MyContext.Provider 
                  value={{
                  editConfig: {
                    type: "radio",
                    name:"mangoes",
                    value: "Not like",
                    onChange: handleChange,
                  }
                }}>
                  <InputText />
                </MyContext.Provider>
                </td>
            </tr>
          </tbody>
        </table>
          <button>Submit</button>
      </form>
    </div>
      )
    }
export default NextForm