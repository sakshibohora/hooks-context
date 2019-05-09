import React, { useState } from 'react'
import Form from './form';
import Store from './store'
const FirstPage = () => {
  const [toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(false)
  }
  return (
    <div>
      {toggle === true ? <button onClick={handleClick}>Next >></button> :
        <Store>
          <Form />
        </Store>}
    </div>
  )
}
export default FirstPage