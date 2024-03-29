import styled from 'styled-components';

export const TextLabel = styled.label`
  display: block;
  color: hsl(186, 14%, 43%);
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.7rem;

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      margin: 0;
    }

    &:nth-child(2) {
      margin: 2.2rem auto;
    }
  }
`;

export const HeadInput = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TextError = styled.span`
  font-weight: 700;
  color: hsl(8, 58%, 65%);
  margin-bottom: 0.5rem;
`;
