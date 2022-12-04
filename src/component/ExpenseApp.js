/** @format */
import { useState, useEffect } from 'react'
import TransactionComponent from './TransactionComponent'
import OverViewComponent from './OverViewComponent'
const ExpenceApp = () => {
  const [expense, setExpense] = useState(0)
  const [income, setIncome] = useState(0)
  const [transactions, setTransactions] = useState([])
  const addTransaction = formValues => {
    console.log(formValues)
    const data = { ...formValues, id: Date.now() }
    setTransactions([...transactions, data])
    // setTransactions([...transactions, { ...formValues, id: Date.now() }])
  }
  useEffect(() => {
    let exp = 0
    let inc = 0
    transactions.forEach(t => {
      t.type === 'expense'
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount))
    })
    setExpense(exp)
    setIncome(inc)
  }, [transactions])
  return (
    <section className='container'>
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <TransactionComponent transactions={transactions} />
    </section>
  )
}

export default ExpenceApp
