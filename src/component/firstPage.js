import React, { useState } from 'react'
import Form from './form';
const FirstPage = () => {
  const [toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(false)
  }
  return (
    <div>
      {toggle === true ? <button onClick={handleClick}>Next >></button> :
        <Form />
      }
    </div>
  )
}
export default FirstPage