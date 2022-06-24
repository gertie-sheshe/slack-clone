import React from "react";
import { FiberManualRecord, Create } from "@mui/icons-material";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>My Org</h2>
          <Status>
            <FiberManualRecord />
            <p>Gertie Sheshe</p>
          </Status>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 49px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;
  > svg {
    background-color: white;
    padding: 6px;
    color: #49274b;
    font-size: 18px;
    border-radius: 999px;
    width: 30px;
    height: 30px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
`;

const Status = styled.div`
  display: flex;
  > p {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > svg {
    color: green;
    font-size: 14px;
    margin-top: 2px;
    margin-right: 2px;
  }
`;
