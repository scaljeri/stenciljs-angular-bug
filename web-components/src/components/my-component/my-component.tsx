import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';
import { FooEvent } from './models';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event( { bubbles: false, composed: true } ) treeNodeCheckChanged: EventEmitter<FooEvent>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
