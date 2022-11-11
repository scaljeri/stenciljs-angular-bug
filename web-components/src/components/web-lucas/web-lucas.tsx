import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'web-lucas',
  styleUrl: 'web-lucas.css',
  shadow: true,
})
export class WebLucas {

  @Prop() test: string;

  render() {
    return (
      <Host>
        XYZXYZ:
        <slot></slot>
      </Host>
    );
  }

}
