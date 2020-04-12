import React from 'react';
import Message from '../components/message';

export default {
  title: 'Message',
  component: Message
};

const message = {
  author: "Maksym",
  body: "Hello world. It's the first message!",
  date: "12.04.2020"
};

export const ToStorybook = () => <Message {...message} />;

ToStorybook.story = {
  name: 'Simple Message',
};
