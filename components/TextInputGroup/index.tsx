import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

// Elements
import { HeadInput, InputGroup, TextError, TextLabel } from '../Elements';

interface inputProps {
  $icon: string | undefined;
}

// Styled Components
const InputText = styled.input<inputProps>`
  font-size: 24px;
  padding: 0.2em 0.6em;
  padding-left: 1.8em;
  width: 100%;
  font-family: 'Space Mono';
  text-align: right;
  -moz-appearance: textfield;
  font-weight: 700;
  outline: none;
  border: 3px solid transparent;
  background-color: hsl(189, 41%, 97%);
  color: hsl(183, 100%, 15%);
  background-repeat: no-repeat;
  background-position: 0.6em 50%;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  ${(props) => {
    switch (props.$icon) {
      case 'dollar':
        return css`
          background-image: url('./icon-dollar.svg');
        `;
      case 'person':
        return css`
          background-image: url('./icon-person.svg');
        `;
      default:
        return css`
          background-image: none;
        `;
    }
  }}

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
`;

// Prop Type
interface propType {
  id: string;
  type: 'number' | 'text';
  placeholder: string;
  labelText: string;
  minimum?: number;
  maximum?: number;
  icon?: string;
  inputChange: (prop: string, value: number) => void;
  step?: number;
}

// Main Component
function TextInputGroup({
  id,
  type,
  placeholder,
  labelText,
  minimum,
  maximum,
  icon,
  inputChange,
  step,
}: propType) {
  const [error, setError] = useState<null | string>(null);

  // Handle On Text Changed
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

  return (
    <InputGroup>
      <HeadInput>
        <TextLabel htmlFor={id}>{labelText}</TextLabel>
        {error ? <TextError>{error}</TextError> : null}
      </HeadInput>
      <InputText
        $icon={icon}
        id={id}
        type={type}
        placeholder={placeholder}
        min={minimum}
        max={maximum}
        onChange={handleChange}
        step={step}
      />
    </InputGroup>
  );
}

export default React.memo(TextInputGroup);
