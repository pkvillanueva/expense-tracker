import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { FiArrowLeft } from 'react-icons/fi';
import { Button } from '../components';
import Wallet from './Wallet';

export default function Header() {
  const router = useRouter();

  return (
    <Container>
      {router.pathname !== '/' && (
        <Nav>
          <Button
            variant="text"
            colorScheme="purple"
            leftIcon={<FiArrowLeft />}
            href="/"
          >
            Back
          </Button>
        </Nav>
      )}
      <Wallet />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const Nav = styled.div`
  position: absolute;
  top: 0;
  right: 100%;
  display: flex;
  align-items: center;
  margin: 1rem 2rem 0 0;
`;
