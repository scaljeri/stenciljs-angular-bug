import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

// props binding
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      // componentCorePackage: '@web-components/dist/components',
      componentCorePackage: '../../../../web-components/dist/components',
      directivesProxyFile: './../lib-demo/src/libs/stencil-generated/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [sass()],
};
