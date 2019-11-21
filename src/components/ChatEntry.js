import React from 'react';
import './ChatEntry.css';
import Timestamp from './Timestamp';

const ChatEntry = (props) => {
  return(
    <section className={ props.message.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote' }>
      <p className="entry-name">{ props.message.sender }</p>
      <div className="entry-bubble">
        <p>{ props.message.body }</p>
        <p className="entry-time"><Timestamp time={ props.message.timeStamp } /></p>
      </div>
    </section>
  );
};

export default ChatEntry;
