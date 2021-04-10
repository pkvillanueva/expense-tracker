import styled from '@emotion/styled';

export default function Flex({ children, justify, align }) {
  return (
    <Container justify={justify} align={align}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
`;
