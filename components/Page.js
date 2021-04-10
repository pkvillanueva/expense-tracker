import Head from 'next/head';
import styled from '@emotion/styled';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Page({ title, children }) {
  return (
    <Container>
      <Head>
        <title>Expense Tracker - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 5rem 2rem;
`;
