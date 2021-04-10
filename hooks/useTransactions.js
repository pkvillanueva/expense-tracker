import { useSelector, useDispatch } from 'react-redux';

const useTransactions = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const saveTransaction = (transaction) => dispatch({ type: 'TRANSACTION_SAVE', transaction });
  const removeTransaction = (id) => dispatch({ type: 'TRANSACTION_REMOVE', id });
  return { transactions, saveTransaction, removeTransaction };
};

export default useTransactions;
