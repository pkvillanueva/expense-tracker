import { useSelector, useDispatch } from 'react-redux';

const useWallet = () => {
  const initialBalance = useSelector((state) => state.initialBalance);
  const workingBalance = useSelector((state) => state.workingBalance);
  const dispatch = useDispatch();
  const setInitialBalance = (initialBalance) => dispatch({ type: 'WALLET_INITIAL_BALANCE', initialBalance });
  return { initialBalance, workingBalance, setInitialBalance };
};

export default useWallet;
