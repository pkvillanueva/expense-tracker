import styled from '@emotion/styled';

export default function Card({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
};

export const Container = styled.div`
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 0.5rem;
  background-color: ${props => props.bgColor || '#ffffff'};
  color: ${props => props.fgColor || '#1a202c'};
`;
