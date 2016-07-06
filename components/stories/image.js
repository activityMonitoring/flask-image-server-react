// components/stories/button.js

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Image from '../Image';

storiesOf('Image', module)
  .add('with text', () => (
    <Image />
  ))
  .add('with no text', () => (
    <Image />
  ));