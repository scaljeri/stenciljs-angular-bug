import { NgModule } from "@angular/core";
import { MyComponent, WebLucas } from "./stencil-generated/proxies";
import { defineCustomElements } from '@web-components/loader';

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [WebLucas, MyComponent],
  declarations: [WebLucas, MyComponent]
})
export class WebComponentsModule {

}
