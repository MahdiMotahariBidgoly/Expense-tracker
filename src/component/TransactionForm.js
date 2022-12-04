/** @format */
import { useState } from 'react'
const TransActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    desc: '',
    amount: 0,
    type: 'Expense'
  })
  const changeHandler = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const submiHandler = e => {
    e.preventDefault()
    addTransaction(formValues)
    //setIsShow((prevState)=>!prevState)
    //or
    setIsShow(false)
  }
  return (
    <form onSubmit={submiHandler}>
      <input
        type='text'
        name='desc'
        placeholder='Description'
        onChange={changeHandler}
        value={formValues.desc}
      />
      <input
        type='number'
        name='amount'
        placeholder='Amount'
        onChange={changeHandler}
        value={formValues.amount}
      />
      {/* <input type='tel' placeholder='989000000000' /> */}
      <div className='radioBox'>
        <input
          type='radio'
          value='income'
          name='type'
          checked={formValues.type === 'income'}
          onChange={changeHandler}
          id='income'
        />
        <label htmlFor='income'>Income</label>
        <input
          type='radio'
          name='type'
          value='expense'
          checked={formValues.type === 'expense'}
          onChange={changeHandler}
          id='expense'
        />
        <label htmlFor='expense'>Expence</label>
      </div>
      <button className='btn primary' type='submit'>
        Add TransAction
      </button>
    </form>
  )
}

export default TransActionForm
