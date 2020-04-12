import React from 'react';
import Messages from '../components/messagesList';

import fetchMock from "fetch-mock";
import MESSAGES from './data/messages';

fetchMock.get('/messages', MESSAGES);

export default {
  title: 'Messages',
  component: Messages
};

export const ToStorybook = () => <Messages  />;

ToStorybook.story = {
  name: 'Messages list',
};
