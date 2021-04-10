export default function(initialBalance, data) {
  return data.reduce((acc, { amount, category }) => {
    return acc + (category === 'expense' ? -Math.abs(parseInt(amount, 10)) : parseInt(amount, 10));
  }, parseInt(initialBalance, 10));
}
