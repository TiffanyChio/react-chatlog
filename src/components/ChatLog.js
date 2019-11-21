import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messageArr = props.messages.map((content, i) => {
    return(
      <ChatEntry key={ i } message={ content } />
    );
  });

  return(
    <article className="chat-log">{ messageArr }</article>
  );
};

export default ChatLog;
