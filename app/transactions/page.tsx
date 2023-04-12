import { dbClient } from '@/utils/db-client'
import { getTransactions } from '@/dbschema/queries'
import { Transactions } from './transactions'
import { getTransactionViewModel } from './ui'

export const dynamic = 'auto'

export default async function Page() {
  const result = await getTransactions(dbClient)
  const transactions = result.map((tx) => getTransactionViewModel(tx))

  return (
    <div>
      <Transactions transactions={transactions} />
    </div>
  )
}
