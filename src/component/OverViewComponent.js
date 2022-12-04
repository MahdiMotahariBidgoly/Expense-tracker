/** @format */
import { useState } from 'react'
import TransActionForm from './TransactionForm'
const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <div className='topSection'>
        <p>Balence:{income - expense}</p>
        <button
          // className={`btn ${isShow ? 'cancel' : ''}`}
          //or
          className={`btn ${isShow && 'cancel'}`}
          onClick={() => setIsShow(prevState => !prevState)}
        >
          {isShow ? 'Cansel' : 'Add'}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}

      <div className='resultSelection'>
        <div className='expenseBox'>
          expense<span style={{ color: 'red' }}>{expense}$</span>
        </div>
        <div className='expenseBox'>
          Income<span>{income}$</span>
        </div>
      </div>
    </>
  )
}

export default OverViewComponent
