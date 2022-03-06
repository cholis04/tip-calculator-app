import React from 'react';
import styled from 'styled-components';

const HeadingLogo = styled.h1`
  margin: 0 auto;
  margin-top: 4rem;
  color: hsl(183, 100%, 15%);
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 0.5em;
`;

function HeadingOne() {
  return (
    <HeadingLogo>
      SPLI
      <br />
      TTER
    </HeadingLogo>
  );
}

export default HeadingOne;
