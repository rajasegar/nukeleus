import React from 'react';

const SvgCloseIcon = (props) => (
  <svg width={8} height={8} {...props}>
    <defs>
      <path
        d="M9.125 8l2.375 2.375a.796.796 0 0 1-1.125 1.125L8 9.125 5.625 11.5A.796.796 0 0 1 4.5 10.375L6.875 8 4.5 5.625A.796.796 0 0 1 5.625 4.5L8 6.875 10.375 4.5A.796.796 0 0 1 11.5 5.625L9.125 8z"
        id="Close-icon_svg__a"
      />
    </defs>
    <g transform="translate(-4 -4)" fill="none" fillRule="evenodd">
      <mask id="Close-icon_svg__b" fill="#fff">
        <use xlinkHref="#Close-icon_svg__a" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#Close-icon_svg__a" />
      <g mask="url(#Close-icon_svg__b)" fill="#183247">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
);

export default SvgCloseIcon;
