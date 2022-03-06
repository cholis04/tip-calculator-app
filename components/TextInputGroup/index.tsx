import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// Elements
import { TextLabel } from '../Elements';

// Styled Components
const HeadInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextError = styled.span`
  font-weight: 700;
  color: hsl(8, 58%, 65%);
`;

interface inputProps {
  $icon: string | undefined;
}

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
  type: string;
  placeholder: string;
  labelText: string;
  minimum?: number;
  icon?: string;
  inputChange: (prop: string, value: number) => void;
}

// Main Component
function TextInputGroup({
  id,
  type,
  placeholder,
  labelText,
  minimum,
  icon,
  inputChange,
}: propType) {
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (/^(0|\.|\-)/.test(value)) {
      e.currentTarget.value = value.replace(/^(0|\.|\-)/, '');
    } else {
      if (Number(value) < 1 && value !== '') {
        setError(`Can't be zero`);
      } else {
        inputChange(id, Number(value));
        setError(null);
      }
    }
  };

  return (
    <div className="input-group">
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
        onChange={handleChange}
        step={0.000000001}
      />
    </div>
  );
}

export default TextInputGroup;
