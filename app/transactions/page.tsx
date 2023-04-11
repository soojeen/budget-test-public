import { createClient } from 'edgedb'
import { getTransactions } from '@/dbschema/queries'

const client = createClient()

export default async function Page() {
  const result = await getTransactions(client)

  return (
    <div>
      {result.map((tx) => (
        <div key={tx.id}>
          <div>{tx.id}</div>
          <div>{tx.transaction_date.toString()}</div>
          <div>{tx.amount}</div>
          <div>{tx.name}</div>
          <div>{tx.transaction_type}</div>
        </div>
      ))}
    </div>
  )
}
