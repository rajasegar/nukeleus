import React from 'react';
import styled from 'styled-components';
import { StyledSVG } from './Icons.styled';

const angles = {
  up: 'rotate(180deg)',
  down: 'rotate(0deg)',
};

const StyledSVGWithTransform = styled(StyledSVG)`
  transform: ${({ angle = 'down' }) => angles[angle]};
`;

export const Archive = (props) => {
  return (
    <StyledSVGWithTransform
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M15.044 14.9435C16.0242 13.9657 16.6924 12.7193 16.9643 11.3618C17.2361 10.0043 17.0993 8.59661 16.5711 7.31686C16.0429 6.0371 15.1471 4.94271 13.9969 4.17208C12.8467 3.40144 11.4939 2.98918 10.1094 2.98742C8.72494 2.98566 7.37105 3.39448 6.21892 4.16219C5.0668 4.92989 4.16821 6.022 3.63677 7.30041C3.10533 8.57882 2.96491 9.9861 3.23328 11.3443C3.50165 12.7025 4.16675 13.9507 5.14447 14.9309C6.45556 16.2453 8.23509 16.985 10.0916 16.9874C11.9481 16.9898 13.7295 16.2545 15.044 14.9435ZM6.02217 5.89868C6.83084 5.09206 7.86055 4.54335 8.98107 4.32195C10.1016 4.10055 11.2626 4.21639 12.3173 4.65482C13.372 5.09326 14.273 5.8346 14.9063 6.7851C15.5397 7.7356 15.877 8.85257 15.8755 9.99476C15.8741 11.1369 15.5339 12.253 14.8982 13.2019C14.2624 14.1508 13.3595 14.8899 12.3037 15.3256C11.2479 15.7614 10.0866 15.8743 8.96666 15.65C7.84671 15.4258 6.8184 14.8744 6.01178 14.0658C4.93228 12.9802 4.32718 11.511 4.32913 9.98007C4.33108 8.44916 4.9399 6.98146 6.02217 5.89868Z"
          fill="#12344D"
        />
        <path
          d="M9.63335 13.4894C9.59541 13.4573 9.56027 13.4221 9.5283 13.3841L7.39644 11.2468C7.28172 11.1317 7.21739 10.9759 7.21759 10.8134C7.2178 10.651 7.28253 10.4953 7.39754 10.3806C7.51255 10.2658 7.66843 10.2015 7.83087 10.2017C7.99332 10.2019 8.14903 10.2666 8.26375 10.3817L9.35131 11.472L9.33843 6.99863C9.33772 6.91715 9.35327 6.83635 9.38418 6.76096C9.41509 6.68557 9.46072 6.6171 9.51842 6.55957C9.57499 6.50266 9.64263 6.45797 9.71717 6.42827C9.7917 6.39857 9.87154 6.38448 9.95174 6.38688C10.0336 6.38493 10.1149 6.39963 10.1909 6.43009C10.2668 6.46056 10.3358 6.50614 10.3936 6.56408C10.4514 6.62203 10.4968 6.69111 10.5271 6.76715C10.5573 6.84318 10.5718 6.92457 10.5697 7.00638L10.564 11.4983L11.6543 10.4107C11.7693 10.296 11.9252 10.2317 12.0876 10.2319C12.2501 10.2321 12.4058 10.2968 12.5205 10.4118C12.6352 10.5268 12.6995 10.6827 12.6993 10.8451C12.6991 11.0076 12.6344 11.1633 12.5194 11.278L10.3821 13.4099C10.35 13.4478 10.3148 13.483 10.2768 13.5149L10.2148 13.5767C10.0641 13.6381 9.89522 13.6379 9.74461 13.5761C9.74461 13.5761 9.65808 13.5018 9.63335 13.4894Z"
          fill="#12344D"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(20 10) rotate(135.073)"
          />
        </clipPath>
      </defs>
    </StyledSVGWithTransform>
  );
};
