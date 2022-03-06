import { useState } from 'react';

import type { NextPage } from 'next';

import Head from 'next/head';
import styled from 'styled-components';

import MainLayout from '../layouts/MainLayout';
import HeadingOne from '../components/heading';
import TextInputGroup from '../components/TextInputGroup';

import RadioInputGroup from '../components/RadioInputGroup';

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
`;

// Main Component
const Home: NextPage = () => {
  const [bill, setBill] = useState(0);
  const [numpeople, setNumpeople] = useState(0);
  const [tip, setTip] = useState(0);

  const inputChange = (prop: string, value: number) => {
    switch (prop) {
      case 'bill':
        setBill(value);
        break;
      case 'numpeople':
        setNumpeople(value);
        break;
      case 'tip':
        setTip(value);
        break;
    }
  };

  // On Reset Form
  const resetForm = () => {
    setBill(0);
    setNumpeople(0);
    setTip(0);
  };

  return (
    <MainLayout>
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
      </Head>

      <MainStyled>
        <HeadingOne />
        <BoxStyled>
          <form name="calculator" onReset={resetForm}>
            <div className="input-form">
              <TextInputGroup
                id="bill"
                labelText="Bill"
                placeholder="0"
                minimum={1}
                step={0.01}
                type="number"
                icon="dollar"
                inputChange={inputChange}
              />
              <RadioInputGroup
                name="tip"
                type="radio"
                id="tip"
                inputChange={inputChange}
              />
              <TextInputGroup
                id="numpeople"
                labelText="Number Of People"
                placeholder="0"
                type="number"
                minimum={1}
                step={1}
                icon="person"
                inputChange={inputChange}
              />
            </div>
            <div className="preview-data">
              <p>{bill}</p>
              <p>{tip}%</p>
              <p>{numpeople}</p>
              <input type="reset" value="Reset" />
            </div>
          </form>
        </BoxStyled>
      </MainStyled>
    </MainLayout>
  );
};

export default Home;
