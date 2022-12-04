/** @format */

// const TransactionComponent = ({ transactions }) => {
//   return (
//     <div>
//       {transactions.map(t => (
//         <div key={t.id}>
//           {t.desc}
//           {t.amount}
//         </div>
//       ))}
//     </div>
//   )
// }
// export default TransactionComponent

//session99
// const TransactionComponent = ({ transactions }) => {
//   return (
//     <div>
//       {transactions.length &&
//         transactions.map(t => (
//           <div
//             key={t.id}
//             className='transaction'
//             style={{ borderRight: t.type === 'expense' && '4px solid red' }}
//           >
//             <span>{t.desc}</span>
//             <span>${t.amount}</span>
//           </div>
//         ))}
//     </div>
//   )
// }
// export default TransactionComponent

//100
// import { useState, useEffect } from 'react'
// const TransactionComponent = props => {
//   const [searchItem, setSearchItem] = useState('')
//   const [filteredTnx, setFilteredTnx] = useState(transactions)
//   const filterTransaction = search => {
//     if (!search || search === '') {
//       setFilteredTnx(transactions)
//       return
//     }
//     const filtered = transactions.filter(t =>
//       t.desc.toLowerCase().includes(search.toLowerCase())
//     )
//     setFilteredTnx(filtered)
//   }
//   useEffect(() => {
//     filterTransaction(searchItem)
//   }, [transactions])

//   const changeHandler = e => {
//     setSearchItem(e.target.value)
//     filterTransaction(e.target.value)
//   }
//  if (!props.transactions.length) return <h3>Add Some Tnx</h3>

//   return (
//     <div>
//       <input type='text' onChange={changeHandler} value={searchItem} />

//       {filteredTnx.length
//         ? filteredTnx.map(t => (
//             <div
//               key={t.id}
//               className='transaction'
//               style={{ borderRight: t.type === 'expense' && '4px solid red' }}
//             >
//               <span>{t.desc}</span>
//               <span>${t.amount}</span>
//             </div>
//           ))
//         : 'Add TransAction'}
//     </div>
//   )
// }
// export default TransactionComponent

//100 destructring of transaction
import { useState, useEffect } from 'react'
const TransactionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState('')
  const [filteredTnx, setFilteredTnx] = useState(transactions)
  const filterTransaction = search => {
    if (!search || search === '') {
      setFilteredTnx(transactions)
      return
    }
    const filtered = transactions.filter(t =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredTnx(filtered)
  }
  useEffect(() => {
    filterTransaction(searchItem)
  }, [transactions])

  const changeHandler = e => {
    setSearchItem(e.target.value)
    filterTransaction(e.target.value)
  }
  if (!transactions.length) return <h3>Add Some Tnx</h3>
  return (
    <div>
      <input
        type='text'
        onChange={changeHandler}
        value={searchItem}
        placeholder='Search for Transactions...'
        className='search'
      />

      {filteredTnx.length
        ? filteredTnx.map(t => (
            <div
              key={t.id}
              className='transaction'
              style={{ borderRight: t.type === 'expense' && '4px solid red' }}
            >
              <span>{t.desc}</span>
              <span>${t.amount}</span>
            </div>
          ))
        : 'No Item Matched'}
    </div>
  )
}
export default TransactionComponent
