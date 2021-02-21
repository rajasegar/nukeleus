import React from 'react';
import { StyledSVG } from './Icons.styled';

export const Copy = (props) => {
  return (
    <StyledSVG
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.7 11.41H1.56V11.4C1.9466 11.4 2.26 11.0866 2.26 10.7C2.26 10.3134 1.9466 10 1.56 10H1.4V1.4H9.15V1.56C9.15 1.9466 9.4634 2.26 9.85 2.26C10.2366 2.26 10.55 1.9466 10.55 1.56V0.7C10.55 0.313401 10.2366 0 9.85 0H0.7C0.313401 0 0 0.313401 0 0.7V10.71C0 11.0966 0.313401 11.41 0.7 11.41ZM4.15 14H13.3C13.6866 14 14 13.6866 14 13.3V4.15C14 3.7634 13.6866 3.45 13.3 3.45H4.15C3.76565 3.45538 3.45538 3.76565 3.45 4.15V13.3C3.45 13.6866 3.7634 14 4.15 14ZM12.6 12.6H4.85V4.85H12.6V12.6Z"
        fill="#12344D"
      />
    </StyledSVG>
  );
};
