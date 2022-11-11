import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { FooEvent } from './models';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() idx: number;
  @Prop() state: boolean;
  @Prop() name: string;

  @Event( { bubbles: false, composed: true } ) treeNodeCheckChanged: EventEmitter<FooEvent>;

  private getText(): string {
    return 'yolo'
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
