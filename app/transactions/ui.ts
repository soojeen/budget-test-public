import { getTransactions } from '@/dbschema/queries'

export type Transaction = Awaited<ReturnType<typeof getTransactions>>[number]

function getTransactionViewModel(transaction: Transaction) {
  return {
    id: transaction.id,
    date: transaction.transaction_date.toString(),
    amount: transaction.amount.toString(),
    name: transaction.name,
  }
}

export type TransactionViewModel = ReturnType<typeof getTransactionViewModel>

export { getTransactionViewModel }
