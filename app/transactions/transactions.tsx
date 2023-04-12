'use client'

import { TransactionViewModel } from './ui'

type TransactionsProps = {
  transactions: TransactionViewModel[]
}

function Transactions(props: TransactionsProps) {
  return (
    <>
      {props.transactions.map((tx) => (
        <div key={tx.id}>
          <div>{tx.id}</div>
          <div>{tx.date}</div>
          <div>{tx.amount}</div>
          <div>{tx.name}</div>
        </div>
      ))}
    </>
  )
}

export { Transactions }
