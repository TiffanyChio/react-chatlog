import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  const participants = chatMessages.map((message, i) => {
    return message.sender;
  });

  // new Set returns only unique elements of an array
  const uniqueParticipants = [...new Set(participants)];
  let nameStr = uniqueParticipants[0];

  for (let i=1; i < uniqueParticipants.length; i+=1) {
    if (i === uniqueParticipants.length - 1) {
      nameStr += ` and ${uniqueParticipants[i]}`;
    } else {
      nameStr += `, ${uniqueParticipants[i]}`;
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between {nameStr}</h1>
      </header>
      <main>
        <ChatLog messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
