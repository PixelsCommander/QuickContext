import React from 'react';
import {Context} from './Context';

export class Component extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click() {
    this.context.store.clicks = Math.random();
  }

  render() {
    return <React.Fragment>
      <button onClick={this.click}/>
      Clicked: {this.context.store.clicks}<br/>
      Clicked more than 10: {this.context.store.tenPlus.toString()}
    </React.Fragment>
  }
}

Component.contextType = Context;
