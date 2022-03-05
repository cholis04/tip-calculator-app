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
  flex-direction: column;
`;

const HeadingLogo = styled.h1`
  margin: 0 auto;
  color: hsl(183, 100%, 15%);
  text-align: center;
  font-size: 1.6em;
  letter-spacing: 0.5em;
`;

const BoxStyled = styled.div`
  margin: 0 auto;
  margin-top: 6rem;
  padding: 1.9em;
  width: 100%;
  max-width: 920px;
  min-height: 360px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 25px;
  box-shadow: 0 5px 25px -6px rgba(0, 0, 0, 0.2);
`;

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
      </Head>

      <MainStyled>
        <HeadingLogo>
          SPLI
          <br />
          TTER
        </HeadingLogo>
        <BoxStyled>This is Box styled</BoxStyled>
      </MainStyled>
    </MainLayout>
  );
};

export default Home;
