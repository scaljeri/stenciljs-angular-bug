import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'web-lucas',
  styleUrl: 'web-lucas.css',
  shadow: true,
})
export class WebLucas {

  render() {
    return (
      <Host>
        XYZXYZ:
        <slot></slot>
      </Host>
    );
  }

}
