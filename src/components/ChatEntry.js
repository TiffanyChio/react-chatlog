import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  return(
    <section>
      <p>{props.message.sender}</p>
      <p>{props.message.body}</p>
      <p><Timestamp time={props.message.timeStamp} /></p>
    </section>
  );
};

export default ChatEntry;
