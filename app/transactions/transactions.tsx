'use client'

type TransactionViewModel = {
  amount: string
  date: string
  id: string
  name: string
}
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
