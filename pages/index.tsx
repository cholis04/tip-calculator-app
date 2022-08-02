import type { NextPage } from 'next';

import Head from 'next/head';
import styled from 'styled-components';

import MainLayout from '../layouts/MainLayout';
import HeadingOne from '../components/heading';
import FormSplitter from '../components/FormSplitter';

// Styles
const MainStyled = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      margin-top: 4.7rem;
    }
  }
`;

const BoxStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1.9em;
  width: 100%;
  max-width: 920px;
  min-height: 360px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 25px;
  box-shadow: 0 5px 25px -6px rgba(0, 0, 0, 0.2);

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      margin-top: 5rem;
      padding: 1.9em 2.2em;
    }
  }
`;

// Main Component
const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
      </Head>

      {/* Component */}
      <MainStyled>
        <HeadingOne />
        <BoxStyled>
          <FormSplitter />
        </BoxStyled>
      </MainStyled>
      {/* Component */}
    </MainLayout>
  );
};

export default Home;
