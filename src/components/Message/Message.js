import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
  if (!message) {
    return null;
  }
  return (
    <MessageContainer>
      {userImage && <img src={userImage} alt="" />}
      <MessageInfo>
        {user && <p>{user}</p>}
        {timestamp && (
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        )}
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > p:first-child {
    font-weight: 600;
  }
  > span {
    color: gray;
    font-size: 14px;
  }
`;
