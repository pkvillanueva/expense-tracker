import styled from '@emotion/styled';

export default function Heading({ size = 1, children }) {
  return (
    <Element as={`h${size}`}>
      {children}
    </Element>
  );
}

const Element = styled.div``;
