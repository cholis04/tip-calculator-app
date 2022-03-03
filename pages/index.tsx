import type { NextPage } from 'next';
import Head from 'next/head';

import styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';

// Styles
const MainStyled = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
      </Head>

      <MainStyled>
        <h1>Hello World</h1>
      </MainStyled>
    </MainLayout>
  );
};

export default Home;
