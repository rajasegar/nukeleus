import React from 'react';
import InfoIcon from '../../images/svg/InfoChannel.js';
import styled from 'styled-components';

const Wrap = styled.div`
  background: ${(props) => (props.warning ? '#ffecf0' : '#e5f2fd')};
  border: 1px solid ${(props) => (props.warning ? '#ffd0d6' : '#bbdcfe')};
  border-radius: 4px;
  padding: 8px;
  margin: 20px 0 12px 0;
  color: ${(props) => (props.warning ? '#d72d30' : '#183247')};

  svg {
    path {
      fill: ${(props) => (props.warning ? '#d72d30' : '#183247')};
    }
  }

  .message-label-info {
    display: flex;
    align-items: center;
    .message-form-subtitle {
      padding-left: 8px;
      padding-right: 20px;
    }
  }
`;

export default function AlertMessage({ children, warning = false }) {
  return (
    <Wrap warning={warning}>
      <div className="message-label-info">
        <InfoIcon />
        <p className="message-form-subtitle">{children}</p>
      </div>
    </Wrap>
  );
}
