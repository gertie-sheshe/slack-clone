import React from "react";
import styled from "styled-components";
import {
  FiberManualRecord,
  Create,
  ExpandMore,
  Add,
} from "@mui/icons-material";
import SidebarListItem from "../../components/SidebarListItem";
import { navLinks } from "./navData";
import { createRoom } from "../../config/firebase";
import useFirebase from "../../hooks/firebaseHooks";

function Sidebar() {
  const [channels] = useFirebase();

  const addChannel = () => {
    const channelName = prompt("Enter channel name");
    if (channelName) {
      createRoom(channelName);
    }
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h1>My Org</h1>
          <Status>
            <FiberManualRecord />
            <p>Gertie Sheshe</p>
          </Status>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <nav>
        <SidebarList>
          {navLinks.map(({ title, icon }) => (
            <SidebarListItem title={title} Icon={icon} key={title} />
          ))}
        </SidebarList>
      </nav>

      <hr />
      <ChannelButton>
        <ExpandMore fontSize="small" />
        Channels
      </ChannelButton>
      <hr />
      <ChannelButton onClick={addChannel}>
        <Add fontSize="small" />
        Add Channel
      </ChannelButton>

      <SidebarList>
        {channels?.docs.map((channel) => {
          const { name } = channel.data();
          return (
            <SidebarListItem id={channel.id} key={channel.id} title={name} />
          );
        })}
      </SidebarList>
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
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
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
  > h1 {
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

const SidebarList = styled.ul`
  padding: 10px;
  list-style: none;
`;

const ChannelButton = styled.button`
  background-color: transparent;
  padding: 8px 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  border: none;
  :hover {
    cursor: pointer;
  }
  > svg {
    margin-right: 10px;
  }
`;
