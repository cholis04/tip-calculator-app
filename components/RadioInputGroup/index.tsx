import React, { useRef, useState } from 'react';
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

const LabelRadio = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(183, 100%, 15%);
  color: hsl(0, 0%, 100%);
  font-size: 24px;
  padding: 0.2em 1em;
  font-weight: 700;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: hsl(183, 100%, 15%);
    background-color: hsl(173, 61%, 77%);
  }

  &:last-child {
    background-color: hsl(189, 41%, 97%);
    padding: 0em;
  }
`;

const RadioInput = styled.input`
  display: none;

  &:checked + ${LabelRadio} {
    color: hsl(183, 100%, 15%);
    background-color: hsl(172, 67%, 45%);
  }
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
  inputChange: (prop: string, value: number) => void;
}

// Main Component
function RadioInputGroup({ id, name, type, inputChange }: propType) {
  const [error, setError] = useState<null | string>(null);
  // Custom Input Ref
  const inputCustomRef = useRef<HTMLInputElement>(null);

  // Radio Input Ref
  const radioCustomRef = useRef<HTMLInputElement>(null);
  const radio5Ref = useRef<HTMLInputElement>(null);
  const radio10Ref = useRef<HTMLInputElement>(null);
  const radio15Ref = useRef<HTMLInputElement>(null);
  const radio25Ref = useRef<HTMLInputElement>(null);
  const radio50Ref = useRef<HTMLInputElement>(null);

  const enableCustom = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (/^0/.test(value)) {
      e.currentTarget.value = value.replace(/^0/, '');
    } else {
      if (Number(value) < 1 && value !== '') {
        setError(`Can't be zero.`);
      } else if (!e.currentTarget.validity.valid) {
        setError(e.currentTarget.validationMessage);
      } else {
        inputChange(id, Number(value));
        setError(null);
      }
    }

    if (radioCustomRef.current !== null) {
      radioCustomRef.current.checked = true;
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
        inputChange(id, Number(value));
        setError(null);
      }
    }
  };

  // On Radio Button Change
  const onRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (/^0/.test(value)) {
      e.currentTarget.value = value.replace(/^0/, '');
    } else {
      if (Number(value) < 1 && value !== '') {
        setError(`Can't be zero.`);
      } else if (!e.currentTarget.validity.valid) {
        setError(e.currentTarget.validationMessage);
      } else {
        inputChange(id, Number(value));
        setError(null);
      }
    }

    // Empty Input Custom Value When is Error
    if (inputCustomRef.current !== null && error !== null) {
      inputCustomRef.current.value = '';
    }
  };

  // Check if Value equal with Radio Buttons
  const handleBlurCustom = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    const customRefNotNull = inputCustomRef.current !== null;

    switch (value) {
      case 5:
        if (radio5Ref.current !== null && customRefNotNull) {
          radio5Ref.current.checked = true;
          inputCustomRef.current.value = '';
        }
        break;
      case 10:
        if (radio10Ref.current !== null && customRefNotNull) {
          radio10Ref.current.checked = true;
          inputCustomRef.current.value = '';
        }
        break;
      case 15:
        if (radio15Ref.current !== null && customRefNotNull) {
          radio15Ref.current.checked = true;
          inputCustomRef.current.value = '';
        }
        break;
      case 25:
        if (radio25Ref.current !== null && customRefNotNull) {
          radio25Ref.current.checked = true;
          inputCustomRef.current.value = '';
        }
        break;
      case 50:
        if (radio50Ref.current !== null && customRefNotNull) {
          radio50Ref.current.checked = true;
          inputCustomRef.current.value = '';
        }
        break;
    }
  };

  return (
    <InputGroup>
      <HeadInput>
        <TextLabel>Select Tip %</TextLabel>
        {error ? <TextError>{error}</TextError> : null}
      </HeadInput>
      <SelectGroup>
        <RadioInput
          type={type}
          name={name}
          value="5"
          id="tip5"
          onClick={onRadioChange}
          ref={radio5Ref}
        />
        <LabelRadio htmlFor="tip5">5%</LabelRadio>
        <RadioInput
          type={type}
          name={name}
          value="10"
          id="tip10"
          onClick={onRadioChange}
          ref={radio10Ref}
        />
        <LabelRadio htmlFor="tip10">10%</LabelRadio>
        <RadioInput
          type={type}
          name={name}
          value="15"
          id="tip15"
          onClick={onRadioChange}
          ref={radio15Ref}
        />
        <LabelRadio htmlFor="tip15">15%</LabelRadio>
        <RadioInput
          type={type}
          name={name}
          value="25"
          id="tip25"
          onClick={onRadioChange}
          ref={radio25Ref}
        />
        <LabelRadio htmlFor="tip25">25%</LabelRadio>
        <RadioInput
          type={type}
          name={name}
          value="50"
          id="tip50"
          onClick={onRadioChange}
          ref={radio50Ref}
        />
        <LabelRadio htmlFor="tip50">50%</LabelRadio>

        <RadioInput
          type={type}
          name={name}
          value="custom"
          id="tipCustom"
          ref={radioCustomRef}
        />
        <LabelRadio>
          <CustomInput
            type="number"
            placeholder="Custom"
            min={1}
            step={0.01}
            max={999}
            onClick={enableCustom}
            onChange={handleChange}
            onBlur={handleBlurCustom}
            ref={inputCustomRef}
          />
        </LabelRadio>
      </SelectGroup>
    </InputGroup>
  );
}

export default React.memo(RadioInputGroup);
