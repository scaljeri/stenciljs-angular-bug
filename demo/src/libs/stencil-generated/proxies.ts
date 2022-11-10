/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@web-components/dist/components';



import type { FooEvent as IMyComponentFooEvent } from '@web-components/dist/components';
export declare interface MyComponent extends Components.MyComponent {
  /**
   *  
   */
  treeNodeCheckChanged: EventEmitter<CustomEvent<IMyComponentFooEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['treeNodeCheckChanged']);
  }
}


export declare interface WebLucas extends Components.WebLucas {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'web-lucas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class WebLucas {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
