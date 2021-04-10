import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { FiEdit2 } from 'react-icons/fi';
import Card from './Card';
import Flex from './Flex';
import Button from './Button';
import Input from './Input';
import currency from '../lib/currency';
import useWallet from '../hooks/useWallet';
import colors from '../lib/colors';
import dayjs from 'dayjs';

export default function Wallet() {
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const { initialBalance, workingBalance, setInitialBalance } = useWallet();

  useEffect(
    () => {
      if (isEditing) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    },
    [inputRef, isEditing]
  );

  return (
    <Card fgColor="#ffffff" bgColor="#1a202c">
      <Flex align="center" justify="space-between">
        <Text>Wallet Balance</Text>
        <Text>{dayjs().format('MMM DD, YYYY')}</Text>
      </Flex>
      <Overview>
        <Flex align="flex-end" justify="space-between">
          {!isEditing ? (
            <Balance onDoubleClick={() => setIsEditing(true)}>
              <Amount>{currency(workingBalance)}</Amount>
              <Button
                leftIcon={<FiEdit2 />}
                variant="text"
                colorScheme="yellow"
                onClick={() => setIsEditing(true)}
              />
            </Balance>
          ) : (
            <Balance>
              <InputBalance
                type="number"
                ref={inputRef}
                value={initialBalance}
                onChange={(event) => setInitialBalance(event.target.value)}
                onKeyUp={(event) => event.keyCode === 13 && setIsEditing(false)}
                onBlur={() => setIsEditing(false)}
              />
            </Balance>
          )}
          <Unit>USD</Unit>
        </Flex>
      </Overview>
    </Card>
  );
}

const Text = styled.div`
  color: #CBD5E0;
`;

const Overview = styled.div`
  margin: 3rem 0 0;
`;

const Balance = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const Amount = styled.div`
  flex-shrink: 1;
  overflow: hidden;
  max-width: 70%;
  white-space: nowrap;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  margin-right: 0.5rem;
`;

const Unit = styled(Text)`
  margin-left: 0.5rem;
`;

const InputBalance = styled(Input)`
  color: ${colors.white};
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: 1px;
  height: 2rem;
  border: none;
  border-radius: 0;
  -moz-appearance: textfield;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
