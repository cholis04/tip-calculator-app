import React, { useRef } from 'react';
import styled from 'styled-components';

import { InputGroup, TextLabel } from '../Elements';

// Styled Comopnents
const SelectGroup = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  /* 
  background-color:hsl(172, 67%, 45%)
  background-color:hsl(183, 100%, 15%)
  background-color:hsl(186, 14%, 43%)
  background-color:hsl(184, 14%, 56%)
  background-color:hsl(185, 41%, 84%)
  background-color:hsl(189, 41%, 97%)
  */
`;

const LabelRadio = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(183, 100%, 15%);
  color: hsl(0, 0%, 100%);
  font-size: 24px;
  padding: 0.2em 2.2em;
  font-weight: 700;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:last-child {
    background-color: hsl(189, 41%, 97%);
    padding: 0.1em;
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
  padding: 0.1em 0.6em;
  border: none;
  outline: none;
  width: 100%;
  color: hsl(183, 100%, 15%);
  background-color: hsl(189, 41%, 97%);

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
    inputChange(id, Number(value));

    if (radioCustomRef.current !== null) {
      radioCustomRef.current.checked = true;
    }
  };

  const disableCustom = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    inputChange(id, Number(value));
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    inputChange(id, Number(value));
  };

  // Check if Value equal with Radio Buttons
  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);

    if (value === 5) {
      if (radio5Ref.current !== null && inputCustomRef.current !== null) {
        radio5Ref.current.checked = true;
        inputCustomRef.current.value = '';
      }
    }

    if (value === 10) {
      if (radio10Ref.current !== null && inputCustomRef.current !== null) {
        radio10Ref.current.checked = true;
        inputCustomRef.current.value = '';
      }
    }

    if (value === 15) {
      if (radio15Ref.current !== null && inputCustomRef.current !== null) {
        radio15Ref.current.checked = true;
        inputCustomRef.current.value = '';
      }
    }

    if (value === 25) {
      if (radio25Ref.current !== null && inputCustomRef.current !== null) {
        radio25Ref.current.checked = true;
        inputCustomRef.current.value = '';
      }
    }

    if (value === 50) {
      if (radio50Ref.current !== null && inputCustomRef.current !== null) {
        radio50Ref.current.checked = true;
        inputCustomRef.current.value = '';
      }
    }
  };

  return (
    <InputGroup>
      <TextLabel>Select Tip %</TextLabel>
      <SelectGroup>
        <RadioInput
          type={type}
          name={name}
          value="5"
          id="tip5"
          onChange={handleChange}
          onClick={disableCustom}
          ref={radio5Ref}
        />
        <LabelRadio htmlFor="tip5">5%</LabelRadio>
        <RadioInput
          type={type}
          name={name}
          value="10"
          id="tip10"
          onChange={handleChange}
          onClick={disableCustom}
          ref={radio10Ref}
        />
        <LabelRadio htmlFor="tip10">10%</LabelRadio>
        <RadioInput
          type={type}
          name={name}
          value="15"
          id="tip15"
          onChange={handleChange}
          onClick={disableCustom}
          ref={radio15Ref}
        />
        <LabelRadio htmlFor="tip15">15%</LabelRadio>
        <RadioInput
          type={type}
          name={name}
          value="25"
          id="tip25"
          onChange={handleChange}
          onClick={disableCustom}
          ref={radio25Ref}
        />
        <LabelRadio htmlFor="tip25">25%</LabelRadio>
        <RadioInput
          type={type}
          name={name}
          value="50"
          id="tip50"
          onChange={handleChange}
          onClick={disableCustom}
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
            onClick={enableCustom}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={inputCustomRef}
          />
        </LabelRadio>
      </SelectGroup>
    </InputGroup>
  );
}

export default RadioInputGroup;
