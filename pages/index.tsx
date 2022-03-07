import { useEffect, useState } from 'react';

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

const ResultBox = styled.div`
  position: relative;
  background-color: hsl(183, 100%, 15%);
  padding: 1.4em;
  padding-top: 2em;
  border-radius: 12px;
`;

const AmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`;

const DetailAmount = styled.div`
  font-size: 24px;
`;

const DetailName = styled.p`
  font-size: 0.7em;
  color: hsl(189, 41%, 97%);
  font-weight: 700;
`;

const DetailPer = styled.p`
  font-size: 0.6em;
  font-weight: 700;
  color: hsl(184, 14%, 56%);
`;

const TotalAmount = styled.p`
  font-size: 2em;
  text-align: right;
  font-weight: 700;
  color: hsl(172, 67%, 45%);
`;
const ResetButton = styled.input`
  font-size: 18px;
  font-weight: 700;
  font-family: 'Space Mono';
  padding: 0.5em 3em;
  width: 100%;
  text-transform: uppercase;
  color: hsl(183, 100%, 15%);
  background-color: hsl(172, 67%, 45%);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      background-color: hsl(185, 41%, 84%);
    }
  }

  &:active {
    background-color: hsl(185, 41%, 84%);
  }
`;

// Main Component
const Home: NextPage = () => {
  const [bill, setBill] = useState(0);
  const [numpeople, setNumpeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [amountTip, setAmountTip] = useState(0);
  const [amountBill, setAmountBill] = useState(0);

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

  // Track Amount Bill and Tip
  useEffect(() => {
    if (bill && tip && numpeople) {
      const total = bill + bill * (tip / 100);
      setAmountBill(total / numpeople);
      setAmountTip((bill * (tip / 100)) / numpeople);
    } else {
      setAmountBill(0);
      setAmountTip(0);
    }
  }, [bill, tip, numpeople]);

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
                maximum={20}
                step={1}
                icon="person"
                inputChange={inputChange}
              />
            </div>
            <ResultBox>
              <AmountBox>
                <DetailAmount>
                  <DetailName>Tip Amount</DetailName>
                  <DetailPer>/ person</DetailPer>
                </DetailAmount>
                <TotalAmount>${amountTip.toFixed(2)}</TotalAmount>
              </AmountBox>
              <AmountBox>
                <DetailAmount>
                  <DetailName>Total</DetailName>
                  <DetailPer>/ person</DetailPer>
                </DetailAmount>
                <TotalAmount>${amountBill.toFixed(2)}</TotalAmount>
              </AmountBox>
              <ResetButton type="reset" value="Reset" />
            </ResultBox>
          </form>
        </BoxStyled>
      </MainStyled>
    </MainLayout>
  );
};

export default Home;
