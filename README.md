# QuickContext

> ContextAPI state management made easy

[![NPM](https://img.shields.io/npm/v/e-context.svg)](https://www.npmjs.com/package/e-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save e-context
```

## Usage
Changing values in a context as simple as:
```tsx
this.context.store.value = newValue;
```

Your context module:
```tsx
import {createContext} from 'e-context';

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

## License

MIT © [PixelsCommander](https://github.com/PixelsCommander)
