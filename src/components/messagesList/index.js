import React, {useState, useEffect} from 'react';
import Message from "../message";

const MessagesList = () => {
    const [messages, setMessage] = useState([]);

    useEffect(() => {
        fetch('/messages')
            .then(res => res.json())
            .then(data => setMessage(data.messages));
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            {messages.map((message) => <Message key={message.body} {...message} />)}
        </div>
    )
};

export default MessagesList;