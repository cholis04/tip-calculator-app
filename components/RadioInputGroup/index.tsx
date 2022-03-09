import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { HeadInput, InputGroup, TextError, TextLabel } from '../Elements';

// Styled Comopnents
const SelectGroup = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const RadioBox = styled.div`
  position: relative;
`;

const LabelRadio = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(183, 100%, 15%);
  color: hsl(0, 0%, 100%);
  font-size: 24px;
  padding: 0.3em 1em;
  font-weight: 700;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: hsl(183, 100%, 15%);
    background-color: hsl(173, 61%, 77%);
  }
`;

const RadioInput = styled.input`
  /* Remove default style */
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  /* Remove default style */

  position: absolute;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;

  &:checked + ${LabelRadio} {
    color: hsl(183, 100%, 15%);
    background-color: hsl(172, 67%, 45%);
  }
`;

const LabelCustomInput = styled.label`
  /* display: block; */
  width: 100%;
`;

const CustomInput = styled.input`
  text-align: right;
  font-size: 24px;
  font-family: 'Space Mono';
  font-weight: 700;
  border-radius: 4px;
  padding: 0 0.8em;
  outline: none;
  width: 100%;
  height: 100%;
  color: hsl(183, 100%, 15%);
  background-color: hsl(189, 41%, 97%);
  border: 3px solid transparent;
  transition: all 0.2s ease-in-out;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: hsl(184, 14%, 56%);
  }

  &:focus {
    border: 3px solid hsl(174, 36%, 63%);
  }

  &:invalid {
    border: 3px solid hsl(8, 58%, 65%);
  }

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      padding: 0 0.5em;
    }
  }
`;

// Prop Type
interface propType {
  id: string;
  name: string;
  type: string;
  setValue: (prop: string, value: string) => void;
  value: string;
}

// Main Component
function RadioInputGroup({ id, name, type, setValue, value }: propType) {
  const [error, setError] = useState<null | string>(null);
  const [customValue, setCustomValue] = useState('');

  const enableCustom = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (Number(value) < 1 && value !== '') {
      setError(`Can't be zero.`);
    } else if (!e.currentTarget.validity.valid) {
      setError(e.currentTarget.validationMessage);
    } else {
      setValue(id, value);
      setError(null);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (/^0/.test(value)) {
      e.currentTarget.value = value.replace(/^0/, '');
    } else {
      if (Number(value) < 1 && value !== '') {
        setError(`Can't be zero.`);
      } else if (!e.currentTarget.validity.valid) {
        setError(e.currentTarget.validationMessage);
      } else {
        setCustomValue(value);
        setValue(id, value);
        setError(null);
      }
    }
  };

  // On Radio Button Change
  const onRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setValue(id, value);
    setError(null);
  };

  // Track Value when Claar / Reset
  useEffect(() => {
    if (value === '') {
      setError(null);
      setCustomValue('');
    }
  }, [value]);

  // Empty Custom input if has a same value
  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (
      value === '5' ||
      value === '10' ||
      value === '15' ||
      value === '25' ||
      value === '50'
    ) {
      setCustomValue('');
      setValue(id, value);
    }
  };

  return (
    <InputGroup>
      <HeadInput>
        <TextLabel id="selecttip">Select Tip %</TextLabel>
        {error ? <TextError role="alert">{error}</TextError> : null}
      </HeadInput>
      <SelectGroup role="radiogroup" aria-labelledby="selecttip">
        <RadioBox>
          <RadioInput
            type={type}
            name={name}
            value="5"
            id="tip5"
            onChange={onRadioChange}
            checked={value === '5'}
          />
          <LabelRadio htmlFor="tip5">5%</LabelRadio>
        </RadioBox>

        <RadioBox>
          <RadioInput
            type={type}
            name={name}
            value="10"
            id="tip10"
            onChange={onRadioChange}
            checked={value === '10'}
          />
          <LabelRadio htmlFor="tip10">10%</LabelRadio>
        </RadioBox>

        <RadioBox>
          <RadioInput
            type={type}
            name={name}
            value="15"
            id="tip15"
            onChange={onRadioChange}
            checked={value === '15'}
          />
          <LabelRadio htmlFor="tip15">15%</LabelRadio>
        </RadioBox>

        <RadioBox>
          <RadioInput
            type={type}
            name={name}
            value="25"
            id="tip25"
            onChange={onRadioChange}
            checked={value === '25'}
          />
          <LabelRadio htmlFor="tip25">25%</LabelRadio>
        </RadioBox>

        <RadioBox>
          <RadioInput
            type={type}
            name={name}
            value="50"
            id="tip50"
            onChange={onRadioChange}
            checked={value === '50'}
          />
          <LabelRadio htmlFor="tip50">50%</LabelRadio>
        </RadioBox>

        <RadioBox>
          <LabelCustomInput>
            <CustomInput
              type="number"
              placeholder="Custom"
              min={1}
              step={0.01}
              max={199}
              onClick={enableCustom}
              onChange={handleChange}
              value={customValue}
              onBlur={handleBlur}
            />
          </LabelCustomInput>
        </RadioBox>
      </SelectGroup>
    </InputGroup>
  );
}

export default React.memo(RadioInputGroup);
