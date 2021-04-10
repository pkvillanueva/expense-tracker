import styled from '@emotion/styled';
import Link from 'next/link';
import Card from './Card';
import Flex from './Flex';
import colors from '../lib/colors';
import categories from '../lib/categories';
import currency from '../lib/currency';
import dayjs from 'dayjs';

export default function TransactionCard({ id, amount = 0, note, date, category }) {
  return (
    <Link href={`/transactions/${id}`}>
      <a>
        <Container>
          <Flex align="center" justify="space-between">
            <Left>
              <Date>{dayjs(date).format('DD')}</Date>
              <div>
                <Category>{categories[category]}</Category>
                {note && <Note>{note}</Note>}
              </div>
            </Left>
            <Amount category={category}>
              {category === 'expense' ? '-' : '+'}
              {currency(amount)}
            </Amount>
          </Flex>
        </Container>
      </a>
    </Link>
  )
};

const Container = styled(Card)`
  margin-bottom: 0.25rem;
  cursor: pointer;

  :hover {
    background-color: ${colors.purple50};
  }
`;

const Category = styled.div`
  font-size: 1rem;
`;

const Note = styled.div`
  margin-top: 0.5rem;
  color: ${colors.gray400};
  font-size: 0.875rem;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.div`
  margin-right: 1rem;
  padding-right: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  border-right: 1px solid ${colors.gray200};
`;

const Amount = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ category }) => category === 'expense' ? '#E53E3E' : '#38A169'};
`;
