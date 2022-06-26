import React from "react";
import { StarBorderOutlined, InfoOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "../../components/ChatInput";
import styled from "styled-components";

function ChatSection() {
  const roomId = useSelector(selectRoomId);

  return (
    <ChatSectionContainer>
      <h2>Chat Room</h2>
      <>
        <ChatRoomInfo>
          <ChatRoomInfoLeft>
            <h3>#room-name</h3>
            <StarBorderOutlined />
          </ChatRoomInfoLeft>
          <ChatRoomInfoRight>
            <Details>
              <InfoOutlined />
              <p>Details</p>
            </Details>
          </ChatRoomInfoRight>
        </ChatRoomInfo>
        <ChatMessages>
          <ChatInput channelName="" channelId={roomId} />
        </ChatMessages>
      </>
    </ChatSectionContainer>
  );
}

export default ChatSection;

const ChatSectionContainer = styled.section`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 50px;
  > h2 {
    margin-left: 20px;
    font-size: 16px;
    text-align: center;
  }
`;

const ChatRoomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div`
  border-radius: 20px;
`;

const ChatInputContainer = styled.div``;

const ChatRoomInfoLeft = styled.div`
  display: flex;
  align-items: center;
  > h3 {
    text-transform: lowercase;
    display: flex;
  }
  > svg {
    margin-left: 5 px;
    font-size: 18px;
  }
`;

const Details = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  > svg {
    font-size: 16px;
    margin-right: 5px;
  }
`;

const ChatRoomInfoRight = styled.div``;
