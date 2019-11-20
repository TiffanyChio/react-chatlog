import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  return(
    <section className="chat-entry local">
      <p className="entry-name">{props.message.sender}</p>
      <div className="entry-bubble">
        <p>{props.message.body}</p>
        <p className="entry-time"><Timestamp time={props.message.timeStamp} /></p>
      </div>
    </section>
  );
};

export default ChatEntry;
