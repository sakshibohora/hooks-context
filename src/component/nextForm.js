import React, { useContext } from 'react'
import { InputContext } from './store'

const NextForm = () => {
  const { data } = useContext(InputContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data.form.toggle)
    console.log(data.form.mangoes)
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}>
        <table border="1" >
          <tbody>
            <tr>
              <td>Mango</td>
              <td>Like<input
                type="radio"
                name="mangoes"
                value="Like"
                checked={data.form.mangoes === "Like"}
                handleChange={data.handleChange}
              />
                Not like<input
                  type="radio"
                  name="mangoes"
                  value="Not Like"
                  checked={data.form.mangoes === "Not Like"}
                  handleChange={data.handleChange}
                />
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