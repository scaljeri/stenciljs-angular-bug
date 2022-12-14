/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FooEvent } from "./components/my-component/models";
import { IMyData } from "./components/web-lucas/web-lucas.types";
export namespace Components {
    interface MyComponent {
        "idx": number;
        "name": string;
        "state": boolean;
    }
    interface WebLucas {
        "test": string;
        "value": string;
    }
}
export interface MyComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyComponentElement;
}
export interface WebLucasCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWebLucasElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWebLucasElement extends Components.WebLucas, HTMLStencilElement {
    }
    var HTMLWebLucasElement: {
        prototype: HTMLWebLucasElement;
        new (): HTMLWebLucasElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "web-lucas": HTMLWebLucasElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "idx"?: number;
        "name"?: string;
        "onTreeNodeCheckChanged"?: (event: MyComponentCustomEvent<FooEvent>) => void;
        "state"?: boolean;
    }
    interface WebLucas {
        "onXyzChange"?: (event: WebLucasCustomEvent<IMyData>) => void;
        "onXyzChangeXyz"?: (event: WebLucasCustomEvent<IMyData[]>) => void;
        "test"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "web-lucas": WebLucas;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "web-lucas": LocalJSX.WebLucas & JSXBase.HTMLAttributes<HTMLWebLucasElement>;
        }
    }
}
