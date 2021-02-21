import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const angles = {
  up: 'rotate(180deg)',
  down: 'rotate(0deg)',
  left: 'rotate(90deg)',
  right: 'rotate(-90deg)',
};

const StyledSVG = styled.svg`
  transform: ${({ arrow = 'down' }) => angles[arrow]};
  ${space}
`;

export const Chevron = (props) => {
  return (
    <StyledSVG
      width="12"
      height="12"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.23489 1.05403C1.90679 0.715464 1.37465 0.715285 1.04633 1.05363C0.718016 1.39197 0.717842 1.94072 1.04595 2.27928L4.40551 5.74595C4.73376 6.08467 5.2662 6.08467 5.59446 5.74595L8.95402 2.27928C9.28212 1.94072 9.28195 1.39197 8.95363 1.05363C8.62531 0.715285 8.09317 0.715464 7.76507 1.05403L4.99998 3.90727L2.23489 1.05403Z"
        fill="black"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="10"
        height="6"
      >
        <path
          d="M2.23489 1.05403C1.90679 0.715464 1.37465 0.715285 1.04633 1.05363C0.718016 1.39197 0.717842 1.94072 1.04595 2.27928L4.40551 5.74595C4.73376 6.08467 5.2662 6.08467 5.59446 5.74595L8.95402 2.27928C9.28212 1.94072 9.28195 1.39197 8.95363 1.05363C8.62531 0.715285 8.09317 0.715464 7.76507 1.05403L4.99998 3.90727L2.23489 1.05403Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect x="-1" y="-3" width="12" height="12" fill="#12344D" />
      </g>
    </StyledSVG>
  );
};
