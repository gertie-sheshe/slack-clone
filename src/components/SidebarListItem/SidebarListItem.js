import React from "react";
import styled from "styled-components";

function SidebarListItem({ Icon, title }) {
  if (!title) {
    return null;
  }
  return (
    <SideBarListItemContainer>
      <ItemLink href="">
        {Icon ? (
          <>
            <Icon fontSize="small" />
            <p>{title}</p>
          </>
        ) : (
          <>
            <span>#</span>
            <p>{title}</p>
          </>
        )}
      </ItemLink>
    </SideBarListItemContainer>
  );
}

export default SidebarListItem;

const SideBarListItemContainer = styled.li`
  padding: 5px 0px;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  > p {
    padding-left: 10px;
    font-weight: 600;
  }
`;
