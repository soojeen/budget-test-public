import { createClient } from 'edgedb'
import { getTransactions } from '@/dbschema/queries'
import { Transactions } from './transactions'

export const dynamic = 'auto'

const client = createClient()

type Transaction = Awaited<ReturnType<typeof getTransactions>>[number]

function getTransactionViewModel(transaction: Transaction) {
  return {
    id: transaction.id,
    date: transaction.transaction_date.toString(),
    amount: transaction.amount.toString(),
    name: transaction.name,
  }
}

export default async function Page() {
  const result = await getTransactions(client)
  const transactions = result.map((tx) => getTransactionViewModel(tx))

  return (
    <div>
      <Transactions transactions={transactions} />
    </div>
  )
}
