import { Transactions } from './transactions'
import { getTransactionViewModels } from './data'

export const dynamic = 'auto'

export default async function Page() {
  const transactions = await getTransactionViewModels()

  return <Transactions transactions={transactions} />
}
