import React, { useState, useContext } from 'react';
import './App.css';
import MyInputContext from './MyInputContext'
// import { InputContext } from './component/store';
// import FirstPage from './component/firstPage';
const App = () => {
  const [pageNo, setPageNo] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submitForm = () => {
    alert("firstName>>>>>>" + firstName + ", lastName>>>>>>" + lastName)
    setPageNo(0);
  }

  return (
    <div className="App">
      {
        (pageNo === 0) && <MyInputContext.Provider value={{
          editConfig: {
            value: firstName,
            onChange: (e) => setFirstName(e.target.value),
            placeholder: "First Name"
          }
        }
        }>  <InputText />
        </MyInputContext.Provider>
      }
      {
        (pageNo === 1) && <MyInputContext.Provider value={{
          editConfig: {
            value: lastName,
            onChange: (e) => setLastName(e.target.value),
            placeholder: "Last Name"
          }
        }}>
          <InputText />
        </MyInputContext.Provider>
      }
      {
        (pageNo !== 2)
          ? <button onClick={() => setPageNo(pageNo + 1)} >Next</button>
          : <button onClick={() => submitForm()} >Submit</button>
      }
    </div >
  );
}

const InputText = () => {
  const data = useContext(MyInputContext)
  const { editConfig } = data
  return (
    <input
      {...editConfig}
    />)
}
export default App;