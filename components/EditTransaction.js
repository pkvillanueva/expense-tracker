import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import Card from './Card';
import FormItem from './FormItem';
import Button from './Button';
import Input, { Textarea, Select } from './Input';
import useTransactions from '../hooks/useTransactions';
import categories from '../lib/categories';
import { useRouter } from 'next/router';

export default function EditTransaction() {
  const router = useRouter();
  const { transactions, saveTransaction, removeTransaction } = useTransactions();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const editTransaction = transactions.find(({ id }) => router.query.id === id) || {};

  const onSubmit = transaction => {
    const newTransaction = { ...transaction };
    if (router.query.id) newTransaction.id = router.query.id;
    saveTransaction(newTransaction);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <FormItem name="amount" label="Enter amount">
          <Input
            defaultValue={editTransaction.amount}
            error={!!errors.amount}
            type="number"
            {...register('amount', { required: true })}
          />
        </FormItem>
        <FormItem name="note" label="Note">
          <Textarea defaultValue={editTransaction.note} {...register('note')} />
        </FormItem>
        <FormItem name="date" label="Date">
          <Input
            defaultValue={editTransaction.date}
            error={!!errors.date}
            type="date"
            {...register('date', { required: true })}
          />
        </FormItem>
        <FormItem name="category" label="Category">
          <Select
            {...register('category', { required: true })}
            defaultValue={editTransaction.category}
            error={!!errors.category}
            options={Object.keys(categories).reduce((acc, cur) => {
              acc.push({ value: cur, label: categories[cur] });
              return acc;
            }, [])}
          />
        </FormItem>
      </Card>
      <Submit>
        <Button href="/" Scheme="yellow">
          Cancel
        </Button>
        <RightActions>
          {router.query.id && (
            <Delete>
              <Button type="button" onClick={() => removeTransaction(router.query.id)}>
                Delete
              </Button>
            </Delete>
          )}
          <Button type="submit" colorScheme="yellow">
            Save Transaction
          </Button>
        </RightActions>
      </Submit>
    </form>
  );
};

const Submit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
`;

const Delete = styled.div`
  margin-right: 10px;
`;
