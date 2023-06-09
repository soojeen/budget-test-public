'use client'

import { TransactionViewModel } from './data'
import { Button } from '@adobe/react-spectrum'

type TransactionsProps = {
  transactions: TransactionViewModel[]
}

function Transactions(props: TransactionsProps) {
  return (
    <div>
      {props.transactions.map((tx) => (
        <div key={tx.id}>
          <div>{tx.id}</div>
          <div>{tx.date}</div>
          <div>{tx.amount}</div>
          <div>{tx.name}</div>
        </div>
      ))}
      <Button variant="primary" onPress={() => console.log('clicked')}>
        click here
      </Button>
    </div>
  )
}

export { Transactions }
