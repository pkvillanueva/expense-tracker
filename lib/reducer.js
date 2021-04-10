import SnowflakeId from 'snowflake-id';
import computeWorkingBalance from './computeWorkingBalance';

const snowflake = new SnowflakeId({
  mid: 42,
  offset: (2021 - 1970) * 31536000 * 1000,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WALLET_INITIAL_BALANCE':
      return {
        ...state,
        initialBalance: parseInt(action.initialBalance, 10),
        workingBalance: computeWorkingBalance(action.initialBalance, state.transactions),
      };
    case 'TRANSACTION_SAVE': {
      const data = !action.transaction.id
        ? [...state.transactions, { id: snowflake.generate(), ...action.transaction }]
        : state.transactions.map((transaction) => transaction.id === action.transaction.id ? action.transaction : transaction);

      return {
        ...state,
        transactions: data,
        workingBalance: computeWorkingBalance(state.initialBalance, data),
      };
    }
    case 'TRANSACTION_REMOVE': {
      const data = state.transactions.filter(({ id }) => id !== action.id);

      return {
        ...state,
        transactions: data,
        workingBalance: computeWorkingBalance(state.initialBalance, data),
      };
    }
    default:
      return state
  }
};

export default reducer;
