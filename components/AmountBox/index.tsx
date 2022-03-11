import React from 'react';

import styled from 'styled-components';

const AmountBoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;
`;

const DetailAmount = styled.div`
  font-size: 24px;
  margin-right: 1rem;
`;

const DetailName = styled.p`
  font-size: 0.7em;
  color: hsl(189, 41%, 97%);
  font-weight: 700;

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      font-size: 0.6em;
    }
  }
`;

const DetailPer = styled.p`
  font-size: 0.6em;
  font-weight: 700;
  color: hsl(184, 14%, 56%);

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      font-size: 0.5em;
    }
  }
`;

const TotalAmount = styled.p`
  font-size: 2em;
  text-align: right;
  font-weight: 700;
  color: hsl(172, 67%, 45%);

  /* Desktop */
  @media only screen and (min-width: 680px) {
    & {
      font-size: 3em;
    }
  }
`;

interface propType {
  amount: number;
  titleComponent: string;
}

// Main Component
function AmountBox({ amount, titleComponent }: propType) {
  const formatCurrency = (amount: number) => {
    const formater = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    return formater.format(amount);
  };

  return (
    <AmountBoxStyled>
      <DetailAmount>
        <DetailName>{titleComponent}</DetailName>
        <DetailPer>/ person</DetailPer>
      </DetailAmount>
      <TotalAmount
        title={`${titleComponent} / person : ${formatCurrency(amount)}`}
        tabIndex={0}
      >
        {amount >= 999999
          ? '$' + amount.toExponential(4)
          : formatCurrency(amount)}
      </TotalAmount>
    </AmountBoxStyled>
  );
}

export default AmountBox;
