# QuickContext

> ContextAPI state management made easy

[![NPM](https://img.shields.io/npm/v/quickcontext.svg)](https://www.npmjs.com/package/quickcontext) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save quickcontext
```

## Usage
Changing values in a context as simple as:
```tsx
this.context.store.value = newValue;
```

Your context module:
```tsx
import {createContext} from 'quickcontext';

const eContext = createContext({
  clicks: 0,
});

export const Context = eContext.Context;
export const Consumer = eContext.Consumer;
export const Provider = eContext.Provider;
```

Your app:
```tsx
import {Provider} from './Context';
import {Component} from './Component';

export const App = () =>
  <Provider>
    <Component/>
  </Provider>
```

Your component:
```tsx
import React from 'react';
import {Context} from './Context';

export class Component extends React.Component {
  click = () => this.context.store.clicks = Math.random()

  render() {
    return <React.Fragment>
      <button onClick={this.click}/>
      Clicked: {this.context.store.clicks}<br/>
    </React.Fragment>
  }
}

Component.contextType = Context;
```

For more information have a look at example.

## License

MIT © [PixelsCommander](https://github.com/PixelsCommander)
