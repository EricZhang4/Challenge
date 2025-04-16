import { FunctionComponent } from "react"
import { Transaction } from "../../utils/types"
import {Dispatch, SetStateAction} from "react"

export type SetTransactionApprovalFunction = (params: {
  transactionId: string
  newValue: boolean
}) => Promise<void>

type TransactionsProps = { transactions: Transaction[] | null }

type TransactionPaneProps = {
  transaction: Transaction
  loading: boolean
  approved?: boolean
  setTransactionApproval: SetTransactionApprovalFunction
  approvedState: { [key: string]: boolean }
  setApprovedState: Dispatch<SetStateAction<{ [key: string]: boolean} >> 
}

export type TransactionsComponent = FunctionComponent<TransactionsProps>
export type TransactionPaneComponent = FunctionComponent<TransactionPaneProps>
