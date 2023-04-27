import { Flex } from "@chakra-ui/react";
import * as React from 'react'
import { useState } from "react";
import Divider from "../Chat/Divider";
import Footer from "../Chat/Footer";
import Header from "../Chat/Header";
import Messages from "../Chat/Messages";

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, I am Digimishka. Go ahead and send me a message." },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={["100%", "100%", "40%"]} h="90%" flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} />
        <Divider />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
