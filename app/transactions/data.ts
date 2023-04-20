import { getTransactions } from '@/dbschema/queries'
import { dbClient } from '@/utils/db-client'

export type Transaction = Awaited<ReturnType<typeof getTransactions>>[number]

function toViewModel(transaction: Transaction) {
  return {
    id: transaction.id,
    date: transaction.transaction_date.toString(),
    amount: transaction.amount.toString(),
    name: transaction.name,
  }
}

export type TransactionViewModel = ReturnType<typeof toViewModel>

async function getTransactionViewModels() {
  const result = await getTransactions(dbClient)
  return result.map((tx) => toViewModel(tx))
}

export { getTransactionViewModels }
