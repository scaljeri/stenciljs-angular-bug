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
  inputs: ['idx', 'name', 'state']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['idx', 'name', 'state']
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
  defineCustomElementFn: undefined,
  inputs: ['test']
})
@Component({
  selector: 'web-lucas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['test']
})
export class WebLucas {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
