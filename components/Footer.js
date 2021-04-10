import styled from '@emotion/styled';
import colors from '../lib/colors';

export default function Footer() {
  return (
    <Container>
      Built with React, Emotion and Next. ❤️
    </Container>
  );
}

const Container = styled.div`
  color: #A0AEC0;
  text-align: center;
`;
