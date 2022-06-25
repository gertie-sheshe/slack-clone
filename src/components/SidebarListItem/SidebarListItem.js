import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/appSlice";

function SidebarListItem({ Icon, title, id }) {
  const dispatch = useDispatch();

  if (!title) {
    return null;
  }

  const selectChannel = () => {
    console.log("IDDD", id);
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };

  return (
    <SideBarListItemContainer>
      {Icon ? (
        <ItemLink href="">
          <Icon fontSize="small" />
          <p>{title}</p>
        </ItemLink>
      ) : (
        <Button onClick={selectChannel}>
          <span>#</span>
          {title}
        </Button>
      )}
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

const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  > span {
    margin-right: 10px;
  }
`;
