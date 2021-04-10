import { useCallback } from 'react';
import styled from '@emotion/styled';
import useTransactions from '../hooks/useTransactions';
import { Page, Button, TransactionCard } from '../components';
import { FiPlus } from 'react-icons/fi';
import colors from '../lib/colors';
import dayjs from 'dayjs';

export default function Dashboard() {
  const { transactions } = useTransactions();

  const getTransactions = useCallback(() => {
    let data = transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reverse();

    data = data.reduce((a, b) => {
      const date = dayjs(b.date);
      const group = `${date.get('month')}/01/${date.get('year')}`;
      a[group] = a[group] ? [...a[group], b] : [b];
      return a;
    }, {});

    return (
      <List>
        {Object.keys(data).map((date) => (
          <Group key={date}>
            <GroupDate key={date}>
              {dayjs(date).format('MMM YYYY')}
            </GroupDate>
            <Each>
              {data[date].map((props) => (
                <TransactionCard key={props.id} {...props} />
              ))}
            </Each>
          </Group>
        ))}
      </List>
    );

    ;
  }, [transactions]);

  return (
    <Page title="Dashboard">
      <Actions>
        <Button
          href="/transactions"
          leftIcon={<FiPlus />}
          colorScheme="yellow"
        >
          Add Transaction
        </Button>
      </Actions>
      {transactions.length ? getTransactions() : (
        <Empty>
          No transactions.
        </Empty>
      )}
    </Page>
  );
}

const Actions = styled.div`
  text-align: right;
`;

const List = styled.div`
  margin-top: 2.5rem;
`;

const Group = styled.div`
  margin-top: 2.5rem;
`;

const GroupDate = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.gray500};
  text-align: left;
`;

const Each = styled.div`
  margin-top: 1rem;
`;

const Empty = styled.div`
  font-size: 1.25rem;
  color: ${colors.gray400};
  text-align: center;
`;
