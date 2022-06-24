import React from "react";
import {
  AccountCircle,
  AccessTime,
  Search,
  HelpOutline,
} from "@mui/icons-material";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <AvatarButton>
          <HeaderAvatar />
        </AvatarButton>
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <label>
          Search Salck
          <input type="text" placeholder="Search" />
        </label>
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: white;
  background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > svg {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(AccountCircle)`
  color: white;
  :hover {
    opacity: 0.8;
  }
`;

const AvatarButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  background-color: #421f44;
  display: flex;
  padding: 0 50px;
  border: 1px gray solid;
  > label > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    margin-left: 5px;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: end;
  > svg {
    margin-left: "auto";
    margin-right: 30px;
  }
`;
