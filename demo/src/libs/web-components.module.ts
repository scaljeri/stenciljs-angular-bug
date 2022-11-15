import { NgModule } from "@angular/core";
import { MyComponent, WebLucas } from "./stencil-generated/proxies";
import { defineCustomElements } from '@web-components/loader';
import { TextValueAccessor } from "./stencil-generated/text-value-accessor";

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [WebLucas, MyComponent, TextValueAccessor],
  declarations: [WebLucas, MyComponent, TextValueAccessor]
})
export class WebComponentsModule {

}
