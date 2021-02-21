import React from 'react';
import styled from 'styled-components';
import ChevronNext from '../../images/svg/ChevronNext';

const BreadCrumbWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BreadcrumbItem = styled.li`
  padding-right: 6px;
  a {
    padding-right: 6px;
  }
  span {
    position: relative;
    top: 1px;
  }
`;

let mainItem = {
  title: 'test',
};

export default function Breadcrumb() {
  if (!mainItem && mainItem.title) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb">
      <BreadCrumbWrapper>
        <BreadcrumbItem>
          <a href="">Home</a>
          <span>
            <ChevronNext />
          </span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="">Category</a>
          <span>
            <ChevronNext />
          </span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="">Sub-Category</a>
          <span>
            <ChevronNext />
          </span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <span aria-current="page">Product</span>
        </BreadcrumbItem>
      </BreadCrumbWrapper>
    </nav>
  );
}
