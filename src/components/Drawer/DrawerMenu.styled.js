import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: ${({ isCoditionDrawer }) =>
    isCoditionDrawer ? 'calc(100vh - 125px)' : '100vh'};
  text-align: left;
  position: absolute;
  top: ${({ isCoditionDrawer }) => (isCoditionDrawer ? '125px' : '0')};
  right: ${({ isCoditionDrawer }) => (isCoditionDrawer ? '10px' : '0')};
  z-index: 99999999;
  transition: transform 0.3s ease-in-out;
  min-width: ${({ isCoditionDrawer }) =>
    isCoditionDrawer ? '648px' : '364px'};
  border: 1px solid #ebeff3;
  @media (max-width: 576px) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #343078;
    }
  }
  .drawer-close-icon {
    ${({ isCoditionDrawer }) => (isCoditionDrawer ? 'display:none' : '')};
    position: absolute;
    z-index: 999999999999;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }
`;
