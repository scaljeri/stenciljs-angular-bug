# Reproduce the Stencil bug

    $> cd demo
    $> yarn
    $> yarn build

The build will throw the error. Note that the generated file from stencil are already present.
To re-create the generated stencil files goto the `web-components` folder

    $> cd web-components
    $> yarn
    $> yarn build
