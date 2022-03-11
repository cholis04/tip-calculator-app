import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import AmountBox from '../AmountBox';
import RadioInputGroup from '../RadioInputGroup';
import TextInputGroup from '../TextInputGroup';

// Styled Component
const FormTip = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      grid-template-columns: 1fr 1fr;
      column-gap: 2em;
    }
  }
`;

const FormInputArea = styled.div`
  padding: 0;

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      padding: 0.8em;
    }
  }
`;

const ResultBox = styled.div`
  position: relative;
  background-color: hsl(183, 100%, 15%);
  padding: 1.4em;
  padding-top: 2em;
  border-radius: 12px;

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      padding: 2.4em;
      padding-top: 3em;
    }
  }
`;

const ResetButton = styled.input`
  font-size: 20px;
  font-weight: 700;
  font-family: 'Space Mono';
  padding: 0.5em 3em;
  width: 100%;
  text-transform: uppercase;
  color: hsl(183, 100%, 15%);
  background-color: hsl(172, 67%, 45%);
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      background-color: hsl(173, 61%, 77%);
    }
  }

  &:active {
    background-color: hsl(185, 41%, 84%);
  }

  &:disabled {
    color: hsl(184, 92%, 20%);
    background-color: hsl(184, 82%, 24%);
    cursor: not-allowed;
  }

  &:focus {
    outline: 3px solid hsl(185, 41%, 84%);
  }

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      width: 80%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 2em;
    }
  }
`;

// Main Component
function FormSplitter() {
  const [resetDisabled, setResetDisabled] = useState(true);
  const [bill, setBill] = useState('');
  const [numpeople, setNumpeople] = useState('');
  const [tip, setTip] = useState('');
  const [amountTip, setAmountTip] = useState(0);
  const [amountBill, setAmountBill] = useState(0);

  // Set Maximum Values
  const maxTip = 500;
  const maxPeople = 1000000;

  const inputChange = useCallback((prop: string, value: string) => {
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
      default:
        break;
    }
  }, []);

  // On Reset Form
  const resetForm = () => {
    setBill('');
    setNumpeople('');
    setTip('');
  };

  // Track Amount Bill and Tip
  useEffect(() => {
    if (bill && tip && numpeople) {
      const FixBill = Number(bill);
      const FixTip = Number(tip);
      const FixNumpeople = Number(numpeople);
      const total = FixBill + FixBill * (FixTip / 100);

      const noZeroValues = FixBill > 0 && FixTip > 0 && FixNumpeople > 0;

      if (FixTip <= maxTip && FixNumpeople <= maxPeople && noZeroValues) {
        setAmountBill(total / FixNumpeople);
        setAmountTip((FixBill * (FixTip / 100)) / FixNumpeople);
      }
    } else {
      setAmountBill(0);
      setAmountTip(0);
    }

    if (bill || tip || numpeople) {
      setResetDisabled(false);
    } else {
      setResetDisabled(true);
    }
  }, [bill, tip, numpeople]);

  return (
    <FormTip name="calculator" onReset={resetForm}>
      <FormInputArea>
        <TextInputGroup
          id="bill"
          labelText="Bill"
          placeholder="0"
          minimum={1}
          step={0.01}
          type="number"
          icon="dollar"
          value={bill}
          setValue={inputChange}
        />
        <RadioInputGroup
          name="tip"
          type="radio"
          id="tip"
          value={tip}
          maximum={maxTip}
          setValue={inputChange}
        />
        <TextInputGroup
          id="numpeople"
          labelText="Number Of People"
          placeholder="0"
          type="number"
          minimum={1}
          maximum={maxPeople}
          step={1}
          value={numpeople}
          icon="person"
          setValue={inputChange}
        />
      </FormInputArea>
      <ResultBox>
        <AmountBox amount={amountTip} titleComponent="Tip Amount" />
        <AmountBox amount={amountBill} titleComponent="Total" />
        <ResetButton type="reset" value="Reset" disabled={resetDisabled} />
      </ResultBox>
    </FormTip>
  );
}

export default React.memo(FormSplitter);
