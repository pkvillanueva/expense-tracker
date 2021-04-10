import styled from '@emotion/styled';

export default function Main({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  margin-bottom: 2rem;
`;
