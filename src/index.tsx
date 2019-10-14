import * as React from "react";

interface eContext<T> {
  Consumer: any;
  Context: React.Context<T>;
  Provider: (children: any) => React.ReactElement;
}

export function createContext<T>(defaultValue: T): eContext<T> {
  const store = Object.assign({}, defaultValue);
  const context = React.createContext(store);

  return {
    Consumer: context.Consumer,
    Context: context,
    Provider: (props: any) => <Provider initialValue={store} context={context} children={props.children}/>,
  };
}

export class Provider extends React.Component<any, any> {

  private store: any;

  constructor(props: any) {
    super(props);

    this.store = this.props.initialValue;

    this.state = {
      store: this.store,
    };

    this.createSetters();
  }

  createSetters() {
    const keys = Object.keys(this.store);
    const values = Object.values(this.store);

    keys.forEach((key, idx) => {
      this.createSetter(key, values[idx]);
    });
  }

  createSetter(key: string, defaultValue: any) {
    this.store['_' + key] = defaultValue;

    Object.defineProperty(this.store, key, {
      get: () => this.store['_' + key],
      set: (val) => {
        this.store['_' + key] = val;
        let stateChange: { [key: string]: any } = {};
        stateChange[key] = val;

        this.setState(Object.assign({}, this.state));
      }
    });
  }

  render() {
    return <this.props.context.Provider
      value={this.state}
    >
        {this.props.children}
    </this.props.context.Provider>;
  }
}
