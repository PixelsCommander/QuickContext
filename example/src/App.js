import React from 'react';
import {Provider} from './Context';
import {Component} from './Component';

export const App = () =>
  <Provider>
    <Component/>
  </Provider>

