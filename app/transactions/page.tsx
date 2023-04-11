import { createClient } from 'edgedb'

const client = createClient()

type Transaction = {
  id: string
  transaction_date: string
  amount: number
  name: string
  transaction_type: string
}

const query = `select Transaction {
  id,
  transaction_date,
  amount,
  name,
  transaction_type
};
`

export default async function Page() {
  const result = await client.query<Transaction>(query)

  console.log(result)

  return (
    <div>
      {result.map((tx) => (
        <div key={tx.id}>
          <div>{tx.id}</div>
          <div>{tx.transaction_date}</div>
          <div>{tx.amount}</div>
          <div>{tx.name}</div>
          <div>{tx.transaction_type}</div>
        </div>
      ))}
    </div>
  )
}
