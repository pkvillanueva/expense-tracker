import { cloneElement } from 'react';
import styled from '@emotion/styled';
import colors from '../lib/colors';

export default function FormItem({ label, name, children }) {
  return (
    <Container>
      {label && <Label for={name}>{label}</Label>}
      {cloneElement(children, { id: name, name })}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.875rem;
  font-weight: 600;
`;
