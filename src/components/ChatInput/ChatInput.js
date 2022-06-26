import React, { useRef } from "react";
import styled from "styled-components";
import { addMessage } from "../../config/firebase";

function ChatInput({ channelName, roomId }) {
  const inputRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!roomId) {
      return false;
    }

    await addMessage(roomId, inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <Form onSubmit={sendMessage}>
      <Input
        ref={inputRef}
        aria-label="message room"
        type="text"
        placeholder={`Message #${channelName}`}
      />
    </Form>
  );
}

export default ChatInput;

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  position: fixed;
  bottom: 30px;
  width: 60%;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 10px;
`;
