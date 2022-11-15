import { Component, Host, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'web-lucas',
  styleUrl: 'web-lucas.css',
  shadow: true,
})
export class WebLucas {
  @Element() el: HTMLElement;

  @Prop() test: string;
  @Prop() value: string;

  @Event({ bubbles: true, composed: true }) xyzChange: EventEmitter<string>;

  inputEl: HTMLInputElement;

  onInput() {
    this.value = this.inputEl.value;

    this.xyzChange.emit(this.value);
  }

  componentDidLoad() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.inputEl.addEventListener('input', () => this.onInput());
  }

  render() {
    return (
      <Host>
        Email: <input ref={(el) => { this.inputEl = el }} id="email" /><br />
        <slot></slot>
      </Host>
    );
  }

}
